export const introductionNav = [
  { label: '소개', path: '/introduction' },
  { label: '연혁 및 현황', path: '/introduction/history' },
  { label: '활동 소개', path: '/introduction/activities' },
] as const

export const overviewContent = {
  paragraphs: [
    'HYAI는 Hanyang Artificial Intelligence Association의 줄임말이며, 인공지능에 관심있는 사람들이 모인곳입니다.',
    '2022년 9월 26일에 창설되었으며, 모집형태는 상시모집입니다. 회비는 신규회원 2만원, 기존회원 1만원입니다.',
    '학회 방향성은 강제성 없이 개인이 수용 가능한 만큼 자유롭게 학회를 이용하는 것입니다. 학회비 이상의 퀄리티를 제공하며, 모든 수준의 학습자를 고려한 교육, 그리고 학술적인 성장에 대한 도움을 최대한 고려합니다.',
  ],
  stats: [
    { label: '학회원', value: '871명', note: '2026년 1학기 기준' },
    { label: '수상횟수', value: '27회', note: '' },
    { label: '타 학회 협업', value: '4회', note: 'Jaram, HY-END, Net, Integrity' },
  ],
}

export const historyItems = [
  { date: '2022.09.26', title: '창설, 1기' },
  { date: '2023.11', title: '딥러닝 유튜버 혁펜하임 초청강연' },
  { date: '2024.09', title: '학회원 500명 달성' },
  { date: '2024.11', title: 'SW중심대학사업단 지원학회 선정' },
  { date: '2025.05', title: 'HYAI&Jaram&HY-END 연합엠티'},
  { date: '2025.06', title: '경희대학교 인공지능학회 Net와 연합행사'},
  { date: '2025.11', title: '단국대학교 경영햑회 Integrity와 연합행사'},
  { date: '2026.03', title: 'HYAI N주특강 도입' },
  { date: '2026.05', title: 'HYAI&Jaram&HY-END 연합행사 HEAR'},
]

export const activityItems = [
  '개강총회',
  'HYAI N주특강',
  '자율그룹스터디',
  '하이고',
  '모각코',
  '초청강연',
  'MT',
  '선배특강',
  '야식사업 및 세미나',
]
