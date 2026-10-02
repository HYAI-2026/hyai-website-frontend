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
    const images = imagesByType.get(meta.newsType) ?? []
    if (images.length === 0) return []
    return [
      {
        id: meta.id,
        title: meta.title,
        date: meta.date,
        thumbnail: images[0],
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
