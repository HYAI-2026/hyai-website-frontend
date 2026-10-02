import { supabase } from '../lib/supabase'

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

// lectureName / lectureType 은 "2026-1-lecture" 테이블과 매칭됩니다. 이미지는 Supabase 에서 불러옵니다.
type InvitedLectureContent = Omit<InvitedLecture, 'image'> & {
  lectureName: string
  lectureType: 'professor-lecture' | 'outside-lecture'
}

const professorLectureContents: InvitedLectureContent[] = [
  {
    id: 'prof-2026-aimajor',
    lectureName: 'AImajor',
    lectureType: 'professor-lecture',
    title: 'AI 전공과 대학생활',
    summary: '교수님 : 김영훈',
    date: '26.04.03',
    paragraphs: [
      'AI 전공과 대학생활에 대해 알아보고, 학회원들이 어떻게 대학생활을 보내야 하는지 알아봤습니다.',
    ],
  },
  {
    id: 'prof-2026-llm',
    lectureName: 'LLM',
    lectureType: 'professor-lecture',
    title: 'Large Language Models',
    summary: '교수님 : 박서연',
    date: '26.05.13',
    paragraphs: [
      'Large Language Models에 대해 알아보고, 실제 적용 사례를 살펴봤습니다.',
    ],
  },
]

const externalLectureContents: InvitedLectureContent[] = [
  {
    id: 'ext-2026-journal',
    lectureName: 'journal1',
    lectureType: 'outside-lecture',
    title: '논문 읽기부터 작성, 그리고 실제 적용까지',
    summary: '강연자 : 김영진 석사님',
    date: '26.05.18',
    paragraphs: [
      '논문 읽기부터 작성, 그리고 실제 적용까지에 대해 알아보고, 실제 적용 사례를 살펴봤습니다.',
    ],
  },
]

function toStaticLecture({
  lectureName: _lectureName,
  lectureType: _lectureType,
  ...rest
}: InvitedLectureContent): InvitedLecture {
  return { ...rest, image: '' }
}

// SSG 경로 생성용. 이미지는 fetch 함수로 채웁니다.
export const professorLectures: InvitedLecture[] =
  professorLectureContents.map(toStaticLecture)

export const externalLectures: InvitedLecture[] =
  externalLectureContents.map(toStaticLecture)

const invitedLectureLists: Record<InvitedLectureCategory, InvitedLecture[]> = {
  professor: professorLectures,
  external: externalLectures,
}

type LectureRow = {
  lecture_type: string
  lecture_name: string
  image_url: string
  sort_order: number
}

async function fetchLecturesByType(
  lectureType: 'professor-lecture' | 'outside-lecture',
  contents: InvitedLectureContent[],
): Promise<InvitedLecture[]> {
  const { data, error } = await supabase
    .from('2026-1-lecture')
    .select('lecture_type, lecture_name, image_url, sort_order')
    .eq('lecture_type', lectureType)
    .order('sort_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as LectureRow[]
  const contentByName = new Map(contents.map((lecture) => [lecture.lectureName, lecture]))

  return rows.flatMap((row) => {
    const content = contentByName.get(row.lecture_name)
    if (!content) return []
    const { lectureName: _lectureName, lectureType: _lectureType, ...rest } = content
    return [{ ...rest, image: row.image_url }]
  })
}

export async function fetchProfessorLectures(): Promise<InvitedLecture[]> {
  return fetchLecturesByType('professor-lecture', professorLectureContents)
}

export async function fetchExternalLectures(): Promise<InvitedLecture[]> {
  return fetchLecturesByType('outside-lecture', externalLectureContents)
}

export function getInvitedLecture(category: InvitedLectureCategory, id: string | undefined) {
  return invitedLectureLists[category].find((item) => item.id === id)
}

export async function fetchInvitedLecture(
  category: InvitedLectureCategory,
  id: string | undefined,
): Promise<InvitedLecture | undefined> {
  if (!id) return undefined
  const all =
    category === 'professor'
      ? await fetchProfessorLectures()
      : await fetchExternalLectures()
  return all.find((item) => item.id === id)
}

export function getInvitedLectureDetailPath(category: InvitedLectureCategory, id: string) {
  if (category === 'professor') {
    return `/lectures/professor/${id}`
  }
  return `/lectures/external/${id}`
}
