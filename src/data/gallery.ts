import type { PostCard } from '../types'
import { supabase } from '../lib/supabase'

export interface GalleryItem {
  id: string
  title: string
  description: string
  date: string
  image: string
}

// 타이틀/설명은 로컬 유지. 이미지는 gallery 테이블에서 sort_order 순으로 병합합니다.
const galleryContents: Omit<GalleryItem, 'image'>[] = [
  {
    id: 'garalley-1',
    title: '벚꽃행사 화개춘난',
    description: '임원진들끼리 모여 찍은 사진입니다.',
    date: '26.04.09',
  },
  {
    id: 'garalley-2',
    title: '2차 임원 회식',
    description: '중간고사 끝나고 임원진끼리 모여 찍은 사진입니다.',
    date: '26.05.04',
  },
  {
    id: 'garalley-3',
    title: 'ESPERO',
    description: '한양대 에리카 대학축제에서 임원진끼리 모여 찍은 사진입니다.',
    date: '26.05.19',
  },
]

// SSG 경로 생성용. 이미지는 fetchGalleryItems 로 채웁니다.
export const galleryItems: GalleryItem[] = galleryContents.map((item) => ({
  ...item,
  image: '',
}))

type GalleryRow = {
  image_url: string
  sort_order: number
}

export async function fetchGalleryItems(): Promise<GalleryItem[]> {
  const { data, error } = await supabase
    .from('gallery')
    .select('image_url, sort_order')
    .order('sort_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as GalleryRow[]

  return rows.flatMap((row, index) => {
    const content = galleryContents[index]
    if (!content) return []
    return [{ ...content, image: row.image_url }]
  })
}

export function getGalleryItem(id: string | undefined) {
  return galleryItems.find((item) => item.id === id)
}

export async function fetchGalleryItem(
  id: string | undefined,
): Promise<GalleryItem | undefined> {
  if (!id) return undefined
  const all = await fetchGalleryItems()
  return all.find((item) => item.id === id)
}

export function getGalleryDetailPath(id: string) {
  return `/activities/gallery/${id}`
}

export async function fetchHomeGalleryPosts(): Promise<PostCard[]> {
  const items = await fetchGalleryItems()
  return items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    summary: item.description || undefined,
    date: item.date,
    image: item.image,
    href: getGalleryDetailPath(item.id),
  }))
}
