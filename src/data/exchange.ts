import hearImage from '../pages/exchange/images/mt/Hear.png'

export const exchangeNav = [
  { label: 'HY-GO!', path: '/exchange' },
  { label: '모각코', path: '/exchange/mogakco' },
  { label: 'MT', path: '/exchange/mt' },
] as const

export interface ExchangeCard {
  id: string
  title: string
  summary: string
  date: string
  image: string
  paragraphs: string[]
}

export type ExchangeCategory = 'haigo' | 'mogakco' | 'mt'

export const exchangeCategoryPaths: Record<ExchangeCategory, string> = {
  haigo: '/exchange',
  mogakco: '/exchange/mogakco',
  mt: '/exchange/mt',
}

export const mtEvents: ExchangeCard[] = [
  {
    id: 'mt-2025-joint',
    title: 'HYAI&Jaram&HY-END 연합행사 HEAR',
    summary: '참여 학회 : HYAI, Jaram, HY-END',
    date: '26.05.29',
    image: hearImage,
    paragraphs: [
      '세 학회가 함께하는 연합 행사입니다.',
      '팀 빌딩, 레크리에이션, 주루마블을 통해 학회원 간 친목을 도모합니다.',
    ],
  },
]

const exchangeCardLists: Record<'mt', ExchangeCard[]> = {
  mt: mtEvents,
}

export function getExchangeCard(category: 'mt', id: string | undefined) {
  return exchangeCardLists[category].find((item) => item.id === id)
}

export function getExchangeDetailPath(category: ExchangeCategory, id: string) {
  if (category === 'haigo') {
    return `/exchange/haigo/${id}`
  }
  return `/exchange/${category}/${id}`
}
