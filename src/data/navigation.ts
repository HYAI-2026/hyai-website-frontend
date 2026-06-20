import type { NavItem, QuickMenuItem } from '../types'

export const mainNav: NavItem[] = [
  {
    label: '학회소개',
    href: '/introduction',
    children: [
      { label: '소개', href: '/introduction' },
      { label: '연혁 및 현황', href: '/introduction/history' },
      { label: '활동소개', href: '/introduction/activities' },
    ],
  },
  {
    label: '구성원',
    href: '/members',
    children: [{ label: '5기 임원진', href: '/members' }],
  },
  {
    label: '스터디',
    href: '/study',
    children: [
      { label: 'HYAI N주특강', href: '/study' },
      { label: '자율그룹스터디', href: '/study/group' },
      { label: '일일세미나', href: '/study/seminar' },
      { label: '야식사업세미나', href: '/study/night-seminar' },
    ],
  },
  {
    label: '초청강연',
    href: '/lectures',
    children: [
      { label: '교수님 초청강연', href: '/lectures' },
      { label: '외부인 초청강연', href: '/lectures/external' },
    ],
  },
  {
    label: '교류활동',
    href: '#exchange',
    children: [
      { label: 'HY-GO!', href: '#exchange-haigo' },
      { label: '모각코', href: '#exchange-mogakco' },
      { label: '개강/종강총회', href: '#exchange-assembly' },
      { label: 'MT', href: '#exchange-mt' },
    ],
  },
  {
    label: '학회원 활동',
    href: '#activities',
    children: [
      { label: '학회 소식', href: '#activities-news' },
      { label: '수상경력', href: '#activities-awards' },
      { label: '협업', href: '#activities-collaboration' },
    ],
  },
]

export const topNav: NavItem[] = [
  { label: 'HYAI', href: '/' },
  { label: '소프트웨어융합대학', href: 'http://computing.hanyang.ac.kr/' },
  { label: 'SW중심대학사업단', href: 'https://computer.hanyang.ac.kr/' },
  { label: '인공지능학과', href: 'http://aix.hanyang.ac.kr/' },
]

export const quickMenu: QuickMenuItem[] = [
  { label: '학회소개', href: '/introduction', icon: '🎓' },
  { label: '활동소개', href: '/introduction/activities', icon: '📋' },
  { label: '스터디', href: '/study', icon: '📚' },
  { label: '교류활동', href: '#exchange', icon: '🤝' },
  { label: '수상경력', href: '#activities-awards', icon: '🏆' },
]
