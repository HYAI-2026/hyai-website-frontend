import type { PostCard } from '../types'
import { supabase } from '../lib/supabase'

export interface NewsPost {
  id: string
  title: string
  date: string
  thumbnail: string
  images: string[]
  paragraphs: string[]
}

// newsType 은 "2026-1-club-news".news_type 과 매칭됩니다. 이미지는 Supabase 에서 불러옵니다.
const newsMeta = [
  {
    id: 'baram',
    newsType: 'Windbreaker',
    title: '바람막이 사업',
    date: '26.03',
    paragraphs: ['2026년 HYAI 바람막이 디자인 카드뉴스입니다.'],
  },
  {
    id: 'hygo-ranking',
    newsType: 'hygo-result',
    title: '하이고순위발표',
    date: '26.05.31',
    paragraphs: ['HY-GO! 순위 발표 카드뉴스입니다.'],
  },
  {
    id: 'nweek-end',
    newsType: 'Nweek-class-result',
    title: 'N주특강 종료',
    date: '26.06.10',
    paragraphs: [
      '2026-1학기 HYAI N주특강 파이썬, 머신러닝, 컴퓨터비전, 그래프신경망, 강화학습, Rag/Agent 주제로 진행되었습니다.',
    ],
  },
  {
    id: 'swcontest-2026',
    newsType: 'swcontest',
    title: '2026 SW/ICT/AI 종합학술대회',
    date: '26.09.21',
    coverIndex: 1,
    paragraphs: [
      '📢 [2026 한양대학교 SW/ICT/AI 종합학술대회 – HYAI 독립세션 참가 안내]',
      '안녕하세요. HYAI 학회장 박성철입니다.\n현재 2026 한양대학교 SW/ICT/AI 종합학술대회에 HYAI 학회원을 대상으로 한 "AI Product Challenge" 독립 세션이 별도로 개설되었습니다! 🎉',
      '🤖 AI Product Challenge란?\nAI 기술을 활용해 실제 사용자가 사용할 수 있는 서비스를 개발하는 세션입니다. AI 기술을 실제 서비스에 어떻게 적용했는지를 보여주는 프로젝트라면 참가할 수 있습니다.',
      '신청 시 출품 분야에서\n👉 N. AI Product Challenge (HYAI 독립세션) 을 선택해주시면 됩니다.',
      '🔗 자세한 내용\nhttps://computer.hanyang.ac.kr/news/notice.php?ptype=view&idx=870&page=&code=notice',
    ],
  },
  {
    id: 'modudak-intern',
    newsType: 'modudak',
    title: 'HYAI X 모두닥 인턴 채용',
    date: '26.09.30',
    paragraphs: [
      '[한양대 HYAI X 모두닥] 인턴 채용 캠페인 안내 드립니다!',
      '🏥 모두닥은 어떤 회사인가요?\n전국 300개+ 병원과 제휴한 병원리뷰·의료정보 플랫폼입니다.\n- 2023년 매출 10억 → 2024년 27억 → 2025년 61억(+흑자 전환 성공)\n- 2026년 8월 기준 매출 98억 & 영업이익 16억 달성\n- 15명 소수정예 팀으로 매년 2.5배씩 고속 성장 중!\n- 모두닥 다큐멘터리: https://youtu.be/TdyJD6zfDUo',
      '✨ 이런 분을 기다려요\n- 단순한 업무 보조 인턴이 아닌 End-to-End 오너십을 갖고 일하고 싶은 분\n- 빠르게 성장하는 스타트업에서 나의 기여도를 직접적으로 확인하며 일하고 싶은 분\n- 일의 강도가 높더라도 치열하게 성장하고 싶은 분',
      '💼 채용 중인 인턴 포지션 (ALL 채용전환형+월 500만원)\n1. Problem Solver : Engineering Focused 인턴 - 신사업 제품 MVP 0→1 설계·구현·출시\n2. Problem Solver : Product Marketer 인턴 - 풀 퍼널 마케팅 전략 설계·운영\n3. Problem Solver : 인플루언서 마케팅 인턴 - 전략적 파트너십 확장과 인플루언서 마케팅 체계 고도화\n4. Problem Solver 인턴 (Sales Focused) - 광고상품 기획부터 매출까지, 비즈니스 성과 창출\n5. Problem Solver 인턴 (Recruiting Focused) - TOP 인재 발굴 전략부터 채용 사이클 전 과정 주도',
      '‼️[휴학생 우대/월350만원] 비즈니스 실전 체험형 인턴도 모집중‼️\n👉 공고 링크 : https://modoodoc.career.greetinghr.com/ko/o/237550',
      '🎁 [한양대 HYAI] 멤버 전용 Fast Track 운영\n- 아래 커피챗 신청 폼을 통해 신청 → 컬처핏 설문 응답 검토 → 모두닥과의 적합도가 확인되는 분들과 1:1 온라인 커피챗 진행 (30분)',
      '※ 저희 모두닥은 위에 명시한 인재상에 부합하는 분들과 밀도 있게 대화를 나누고자 합니다. 컬처핏 설문은 이를 확인하는 절차인 점 양해 부탁드립니다.',
      '📌 신청 시 반드시 확인해주세요!\n폼 내 "소속 학회/학생회/동아리" 항목에 반드시 [한양대 HYAI]를 기재해주셔야 해당 소속으로 인정됩니다.',
      '👉🏻 커피챗 신청 폼: https://forms.gle/LzHEnbZR1pQYQWzV8',
      '🗓️ 채용 마감: 2026년 10월 11일',
      '👉🏻 모두닥 채용 홈페이지: https://modoodoc.career.greetinghr.com/ko/home#6fa875d6-44cc-4715-b6b0-d7f659d5bb23',
    ],
  },
] as const

