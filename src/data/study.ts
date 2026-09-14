import { supabase } from '../lib/supabase'

export const studyNav = [
  { label: 'HYAI N주특강', path: '/study' },
  { label: '자율그룹스터디', path: '/study/group' },
  { label: '일일세미나', path: '/study/seminar' },
  { label: '야식사업세미나', path: '/study/night-seminar' },
] as const

export interface Lecture {
  id: string
  title: string
  summary: string
  date: string
  image: string
  instructor: string
  paragraphs: string[]
}

// className 은 nweek_class_2026_1.class_name 과 매칭됩니다. 이미지는 Supabase 에서 불러옵니다.
type LectureContent = Omit<Lecture, 'image'> & { className: string }

const lectureContents: LectureContent[] = [
  {
    id: '2026-1-python',
    className: 'Python',
    title: '파이썬',
    summary: '주강사 : 최선민',
    date: '26.03 ~ 26.04',
    instructor: '최선민',
    paragraphs: [
      '매주 금요일 19:00 ~ 21:00, 융합교육관 303호에서 진행합니다.',
      '강사가 만든 문제를 같이 풀고 실습 위주로 진행합니다.',
    ],
  },
  {
    id: '2026-1-ml',
    className: 'ML',
    title: '머신러닝',
    summary: '주강사 : 서준원',
    date: '26.03 ~ 26.05',
    instructor: '서준원',
    paragraphs: [
      '매주 수요일 18:00 ~ 20:00, 융합교육관 302호에서 진행합니다.',
      '2주는 강사의 이론강의, 나머지 주는 멘티들이 돌아가면서 발표를 하며 진행합니다.',
    ],
  },
  {
    id: '2026-1-nlp',
    className: 'RAG',
    title: 'Rag/Agent',
    summary: '주강사 : 박동준',
    date: '26.03 ~ 26.05',
    instructor: '박동준',
    paragraphs: [
      '매주 목요일 18:00 ~ 20:00, 융합교육관 401호에서 진행합니다.',
      '강사가 만들어온 발표자료를 기반으로 진행합니다. 5~6주차는 실습을 진행합니다.',
    ],
  },
  {
    id: '2026-1-cv',
    className: 'CV',
    title: '컴퓨터 비전',
    summary: '주강사 : 박서준',
    date: '26.03 ~ 26.04',
    instructor: '박서준',
    paragraphs: [
      '매주 월요일 16:00 ~ 18:00, 융합교육관 402호에서 진행합니다.',
      '강사가 만들어온 발표자료 기반으로 진행합니다.',
    ],
  },
  {
    id: '2026-1-rl',
    className: 'RL',
    title: '강화학습',
    summary: '주강사 : 방동하',
    date: '26.03 ~ 26.05',
    instructor: '방동하',
    paragraphs: [
      '매주 수요일 20:00 ~ 22:00, 융합교육관 303호에서 진행합니다.',
      '강사가 만들어온 발표자료 기반으로 진행합니다.',
    ],
  },
  {
    id: '2026-1-gnn',
    className: 'GNN',
    title: '그래프 신경망',
    summary: '주강사 : 박성철',
    date: '26.03 ~ 26.05',
    instructor: '박성철',
    paragraphs: [
      '매주 금요일 17:00 ~ 19:00, 융합교육관 304호에서 진행합니다.',
      '강사가 만들어온 발표자료 기반으로 진행합니다.',
    ],
  },
]

// SSG 경로 생성용. 이미지는 fetchLectures 로 채웁니다.
export const lectures: Lecture[] = lectureContents.map(({ className: _className, ...rest }) => ({
  ...rest,
  image: '',
}))

type NweekClassRow = {
  class_name: string
  image_url: string
  sort_order: number
}

