import { Head } from 'vite-react-ssg'
import { SITE, absoluteUrl } from '../../seo/site'
import defaultOgImage from '../../assets/images/hyai.png'

type SeoProps = {
  /** 페이지 고유 제목 (접미사 제외) */
  title: string
  /** meta description */
  description: string
  /** canonical 경로 (leading slash 포함, 예: '/introduction') */
  path: string
  /** OG 이미지 (Vite import 결과 또는 절대 URL). 생략 시 기본 로고 사용 */
  image?: string
  /** true 면 title 접미사를 붙이지 않음 (홈 등) */
  noSuffix?: boolean
  /** true 면 색인 제외 (404 등) */
  noindex?: boolean
}

// 페이지별 head 메타데이터를 SSG 로 렌더된 HTML <head> 에 직접 포함시킵니다.
export default function Seo({
  title,
  description,
  path,
  image,
  noSuffix,
  noindex,
}: SeoProps) {
  const fullTitle = noSuffix ? title : `${title}${SITE.titleSuffix}`
  const url = absoluteUrl(path)
  const rawImage = image ?? defaultOgImage
  const ogImage = rawImage.startsWith('http') ? rawImage : `${SITE.host}${rawImage}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ko_KR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
