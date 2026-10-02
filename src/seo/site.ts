// 사이트 대표(canonical) 호스트. CNAME(hyai.kr) 및 Organization JSON-LD와 동일하게 통일합니다.
// 모든 canonical / og:url / sitemap URL 은 이 호스트를 사용해야 합니다.
export const SITE = {
  host: 'https://hyai.kr',
  name: 'HYAI',
  fullName: '한양대학교 ERICA 인공지능학회 HYAI',
  // <title> 뒤에 붙는 공통 접미사
  titleSuffix: ' | 한양대 ERICA 인공지능학회 HYAI',
  defaultDescription:
    'HYAI는 한양대 에리카 소프트웨어융합대학 인공지능학회입니다. HYAI N주특강, HY-GO, 자율그룹스터디, 모각코, 일일세미나, 초청강연 등의 활동을 운영합니다.',
} as const

// 경로(leading slash 포함)를 대표 호스트 기준 절대 URL 로 변환합니다.
export function absoluteUrl(path: string): string {
  if (path === '/') return `${SITE.host}/`
  return `${SITE.host}${path.startsWith('/') ? path : `/${path}`}`
}

// 사이트 전체 공통 Organization JSON-LD. description 등은 SITE 상수를 재사용합니다.
export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  alternateName: [
    '한양대 에리카 소프트웨어융합대학 인공지능학회 HYAI',
    '한양대학교 ERICA 소프트웨어융합대학 인공지능학회 HYAI',
  ],
  url: `${SITE.host}/`,
  description: SITE.defaultDescription,
  department: {
    '@type': 'CollegeOrUniversity',
    name: '한양대 에리카 소프트웨어융합대학',
  },
  knowsAbout: [
    '파이썬',
    '머신러닝',
    '컴퓨터비전',
    '그래프신경망',
    '강화학습',
    'RAG/Agent',
  ],
} as const

// 홈 전용 WebSite JSON-LD. description 은 SITE 와 동일 소스를 사용합니다.
export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.fullName,
  alternateName: SITE.name,
  url: `${SITE.host}/`,
  description: SITE.defaultDescription,
  inLanguage: 'ko-KR',
} as const
