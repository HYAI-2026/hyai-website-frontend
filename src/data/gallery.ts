import type { PostCard } from '../types'
import { supabase } from '../lib/supabase'

export interface GalleryItem {
  id: string
  title: string
  description: string
  date: string
  image: string
  images: string[]
}

// 타이틀/설명은 로컬 유지. groupKey 는 gallery.image_url 경로와 매칭됩니다.
const galleryContents: {
  id: string
  groupKey: string
  title: string
  description: string
  date: string
}[] = [
  {
    id: 'garalley-1',
    groupKey: 'garalley1',
    title: '벚꽃행사 화개춘난',
    description: '임원진들끼리 모여 찍은 사진입니다.',
    date: '26.04.09',
  },
  {
    id: 'garalley-2',
    groupKey: 'garalley2',
    title: '2차 임원 회식',
    description: '중간고사 끝나고 임원진끼리 모여 찍은 사진입니다.',
    date: '26.05.04',
  },
  {
    id: 'garalley-3',
    groupKey: 'garalley3',
    title: 'ESPERO',
    description: '한양대 에리카 대학축제에서 임원진끼리 모여 찍은 사진입니다.',
    date: '26.05.19',
  },
  {
    id: 'lt-2026-1',
    groupKey: '2026-1-LT', // storage 경로와 매칭
    title: '2026년 1학기 임원진 LT',
    description: '2026년 1학기 임원진 LT 사진과 영상입니다.',
    date: '26.08.16',
  },
  {
    id: 'gadu-2026-2',
    groupKey: '2026-2-gadu', // storage 경로와 매칭
    title: '2026년 2학기 가두모집',
    description: '2026년 2학기 가두모집 현장 사진입니다.',
    date: '26.09.10',
  },
]

// SSG 경로 생성용. 이미지는 fetchGalleryItems 로 채웁니다.
export const galleryItems: GalleryItem[] = galleryContents.map((item) => ({
  id: item.id,
  title: item.title,
  description: item.description,
  date: item.date,
  image: '',
  images: [],
}))

type GalleryRow = {
  image_url: string
  sort_order: number
}

function isVideoUrl(url: string) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url)
}

function pickThumbnail(images: string[]) {
  return images.find((url) => !isVideoUrl(url)) ?? images[0] ?? ''
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
  const imagesByGroup = new Map<string, string[]>()

  for (const row of rows) {
    const meta = galleryContents.find((item) =>
      row.image_url.includes(item.groupKey),
    )
    if (!meta) continue
    const list = imagesByGroup.get(meta.id) ?? []
    list.push(row.image_url)
    imagesByGroup.set(meta.id, list)
  }

  return galleryContents.flatMap((content) => {
    const images = imagesByGroup.get(content.id) ?? []
    if (images.length === 0) return []
    return [
      {
        id: content.id,
        title: content.title,
        description: content.description,
        date: content.date,
        image: pickThumbnail(images),
        images,
      },
    ]
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

export { isVideoUrl }
