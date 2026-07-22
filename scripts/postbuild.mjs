// SSG 빌드 후처리:
//  1) dist 에 실제로 생성된 모든 index.html 을 스캔해 sitemap.xml 생성
//     (실제 출력물 기준이므로 SSG 경로와 sitemap 이 절대 어긋나지 않음)
//  2) GitHub Pages 커스텀 404 를 위해 dist/404/index.html -> dist/404.html 복사
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

// GitHub Pages 커스텀 404 생성
const notFoundNested = path.join(DIST, '404', 'index.html')
const notFoundOut = path.join(DIST, '404.html')
if (fs.existsSync(notFoundNested)) {
  fs.copyFileSync(notFoundNested, notFoundOut)
  console.log('✅ 404.html 생성 완료 (dist/404/index.html 복사)')
} else {
  console.warn('⚠️  dist/404/index.html 이 없어 404.html 을 생성하지 못했습니다.')
}

console.log('🎉 postbuild 완료')
