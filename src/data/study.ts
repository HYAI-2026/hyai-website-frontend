import pythonImage from '../pages/study/images/python.jpeg'
import mlImage from '../pages/study/images/ML.jpeg'
import ragImage from '../pages/study/images/RAG.jpeg'
import cvImage from '../pages/study/images/CV.jpeg'
import rlImage from '../pages/study/images/RL.jpeg'
import gnnImage from '../pages/study/images/GNN.jpeg'
import japaneseImage from '../pages/study/images/japanese.jpeg'
import kaggleImage from '../pages/study/images/kaggle.jpeg'
import mathImage from '../pages/study/images/snn.png'
import seven from '../pages/study/images/seven.png'
import eight from '../pages/study/images/eight.png'

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

export const lectures: Lecture[] = [
  {
    id: '2026-1-python',
    title: '파이썬',
    summary: '주강사 : 최선민',
    date: '26.03 ~ 26.04',
    image: pythonImage,
    instructor: '최선민',
    paragraphs: [
      '매주 금요일 19:00 ~ 21:00, 융합교육관 303호에서 진행합니다.',
      '강사가 만든 문제를 같이 풀고 실습 위주로 진행합니다.',
    ],
  },
  {
    id: '2026-1-ml',
    title: '머신러닝',
    summary: '주강사 : 서준원',
    date: '26.03 ~ 26.05',
    image: mlImage,
    instructor: '서준원',
    paragraphs: [
      '매주 수요일 18:00 ~ 20:00, 융합교육관 302호에서 진행합니다.',
      '2주는 강사의 이론강의, 나머지 주는 멘티들이 돌아가면서 발표를 하며 진행합니다.',
    ],
  },
  {
    id: '2026-1-nlp',
    title: 'Rag/Agent',
    summary: '주강사 : 박동준',
    date: '26.03 ~ 26.05',
    image: ragImage,
    instructor: '박동준',
    paragraphs: [
      '매주 목요일 18:00 ~ 20:00, 융합교육관 401호에서 진행합니다.',
      '강사가 만들어온 발표자료를 기반으로 진행합니다. 5~6주차는 실습을 진행합니다.',
    ],
  },
  {
    id: '2026-1-cv',
    title: '컴퓨터 비전',
    summary: '주강사 : 박서준',
    date: '26.03 ~ 26.04',
    image: cvImage,
    instructor: '박서준',
    paragraphs: [
      '매주 월요일 16:00 ~ 18:00, 융합교육관 402호에서 진행합니다.',
      '강사가 만들어온 발표자료 기반으로 진행합니다.',
    ],
  },
  {
    id: '2026-1-rl',
    title: '강화학습',
    summary: '주강사 : 방동하',
    date: '26.03 ~ 26.05',
    image: rlImage,
    instructor: '방동하',
    paragraphs: [
      '매주 수요일 20:00 ~ 22:00, 융합교육관 303호에서 진행합니다.',
      '강사가 만들어온 발표자료 기반으로 진행합니다.',
    ],
  },
  {
    id: '2026-1-gnn',
    title: '그래프 신경망',
    summary: '주강사 : 박성철',
    date: '26.03 ~ 26.05',
    image: gnnImage,
    instructor: '박성철',
    paragraphs: [
      '매주 금요일 17:00 ~ 19:00, 융합교육관 304호에서 진행합니다.',
      '강사가 만들어온 발표자료 기반으로 진행합니다.',
    ],
  },
]

export function getLectureById(id: string | undefined) {
  return lectures.find((lecture) => lecture.id === id)
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

export const groupStudies: StudyCard[] = [
  {
    id: 'japanese',
    title: '기초 일본어',
    summary: '스터디장 : 옥재원',
    date: '26.03 ~ 26.06',
    image: japaneseImage,
    paragraphs: [
      '히라가나·가타카나부터 기본 회화까지, 스터디원이 돌아가며 발표하고 함께 문제를 풉니다.',
    ],
  },
]

export const dailySeminars: StudyCard[] = [
  {
    id: 'daily-1',
    title: 'Kaggle 기반 데이터분석',
    summary: '발표자 : 김동욱',
    date: '26.03.31',
    image: kaggleImage,
    paragraphs: [
      'Kaggle 대회 데이터셋을 활용한 EDA와 베이스라인 모델 구축 과정을 공유합니다.',
    ],
  },
  {
    id: 'daily-2',
    title: 'AI 수식 구현 입문, Softmax부터 Surrogate Gradient SNN까지',
    summary: '발표자 : 김상봉',
    date: '26.05.15',
    image: mathImage,
    paragraphs: [
      'Softmax, Cross Entropy부터 Surrogate Gradient 기반 SNN까지 수식을 코드로 직접 구현해 봅니다.',
    ],
  },
]

export const nightSeminars: StudyCard[] = [
  {
    id: 'night-1',
    title: 'HYAI 7차 야식사업 및 세미나',
    summary: '발표자 : 방동하, 박상영, 김상봉, 박동준',
    date: '26.04.07',
    image: seven,
    paragraphs: [
      '방동하 : AI를 향한 대학생활, 경험은 어떻게 쌓이는가?',
      '박상영 : 수치해석기초와 AI에서의 활용',
      '김상봉 : SNN과 PBT: 진화하는 뇌',
      '박동준 : 검색의 미래: 네이티브 멀티모달 임베딩',
    ],
  },
  {
    id: 'night-2',
    title: 'HYAI 8차 야식사업 및 세미나',
    summary: '발표자 : 엄주은, 최선민, 손창현, 김동욱',
    date: '26.06.02',
    image: eight,
    paragraphs: [
      '엄주은 : 음성 AI의 패러다임 변화: Speech Foundation Models와 Multimodal Audio',
      '최선민 : AI 기반 음식 원재료 예측 모델의 구조와 한계',
      '손창현 : 멀티 AI 에이전트 조직의 인사관리론: AI간 역할 모호성과 책임 회피를 중심으로',
      '김동욱 : 문장은 어떻게 음악이 될까? : MusicGen으로 이해하는 음악 생성 AI',
    ],
  },
]

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
