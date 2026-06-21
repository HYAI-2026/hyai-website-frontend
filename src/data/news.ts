import type { PostCard } from '../types'

const imageModules = import.meta.glob<string>(
  '../pages/activities/images/**/*.{jpeg,jpg,png}',
  { eager: true, import: 'default' },
)

export interface NewsPost {
  id: string
  title: string
  date: string
  thumbnail: string
  images: string[]
  paragraphs: string[]
}

const newsMeta = [
  {
    id: 'baram',
    folder: 'baram',
    title: '바람막이 사업',
    date: '26.03',
    paragraphs: ['2026년 HYAI 바람막이 디자인 카드뉴스입니다.'],
  },
  {
    id: 'hygo-ranking',
    folder: 'hygo',
    title: '하이고순위발표',
    date: '26.05.31',
    paragraphs: ['HY-GO! 순위 발표 카드뉴스입니다.'],
  },
  {
    id: 'nweek-end',
    folder: 'Nweek',
    title: 'N주특강 종료',
    date: '26.06.10',
    paragraphs: ['2026-1학기 HYAI N주특강 파이썬, 머신러닝, 컴퓨터비전, 그래프신경망, 강화학습, Rag/Agent 주제로 진행되었습니다.'],
  },
] as const

function getImageIndex(path: string) {
  const match = path.match(/(\d+)\.(jpeg|jpg|png)$/i)
  return match ? parseInt(match[1], 10) : 0
}

function loadFolderImages(folder: string) {
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/images/${folder}/`))
    .sort(([a], [b]) => getImageIndex(a) - getImageIndex(b))
    .map(([, src]) => src)
}

export const newsPosts: NewsPost[] = newsMeta.map((meta) => {
  const images = loadFolderImages(meta.folder)
  const thumbnail = images[0]

  return {
    id: meta.id,
    title: meta.title,
    date: meta.date,
    thumbnail,
    images,
    paragraphs: [...meta.paragraphs],
  }
})

export function getNewsPost(id: string | undefined) {
  return newsPosts.find((post) => post.id === id)
}

export function getNewsDetailPath(id: string) {
  return `/activities/news/${id}`
}

export const homeNewsPosts: PostCard[] = newsPosts.map((post, index) => ({
  id: index + 1,
  title: post.title,
  date: post.date,
  image: post.thumbnail,
  href: getNewsDetailPath(post.id),
}))
