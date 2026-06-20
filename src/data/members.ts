export interface Member {
  id: string
  role: string
  grade: string
  department: string
  name: string
}

export const membersNav = [
  { label: '5기 임원진', path: '/members' },
] as const

export const executives: Member[] = [
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
]