// SSG 경로 생성용. 이미지는 fetchNewsPosts 로 채웁니다.
export const newsPosts: NewsPost[] = newsMeta.map((meta) => ({
  id: meta.id,
  title: meta.title,
  date: meta.date,
  thumbnail: '',
  images: [],
  paragraphs: [...meta.paragraphs],
}))

type ClubNewsRow = {
  news_type: string
  image_url: string
  sort_order: number
}

export async function fetchNewsPosts(): Promise<NewsPost[]> {
  const { data, error } = await supabase
    .from('2026-1-club-news')
    .select('news_type, image_url, sort_order')
    .order('sort_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as ClubNewsRow[]
  const imagesByType = new Map<string, string[]>()

  for (const row of rows) {
    const list = imagesByType.get(row.news_type) ?? []
    list.push(row.image_url)
    imagesByType.set(row.news_type, list)
  }

  return newsMeta.flatMap((meta) => {
    const rowImages = imagesByType.get(meta.newsType) ?? []
    if (rowImages.length === 0) return []
    const coverIndex = 'coverIndex' in meta ? meta.coverIndex : 0
    const cover = rowImages[coverIndex] ?? rowImages[0]
    const images = [cover, ...rowImages.filter((url) => url !== cover)]
    return [
      {
        id: meta.id,
        title: meta.title,
        date: meta.date,
        thumbnail: cover,
        images,
        paragraphs: [...meta.paragraphs],
      },
    ]
  })
}

export function getNewsPost(id: string | undefined) {
  return newsPosts.find((post) => post.id === id)
}

export async function fetchNewsPost(
  id: string | undefined,
): Promise<NewsPost | undefined> {
  if (!id) return undefined
  const all = await fetchNewsPosts()
  return all.find((post) => post.id === id)
}

export function getNewsDetailPath(id: string) {
  return `/activities/news/${id}`
}

export async function fetchHomeNewsPosts(): Promise<PostCard[]> {
  const posts = await fetchNewsPosts()
  return posts.map((post, index) => ({
    id: index + 1,
    title: post.title,
    date: post.date,
    image: post.thumbnail,
    href: getNewsDetailPath(post.id),
  }))
}
