
import aimajor from '../pages/lectures/images/AImajor.jpeg'
import llmImage from '../pages/lectures/images/LLM.png'
import journal1 from '../pages/lectures/images/journal1.jpeg'

export const invitedLectureNav = [
  { label: '교수님 초청강연', path: '/lectures' },
  { label: '외부인 초청강연', path: '/lectures/external' },
] as const

export interface InvitedLecture {
  id: string
  title: string
  summary: string
  date: string
  image: string
  paragraphs: string[]
}

export type InvitedLectureCategory = 'professor' | 'external'

export const invitedLectureCategoryPaths: Record<InvitedLectureCategory, string> = {
  professor: '/lectures',
  external: '/lectures/external',
}

export const professorLectures: InvitedLecture[] = [
  {
    id: 'prof-2026-aimajor',
    title: 'AI 전공과 대학생활',
    summary: '교수님 : 김영훈',
    date: '26.04.03',
    image: aimajor,
    paragraphs: [
      'AI 전공과 대학생활에 대해 알아보고, 학회원들이 어떻게 대학생활을 보내야 하는지 알아봤습니다.',
    ],
  },
  {
    id: 'prof-2026-llm',
    title: 'Large Language Models',
    summary: '교수님 : 박서연',
    date: '26.05.13',
    image: llmImage,
    paragraphs: [
      'Large Language Models에 대해 알아보고, 실제 적용 사례를 살펴봤습니다.',
    ],
  },
]

export const externalLectures: InvitedLecture[] = [
  {
    id: 'ext-2026-journal',
    title: '논문 읽기부터 작성, 그리고 실제 적용까지',
    summary: '강연자 : 김영진 석사님',
    date: '26.05.18',
    image: journal1,
    paragraphs: [
      '논문 읽기부터 작성, 그리고 실제 적용까지에 대해 알아보고, 실제 적용 사례를 살펴봤습니다.',
    ],
  },
]

const invitedLectureLists: Record<InvitedLectureCategory, InvitedLecture[]> = {
  professor: professorLectures,
  external: externalLectures,
}

export function getInvitedLecture(category: InvitedLectureCategory, id: string | undefined) {
  return invitedLectureLists[category].find((item) => item.id === id)
}

export function getInvitedLectureDetailPath(category: InvitedLectureCategory, id: string) {
  if (category === 'professor') {
    return `/lectures/professor/${id}`
  }
  return `/lectures/external/${id}`
}
