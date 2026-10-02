import profileImage from '../assets/images/profile.png'
import { supabase } from '../lib/supabase'

export interface Member {
  id: string
  role: string
  grade?: string
  department?: string
  name: string
  image: string
}

export const membersNav = [
  { label: '1기 임원진', path: '/members/1' },
  { label: '2기 임원진', path: '/members/2' },
  { label: '3기 임원진', path: '/members/3' },
  { label: '4기 임원진', path: '/members/4' },
  { label: '5-1기 임원진', path: '/members' },
  { label: '5-2기 임원진', path: '/members/5-2' },
] as const

export type ExecutiveCohort = '1' | '2' | '3' | '4' | '5-1' | '5-2'

const withProfile = (members: Omit<Member, 'image'>[]): Member[] =>
  members.map((member) => ({ ...member, image: profileImage }))

export const executives1: Member[] = withProfile([
  {
    id: 'president',
    role: '학회장',
    grade: '22학번',
    department: '인공지능학과',
    name: '김서현',
  },
])

export const executives2: Member[] = withProfile([
  {
    id: 'president',
    role: '학회장',
    grade: '22학번',
    department: '인공지능학과',
    name: '김서현',
  },
])

export const executives3: Member[] = withProfile([
  {
    id: 'president',
    role: '학회장',
    grade: '23학번',
    department: '스마트융합공학부',
    name: '이정호',
  },
])

export const executives4: Member[] = withProfile([
  {
    id: 'president',
    role: '학회장',
    grade: '23학번',
    department: '스마트융합공학부',
    name: '이정호',
  },
])

export const executives51: Member[] = withProfile([
  {
    id: 'president',
    role: '학회장',
    grade: '21학번',
    department: '수리데이터사이언스학과',
    name: '박성철',
  },
  {
    id: 'vice-president',
    role: '부학회장',
    grade: '24학번',
    department: '수리데이터사이언스학과',
    name: '김다인',
  },
  {
    id: 'academic-head',
    role: '학술부장',
    grade: '22학번',
    department: '로봇공학과',
    name: '방동하',
  },
  {
    id: 'planning-head',
    role: '기획부장',
    grade: '25학번',
    department: '인공지능학과',
    name: '임진우',
  },
  {
    id: 'pr-head',
    role: '홍보부장',
    grade: '25학번',
    department: '컴퓨터학부',
    name: '조윤채',
  },
  {
    id: 'design-head',
    role: '디자인부장',
    grade: '25학번',
    department: '융합디자인학부',
    name: '옥재원',
  },
  {
    id: 'academic-1',
    role: '학술부원',
    grade: '25학번',
    department: '바이오신약융합학부',
    name: '최선민',
  },
  {
    id: 'academic-2',
    role: '학술부원',
    grade: '22학번',
    department: '컴퓨터학부',
    name: '김동욱',
  },
  {
    id: 'academic-3',
    role: '학술부원',
    grade: '25학번',
    department: '인공지능학과',
    name: '김상봉',
  },
  {
    id: 'planning-1',
    role: '기획부원',
    grade: '25학번',
    department: '컴퓨터학부',
    name: '최건희',
  },
  {
    id: 'planning-2',
    role: '기획부원',
    grade: '25학번',
    department: '컴퓨터학부',
    name: '진찬혁',
  },
  {
    id: 'pr-1',
    role: '홍보부원',
    grade: '25학번',
    department: '수리데이터사이언스학과',
    name: '엄주은',
  },
  {
    id: 'pr-2',
    role: '홍보부원',
    grade: '25학번',
    department: '수리데이터사이언스학과',
    name: '유지예',
  },
  {
    id: 'design-1',
    role: '디자인부원',
    grade: '25학번',
    department: '주얼리패션디자인학부',
    name: '이지안',
  },
])

