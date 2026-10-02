import type { HeroSlide } from '../types'
import { supabase } from '../lib/supabase'

// 타이틀/설명은 로컬 유지. 이미지만 main_carousel 에서 불러와 순서대로 병합합니다.
const heroSlideContents: Omit<HeroSlide, 'image'>[] = [
  {
    id: 1,
    title: '에리카 유일의\n인공지능 학회',
    description:
      'HYAI는 인공지능에 관심있는 사람들이 모여\n정보를 공유하고 친목을 도모하는 학회입니다.',
  },
  {
    id: 2,
    title: '학우들간의 세미나 및 워크숍',
    description: '지식을 나누고 함께 성장하는\n배움의 장을 만듭니다.',
  },
  {
    id: 3,
    title: '수강자 맞춤형 스터디',
    description: '수준에 맞춰 진행하며\n결과물 제작에 집중합니다.',
  },
]

type MainCarouselRow = {
  id: number
  image_url: string
  sort_order: number
}

export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  const { data, error } = await supabase
    .from('main_carousel')
    .select('id, image_url, sort_order')
    .order('sort_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as MainCarouselRow[]

  return rows.map((row, index) => {
    const content = heroSlideContents[index]
    return {
      id: content?.id ?? row.id,
      image: row.image_url,
      title: content?.title,
      description: content?.description,
    }
  })
}

type VideoRow = {
  name: string
  video_url: string
  sort_order: number
}

export async function fetchVideoUrl(name: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('videos')
    .select('name, video_url, sort_order')
    .eq('name', name)
    .order('sort_order', { ascending: true })
    .limit(1)
    .maybeSingle()

  if (error) {
    throw error
  }

  const row = data as VideoRow | null
  return row?.video_url ?? null
}
