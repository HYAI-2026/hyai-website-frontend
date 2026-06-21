const imageModules = import.meta.glob<string>(
  '../pages/exchange/images/hygo*/*.{jpeg,jpg,png}',
  { eager: true, import: 'default' },
)

export interface HaigoGroup {
  id: string
  groupNumber: number
  label: string
  members: string
  date: string
  thumbnail: string
  images: string[]
}

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

function getImageIndex(path: string) {
  const match = path.match(/-(\d+)\.(jpeg|jpg|png)$/i)
  return match ? parseInt(match[1], 10) : 0
}

function loadGroupImages(groupNumber: number) {
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/hygo${groupNumber}/`))
    .sort(([a], [b]) => getImageIndex(a) - getImageIndex(b))
    .map(([, src]) => src)
}

export const haigoGroups: HaigoGroup[] = groupMeta.map((meta) => {
  const images = loadGroupImages(meta.groupNumber)
  const thumbnail = images[meta.thumbnailIndex] ?? images[0]

  return {
    id: `group-${meta.groupNumber}`,
    groupNumber: meta.groupNumber,
    label: `${meta.groupNumber}조`,
    members: meta.members,
    date: meta.date,
    thumbnail,
    images,
  }
})

export function getHaigoGroup(id: string | undefined) {
  return haigoGroups.find((group) => group.id === id)
}

export function getHaigoDetailPath(id: string) {
  return `/exchange/haigo/${id}`
}