export const executives52: Member[] = withProfile([
  {
    id: 'president',
    role: '학회장',
    grade: '21학번',
    department: '수리데이터사이언스학과',
    name: '박성철',
  },
  {
    id: 'vice-president',
    role: '부학회장',
    grade: '24학번',
    department: '수리데이터사이언스학과',
    name: '김다인',
  },
  {
    id: 'academic-head',
    role: '학술부장',
    grade: '22학번',
    department: '로봇공학과',
    name: '방동하',
  },
  {
    id: 'planning-head',
    role: '기획부장',
    grade: '25학번',
    department: '컴퓨터학부',
    name: '최건희',
  },
  {
    id: 'pr-head',
    role: '홍보부장',
    grade: '25학번',
    department: '컴퓨터학부',
    name: '조윤채',
  },
  {
    id: 'design-head',
    role: '디자인부장',
    grade: '25학번',
    department: '융합디자인학부',
    name: '옥재원',
  },
  {
    id: 'academic-1',
    role: '학술부원',
    grade: '22학번',
    department: '컴퓨터학부',
    name: '김동욱',
  },
  {
    id: 'academic-2',
    role: '학술부원',
    grade: '25학번',
    department: '인공지능학과',
    name: '김상봉',
  },
  {
    id: 'planning-1',
    role: '기획부원',
    grade: '26학번',
    department: '컴퓨터학부',
    name: '정연주',
  },
  {
    id: 'planning-2',
    role: '기획부원',
    grade: '26학번',
    department: '지능정보양자공학전공',
    name: '나지영',
  },
  {
    id: 'pr-1',
    role: '홍보부원',
    grade: '25학번',
    department: '수리데이터사이언스학과',
    name: '엄주은',
  },
  {
    id: 'pr-2',
    role: '홍보부원',
    grade: '25학번',
    department: '수리데이터사이언스학과',
    name: '유지예',
  },
  {
    id: 'design-1',
    role: '디자인부원',
    grade: '25학번',
    department: '주얼리패션디자인학부',
    name: '이지안',
  },
])

const cohortConfig = {
  '1': {
    title: '1기 임원진',
    path: '/members/1',
    semester: null as string | null,
    executives: executives1,
  },
  '2': {
    title: '2기 임원진',
    path: '/members/2',
    semester: null as string | null,
    executives: executives2,
  },
  '3': {
    title: '3기 임원진',
    path: '/members/3',
    semester: null as string | null,
    executives: executives3,
  },
  '4': {
    title: '4기 임원진',
    path: '/members/4',
    semester: null as string | null,
    executives: executives4,
  },
  '5-1': {
    title: '5-1기 임원진',
    path: '/members',
    semester: '2026-1',
    executives: executives51,
  },
  '5-2': {
    title: '5-2기 임원진',
    path: '/members/5-2',
    semester: '2026-2',
    executives: executives52,
  },
} as const

type MemberRow = {
  semester: string
  name: string
  image_url: string
  sort_order: number
}

export function getExecutiveCohort(cohort: ExecutiveCohort) {
  return cohortConfig[cohort]
}

export async function fetchExecutiveMembers(
  cohort: ExecutiveCohort,
): Promise<Member[]> {
  const config = cohortConfig[cohort]
  const base = [...config.executives]

  if (!config.semester) {
    return base
  }

  const { data, error } = await supabase
    .from('members')
    .select('semester, name, image_url, sort_order')
    .eq('semester', config.semester)
    .order('sort_order', { ascending: true })

  if (error) {
    throw error
  }

  const rows = (data ?? []) as MemberRow[]
  const imageByGivenName = new Map(
    rows.map((row) => [row.name, row.image_url] as const),
  )

  return base.map((member, index) => {
    const byName = [...imageByGivenName.entries()].find(([givenName]) =>
      member.name.endsWith(givenName),
    )?.[1]
    const byOrder = rows[index]?.image_url
    return {
      ...member,
      image: byName ?? byOrder ?? member.image,
    }
  })
}

export function getMembersStructuredData(
  cohort: ExecutiveCohort,
  executives?: Member[],
) {
  const { title } = cohortConfig[cohort]
  const list = executives ?? cohortConfig[cohort].executives
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `HYAI ${title}`,
    itemListElement: list.map((member, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        affiliation: {
          '@type': 'CollegeOrUniversity',
          name: '한양대학교 ERICA',
        },
        description: [member.department, member.grade].filter(Boolean).join(' '),
        ...(member.image.startsWith('http') ? { image: member.image } : {}),
      },
    })),
  }
}