export async function fetchLectures(): Promise<Lecture[]> {
  const { data, error } = await supabase
    .from('nweek_class_2026_1')
    .select('class_name, image_url, sort_order')
    .order('sort_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as NweekClassRow[]
  const contentByClass = new Map(lectureContents.map((lecture) => [lecture.className, lecture]))

  return rows.flatMap((row) => {
    const content = contentByClass.get(row.class_name)
    if (!content) return []
    const { className: _className, ...rest } = content
    return [{ ...rest, image: row.image_url }]
  })
}

export function getLectureById(id: string | undefined) {
  return lectures.find((lecture) => lecture.id === id)
}

export async function fetchLectureById(id: string | undefined): Promise<Lecture | undefined> {
  if (!id) return undefined
  const all = await fetchLectures()
  return all.find((lecture) => lecture.id === id)
}

export interface StudyCard {
  id: string
  title: string
  summary: string
  date: string
  image: string
  paragraphs: string[]
}

export type StudyCategory = 'group' | 'seminar' | 'night-seminar'

export const studyCategoryPaths: Record<StudyCategory, string> = {
  group: '/study/group',
  seminar: '/study/seminar',
  'night-seminar': '/study/night-seminar',
}

// studyName 은 free_group_study_2026_1.study_name 과 매칭됩니다. 이미지는 Supabase 에서 불러옵니다.
type GroupStudyContent = Omit<StudyCard, 'image'> & { studyName: string }

const groupStudyContents: GroupStudyContent[] = [
  {
    id: 'japanese',
    studyName: 'Japanese',
    title: '기초 일본어',
    summary: '스터디장 : 옥재원',
    date: '26.03 ~ 26.06',
    paragraphs: [
      '히라가나·가타카나부터 기본 회화까지, 스터디원이 돌아가며 발표하고 함께 문제를 풉니다.',
    ],
  },
]

// SSG 경로 생성용. 이미지는 fetchGroupStudies 로 채웁니다.
export const groupStudies: StudyCard[] = groupStudyContents.map(
  ({ studyName: _studyName, ...rest }) => ({
    ...rest,
    image: '',
  }),
)

type FreeGroupStudyRow = {
  study_name: string
  image_url: string
  sort_order: number
}

export async function fetchGroupStudies(): Promise<StudyCard[]> {
  const { data, error } = await supabase
    .from('free_group_study_2026_1')
    .select('study_name, image_url, sort_order')
    .order('sort_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as FreeGroupStudyRow[]
  const contentByName = new Map(
    groupStudyContents.map((study) => [study.studyName, study]),
  )

  return rows.flatMap((row) => {
    const content = contentByName.get(row.study_name)
    if (!content) return []
    const { studyName: _studyName, ...rest } = content
    return [{ ...rest, image: row.image_url }]
  })
}

export async function fetchGroupStudyById(
  id: string | undefined,
): Promise<StudyCard | undefined> {
  if (!id) return undefined
  const all = await fetchGroupStudies()
  return all.find((study) => study.id === id)
}

// className 은 onedayclass_2026_1.class_name 과 매칭됩니다. 이미지는 Supabase 에서 불러옵니다.
type DailySeminarContent = Omit<StudyCard, 'image'> & { className: string }

const dailySeminarContents: DailySeminarContent[] = [
  {
    id: 'daily-1',
    className: 'Kaggle',
    title: 'Kaggle 기반 데이터분석',
    summary: '발표자 : 김동욱',
    date: '26.03.31',
    paragraphs: [
      'Kaggle 대회 데이터셋을 활용한 EDA와 베이스라인 모델 구축 과정을 공유합니다.',
    ],
  },
  {
    id: 'daily-2',
    className: 'SNN',
    title: 'AI 수식 구현 입문, Softmax부터 Surrogate Gradient SNN까지',
    summary: '발표자 : 김상봉',
    date: '26.05.15',
    paragraphs: [
      'Softmax, Cross Entropy부터 Surrogate Gradient 기반 SNN까지 수식을 코드로 직접 구현해 봅니다.',
    ],
  },
]

// SSG 경로 생성용. 이미지는 fetchDailySeminars 로 채웁니다.
export const dailySeminars: StudyCard[] = dailySeminarContents.map(
  ({ className: _className, ...rest }) => ({
    ...rest,
    image: '',
  }),
)

type OnedayClassRow = {
  class_name: string
  image_url: string
  sort_order: number
}

export async function fetchDailySeminars(): Promise<StudyCard[]> {
  const { data, error } = await supabase
    .from('onedayclass_2026_1')
    .select('class_name, image_url, sort_order')
    .order('sort_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as OnedayClassRow[]
  const contentByClass = new Map(
    dailySeminarContents.map((seminar) => [seminar.className, seminar]),
  )

  return rows.flatMap((row) => {
    const content = contentByClass.get(row.class_name)
    if (!content) return []
    const { className: _className, ...rest } = content
    return [{ ...rest, image: row.image_url }]
  })
}

export async function fetchDailySeminarById(
  id: string | undefined,
): Promise<StudyCard | undefined> {
  if (!id) return undefined
  const all = await fetchDailySeminars()
  return all.find((seminar) => seminar.id === id)
}

// seminarName 은 night_food_seminar_2026_1.seminar_name 과 매칭됩니다. 이미지는 Supabase 에서 불러옵니다.
type NightSeminarContent = Omit<StudyCard, 'image'> & { seminarName: string }

const nightSeminarContents: NightSeminarContent[] = [
  {
    id: 'night-1',
    seminarName: '7th',
    title: 'HYAI 7차 야식사업 및 세미나',
    summary: '발표자 : 방동하, 박상영, 김상봉, 박동준',
    date: '26.04.07',
    paragraphs: [
      '방동하 : AI를 향한 대학생활, 경험은 어떻게 쌓이는가?',
      '박상영 : 수치해석기초와 AI에서의 활용',
      '김상봉 : SNN과 PBT: 진화하는 뇌',
      '박동준 : 검색의 미래: 네이티브 멀티모달 임베딩',
    ],
  },
  {
    id: 'night-2',
    seminarName: '8th',
    title: 'HYAI 8차 야식사업 및 세미나',
    summary: '발표자 : 엄주은, 최선민, 손창현, 김동욱',
    date: '26.06.02',
    paragraphs: [
      '엄주은 : 음성 AI의 패러다임 변화: Speech Foundation Models와 Multimodal Audio',
      '최선민 : AI 기반 음식 원재료 예측 모델의 구조와 한계',
      '손창현 : 멀티 AI 에이전트 조직의 인사관리론: AI간 역할 모호성과 책임 회피를 중심으로',
      '김동욱 : 문장은 어떻게 음악이 될까? : MusicGen으로 이해하는 음악 생성 AI',
    ],
  },
]

// SSG 경로 생성용. 이미지는 fetchNightSeminars 로 채웁니다.
export const nightSeminars: StudyCard[] = nightSeminarContents.map(
  ({ seminarName: _seminarName, ...rest }) => ({
    ...rest,
    image: '',
  }),
)

type NightFoodSeminarRow = {
  seminar_name: string
  image_url: string
  sort_order: number
}

export async function fetchNightSeminars(): Promise<StudyCard[]> {
  const { data, error } = await supabase
    .from('night_food_seminar_2026_1')
    .select('seminar_name, image_url, sort_order')
    .order('sort_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as NightFoodSeminarRow[]
  const contentByName = new Map(
    nightSeminarContents.map((seminar) => [seminar.seminarName, seminar]),
  )

  return rows.flatMap((row) => {
    const content = contentByName.get(row.seminar_name)
    if (!content) return []
    const { seminarName: _seminarName, ...rest } = content
    return [{ ...rest, image: row.image_url }]
  })
}

export async function fetchNightSeminarById(
  id: string | undefined,
): Promise<StudyCard | undefined> {
  if (!id) return undefined
  const all = await fetchNightSeminars()
  return all.find((seminar) => seminar.id === id)
}

const studyCardLists: Record<StudyCategory, StudyCard[]> = {
  group: groupStudies,
  seminar: dailySeminars,
  'night-seminar': nightSeminars,
}

export function getStudyCard(category: StudyCategory, id: string | undefined) {
  return studyCardLists[category].find((item) => item.id === id)
}

export function getStudyCategoryFromPath(pathname: string): StudyCategory | null {
  if (pathname.startsWith('/study/night-seminar/')) return 'night-seminar'
  if (pathname.startsWith('/study/group/')) return 'group'
  if (pathname.startsWith('/study/seminar/')) return 'seminar'
  return null
}
