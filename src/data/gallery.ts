import type { PostCard } from '../types'

import garalley1 from '../pages/activities/images/garalley/garalley1.jpeg'
import garalley2 from '../pages/activities/images/garalley/garalley2.jpeg'
import garalley3 from '../pages/activities/images/garalley/garalley3.jpeg'

export interface GalleryItem {
  id: string
  title: string
  description: string
  date: string
  image: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'garalley-1',
    title: '벚꽃행사 화개춘난',
    description: '임원진들끼리 모여 찍은 사진입니다.',
    date: '26.04.09',
    image: garalley1,
  },
  {
    id: 'garalley-2',
    title: '2차 임원 회식',
    description: '중간고사 끝나고 임원진끼리 모여 찍은 사진입니다.',
    date: '26.05.04',
    image: garalley2,
  },
  {
    id: 'garalley-3',
    title: 'ESPERO',
    description: '한양대 에리카 대학축제에서 임원진끼리 모여 찍은 사진입니다.',
    date: '26.05.19',
    image: garalley3,
  },
]

export function getGalleryItem(id: string | undefined) {
  return galleryItems.find((item) => item.id === id)
}

export function getGalleryDetailPath(id: string) {
  return `/activities/gallery/${id}`
}

export const homeGalleryPosts: PostCard[] = galleryItems.map((item, index) => ({
  id: index + 1,
  title: item.title,
  summary: item.description || undefined,
  date: item.date,
  image: item.image,
  href: getGalleryDetailPath(item.id),
}))
