import carousel1 from '../assets/images/main-carousel/carousel1.jpeg'
import carousel2 from '../assets/images/main-carousel/carousel2.jpeg'
import carousel3 from '../assets/images/main-carousel/carousel3.jpeg'

export const activitiesNav = [
  { label: '학회 소식', path: '/activities' },
  { label: '수상경력', path: '/activities/awards' },
  { label: '갤러리', path: '/activities/gallery' },
] as const

export interface ActivityPost {
  id: string
  title: string
  summary: string
  date: string
  image: string
  paragraphs: string[]
}

export type ActivityCategory = 'news' | 'awards' | 'gallery'

export const activityCategoryPaths: Record<ActivityCategory, string> = {
  news: '/activities',
  awards: '/activities/awards',
  gallery: '/activities/gallery',
}

export const majorAwards = [
  'SW중심대학 공동해커톤 1위 대상 과학기술정보통신부 장관상🥇',
  '초광역 GPT-AI 활용 창업 경진대회 1위 대상 마이크로소프트 대표이사상🥇',
  '국민안전발명챌린지 대국민 부분 1위 최우수상 특허청장상🥇',
  '제 10회 대한민국 SW융합 해커톤 자유주제 부문 공동 2위 우수상 세종특별자치시장상🥈',
  '전국 대학생 SW 창업 아이디어톤 1위 대상 한양대학교 총장상🥇',
  '한양대학교 제 11회 SW 창업 아이디어톤 경진대회 1위 대상, 2위 최우수상 한양대학교 총장상🥇🥈',
  'ERICA 창업경진대회 2위 우수상 한양대학교 ERICA LINC 3.0 사업단장상 2회🥈',
  'SID AUDITION 원페이퍼 창업 아이디어 경진대회 1위 대상 (1회),  2위 우수상(1회), SID상 5회🥈🎖️',
  '2024 한양대학교 SW/ICT/AI 학술대회 대상 (1위), 우수상 (2위) 🥇🥈',
  '2022 한양대 ERICA 어드벤쳐디자인1 콘테스트 - 1위 🥇',
  '2022년 GIST 창의융합경진대회 (우수상) 🥈',
  '2024 K-스타트업 본선 진출 (약 10,000팀 중 25등)',
  '2025 한양대학교 SW/ICT/AI 학술대회 최우수상, 우수상 🥇🥈',
  '2025 한양또래튜터링 최우수, 우수 🥇🥈',
  '2025 지능형로봇사업단 WE-MEET 경진대회 장려(3위) 🥈',
] as const

export const galleryPosts: ActivityPost[] = [
  {
    id: 'gallery-2026-hear',
    title: 'HEAR 연합행사',
    summary: 'HYAI, Jaram, HY-END',
    date: '26.05.31',
    image: carousel2,
    paragraphs: [
      'HYAI&Jaram&HY-END 연합행사 HEAR 현장 사진입니다.',
    ],
  },
  {
    id: 'gallery-2026-haigo',
    title: 'HY-GO! 활동',
    summary: 'HYAI 학회원',
    date: '26.03~26.05',
    image: carousel1,
    paragraphs: [
      'HY-GO! 조별 활동 사진입니다.',
    ],
  },
  {
    id: 'gallery-2026-study',
    title: '스터디 활동',
    summary: 'HYAI N주특강',
    date: '26.03~26.05',
    image: carousel3,
    paragraphs: [
      'HYAI N주특강 및 스터디 활동 사진입니다.',
    ],
  },
]

const activityPostLists: Record<'gallery', ActivityPost[]> = {
  gallery: galleryPosts,
}

export function getActivityPost(category: 'gallery', id: string | undefined) {
  return activityPostLists[category].find((item) => item.id === id)
}

export function getActivityDetailPath(category: 'gallery', id: string) {
  return `/activities/${category}/${id}`
}

function isNewsPath(pathname: string) {
  return pathname === '/activities' || pathname.startsWith('/activities/news/')
}

export function isActivitiesNavActive(path: string, pathname: string) {
  if (path === '/activities') {
    return isNewsPath(pathname)
  }
  return pathname === path || pathname.startsWith(`${path}/`)
}
