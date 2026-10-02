import { supabase } from '../lib/supabase'

export interface HaigoGroup {
  id: string
  groupNumber: number
  label: string
  members: string
  date: string
  thumbnail: string
  images: string[]
}

// thumbnailIndex 는 hygo_2026_1.image_order 와 매칭됩니다. 이미지는 Supabase 에서 불러옵니다.
const groupMeta = [
  { groupNumber: 1, members: '김다인, 박성철, 황원준, 구준영', date: '26.03~26.05', thumbnailIndex: 1 },
  { groupNumber: 2, members: '최건희, 이규한, 문상훈, 이미혜, 이승연', date: '26.03~26.05', thumbnailIndex: 1 },
  { groupNumber: 3, members: '조윤채, 최지안, 박규헌, 이지민, 정우찬', date: '26.03~26.05', thumbnailIndex: 5 },
  { groupNumber: 4, members: '이정호, 박준희, 권규현, 김수빈, 이제빈', date: '26.03~26.05', thumbnailIndex: 8 },
  { groupNumber: 5, members: '진찬혁, 신민규, 백지윤, 정지윤, 조정은', date: '26.03~26.05', thumbnailIndex: 8 },
  { groupNumber: 6, members: '임진우, 홍정우, 유지예, 엄주은, 정연주', date: '26.03~26.05', thumbnailIndex: 9 },
  { groupNumber: 7, members: '옥재원, 이지안, 김동규, 양승진, 배준웅', date: '26.03~26.05', thumbnailIndex: 1 },
  { groupNumber: 8, members: '강인구, 권지인, 허은서, 김영우, 심창우', date: '26.03~26.05', thumbnailIndex: 10 },
  { groupNumber: 10, members: '박하민, 정승빈, 신일란, 안하연', date: '26.03~26.05', thumbnailIndex: 3 },
  { groupNumber: 11, members: '정민서, 김태성, 이우열, 하나근', date: '26.03~26.05', thumbnailIndex: 7 },
] as const

// SSG 경로 생성용. 이미지는 fetchHaigoGroups 로 채웁니다.
export const haigoGroups: HaigoGroup[] = groupMeta.map((meta) => ({
  id: `group-${meta.groupNumber}`,
  groupNumber: meta.groupNumber,
  label: `${meta.groupNumber}조`,
  members: meta.members,
  date: meta.date,
  thumbnail: '',
  images: [],
}))

type HygoRow = {
  group_number: number
  image_url: string
  image_order: number
}

export async function fetchHaigoGroups(): Promise<HaigoGroup[]> {
  const { data, error } = await supabase
    .from('hygo_2026_1')
    .select('group_number, image_url, image_order')
    .order('group_number', { ascending: true })
    .order('image_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as HygoRow[]
  const imagesByGroup = new Map<number, string[]>()

  for (const row of rows) {
    const list = imagesByGroup.get(row.group_number) ?? []
    list.push(row.image_url)
    imagesByGroup.set(row.group_number, list)
  }

  return groupMeta.flatMap((meta) => {
    const images = imagesByGroup.get(meta.groupNumber) ?? []
    if (images.length === 0) return []
    return [
      {
        id: `group-${meta.groupNumber}`,
        groupNumber: meta.groupNumber,
        label: `${meta.groupNumber}조`,
        members: meta.members,
        date: meta.date,
        thumbnail: images[meta.thumbnailIndex] ?? images[0],
        images,
      },
    ]
  })
}

export function getHaigoGroup(id: string | undefined) {
  return haigoGroups.find((group) => group.id === id)
}

export async function fetchHaigoGroup(
  id: string | undefined,
): Promise<HaigoGroup | undefined> {
  if (!id) return undefined
  const all = await fetchHaigoGroups()
  return all.find((group) => group.id === id)
}

export function getHaigoDetailPath(id: string) {
  return `/exchange/haigo/${id}`
}
