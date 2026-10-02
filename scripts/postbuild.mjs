import fs from 'node:fs'
import path from 'node:path'

const DIST = 'dist'
const HOST = 'https://hyai.kr'

if (!fs.existsSync(DIST)) {
  console.error(`❌ ${DIST} 디렉터리가 없습니다. 빌드가 먼저 실행되어야 합니다.`)
  process.exit(1)
}

// dist 하위의 모든 index.html 을 찾아 URL 경로로 변환
function collectRoutes(dir, base = '') {
  const routes = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name === 'assets') continue // 정적 자산 디렉터리는 건너뜀
      routes.push(...collectRoutes(path.join(dir, entry.name), `${base}/${entry.name}`))
    } else if (entry.name === 'index.html') {
      routes.push(base === '' ? '/' : base)
    }
  }
  return routes
}

/** dist 하위 모든 .html 파일 경로 수집 */
function collectHtmlFiles(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectHtmlFiles(full))
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(full)
    }
  }
  return files
}

/**
 * type="module" script 태그의 async 속성만 제거 (idempotent).
 * 다른 속성(crossorigin, src 등)과 비-module script는 유지.
 */
function stripAsyncFromModuleScripts(html) {
  return html.replace(/<script\b([^>]*)>/gi, (tag, attrs) => {
    if (!/\btype\s*=\s*(["'])module\1/i.test(attrs)) {
      return tag
    }
    if (!/\basync\b/i.test(attrs)) {
      return tag
    }
    const cleanedAttrs = attrs.replace(
      /\s*\basync(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*))?/gi,
      '',
    )
    return `<script${cleanedAttrs}>`
  })
}

function removeModuleScriptAsync() {
  const htmlFiles = collectHtmlFiles(DIST).sort((a, b) => a.localeCompare(b))
  let changedCount = 0
  let checkedCount = 0

  for (const file of htmlFiles) {
    checkedCount += 1
    const before = fs.readFileSync(file, 'utf8')
    const after = stripAsyncFromModuleScripts(before)
    if (after !== before) {
      fs.writeFileSync(file, after)
      changedCount += 1
      console.log(`  ✏  async 제거: ${file}`)
    }
  }

  console.log(
    `✅ module script async 제거 완료 (검사 ${checkedCount}개, 수정 ${changedCount}개)`,
  )
  return { checkedCount, changedCount }
}

// 1) type="module" script 의 async 제거 (모든 HTML)
removeModuleScriptAsync()

// 2) sitemap.xml 생성
const allRoutes = collectRoutes(DIST)
  .filter((r) => r !== '/404') // 404 페이지는 sitemap 에서 제외
  .sort((a, b) => a.localeCompare(b))

const urls = allRoutes
  .map((route) => {
    const loc = route === '/' ? `${HOST}/` : `${HOST}${route}`
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`
  })
  .join('\n')

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemapXml)
console.log(`✅ sitemap.xml 생성 완료 (${allRoutes.length} URLs)`)

// 3) GitHub Pages 커스텀 404 생성
const notFoundNested = path.join(DIST, '404', 'index.html')
const notFoundOut = path.join(DIST, '404.html')
if (fs.existsSync(notFoundNested)) {
  fs.copyFileSync(notFoundNested, notFoundOut)
  console.log('✅ 404.html 생성 완료 (dist/404/index.html 복사)')
  // 복사본에도 async 가 남지 않도록 한 번 더 정규화 (이미 제거된 경우 no-op)
  const copied = fs.readFileSync(notFoundOut, 'utf8')
  const normalized = stripAsyncFromModuleScripts(copied)
  if (normalized !== copied) {
    fs.writeFileSync(notFoundOut, normalized)
    console.log('  ✏  async 제거: dist/404.html')
  }
} else {
  console.warn('⚠️  dist/404/index.html 이 없어 404.html 을 생성하지 못했습니다.')
}

console.log('🎉 postbuild 완료')
