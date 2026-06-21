import mogako0 from '../pages/exchange/images/mogako/mogako0.png'
import mogako1 from '../pages/exchange/images/mogako/mogako1.png'
import mogako2 from '../pages/exchange/images/mogako/mogako2.png'
import mogako3 from '../pages/exchange/images/mogako/mogako3.jpeg'
import mogako4 from '../pages/exchange/images/mogako/mogako4.png'
import mogako5 from '../pages/exchange/images/mogako/mogako5.jpeg'

export interface MogakcoSession {
  id: string
  date: string
  thumbnail: string
  detailImage?: string
}

const sessionMeta = [
  { number: 1, date: '26.03.24', detailImage: mogako1 },
  { number: 2, date: '26.04.13', detailImage: mogako2 },
  { number: 3, date: '26.04.18', detailImage: mogako3 },
  { number: 4, date: '26.05.11', detailImage: mogako4 },
  { number: 6, date: '26.06.10', detailImage: mogako5 },
  { number: 5, date: '26.06.16', detailImage: mogako5 },
] as const

export const mogakcoSessions: MogakcoSession[] = sessionMeta.map((meta) => ({
  id: `mogako-${meta.number}`,
  date: meta.date,
  thumbnail: mogako0,
  detailImage: 'detailImage' in meta ? meta.detailImage : undefined,
}))

export const visibleMogakcoSessions = mogakcoSessions.filter((session) => session.detailImage)

export function getMogakcoSession(id: string | undefined) {
  return mogakcoSessions.find((session) => session.id === id)
}

export function getMogakcoDetailPath(id: string) {
  return `/exchange/mogakco/${id}`
}
