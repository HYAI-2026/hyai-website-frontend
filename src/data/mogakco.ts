import { supabase } from '../lib/supabase'

export interface MogakcoSession {
  id: string
  date: string
  thumbnail: string
  detailImage?: string
}

const THUMBNAIL_ORDER = 1

// detailOrder 는 mogako.display_order 와 매칭됩니다. 이미지는 Supabase 에서 불러옵니다.
const sessionMeta = [
  { number: 1, date: '26.03.24', detailOrder: 2 },
  { number: 2, date: '26.04.13', detailOrder: 3 },
  { number: 3, date: '26.04.18', detailOrder: 4 },
  { number: 4, date: '26.05.11', detailOrder: 5 },
  { number: 6, date: '26.06.10', detailOrder: 6 },
  { number: 5, date: '26.06.16', detailOrder: 6 },
] as const

// SSG 경로 생성용. 이미지는 fetchMogakcoSessions 로 채웁니다.
export const mogakcoSessions: MogakcoSession[] = sessionMeta.map((meta) => ({
  id: `mogako-${meta.number}`,
  date: meta.date,
  thumbnail: '',
  detailImage: undefined,
}))

export const visibleMogakcoSessions = mogakcoSessions

type MogakoRow = {
  image_url: string
  display_order: number
}

export async function fetchMogakcoSessions(): Promise<MogakcoSession[]> {
  const { data, error } = await supabase
    .from('mogako')
    .select('image_url, display_order')
    .order('display_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as MogakoRow[]
  const byOrder = new Map<number, string>()

  for (const row of rows) {
    byOrder.set(row.display_order, row.image_url)
  }

  const thumbnail = byOrder.get(THUMBNAIL_ORDER) ?? ''

  return sessionMeta.flatMap((meta) => {
    const detailImage = byOrder.get(meta.detailOrder)
    if (!detailImage) return []
    return [
      {
        id: `mogako-${meta.number}`,
        date: meta.date,
        thumbnail: thumbnail || detailImage,
        detailImage,
      },
    ]
  })
}

export function getMogakcoSession(id: string | undefined) {
  return mogakcoSessions.find((session) => session.id === id)
}

export async function fetchMogakcoSession(
  id: string | undefined,
): Promise<MogakcoSession | undefined> {
  if (!id) return undefined
  const all = await fetchMogakcoSessions()
  return all.find((session) => session.id === id)
}

export function getMogakcoDetailPath(id: string) {
  return `/exchange/mogakco/${id}`
}
