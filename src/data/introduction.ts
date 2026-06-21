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

export type ActivityItem = {
  name: string
  description: string
}

export const activityItems: ActivityItem[] = [
  {
    name: '개강총회',
    description:
      '한 학기동안 진행될 학회 계획을 설명합니다. 또한 뒤에는 친목활동을 할 수 있는 뒤풀이가 마련되어있습니다.',
  },
  {
    name: 'HYAI N주특강',
    description:
      '선배 학우가 4~6주 AI 분야 과목을 이론 위주로 강의를 해줍니다. 수강자의 수준에 맞게 수업을 진행합니다.',
  },
  {
    name: '자율그룹스터디',
    description: '마음 맞는 사람들끼리 모여서 자율적으로 스터디를 진행합니다.',
  },
  {
    name: '하이고',
    description:
      '학회원들끼리 친목활동을 진행하는 HYAI 대표행사입니다. 선배들과 친해질수 있는 좋은 기회이며, 타 단과대 친구들하고도 친해질 수 있습니다.',
  },
  {
    name: '모각코',
    description:
      '모여서 각자 코딩의 줄임말입니다. 모두 모여서 각자 하고싶은 공부를 합니다. 선배들한테 가서 질문 많이하고 정보를 얻을 것을 추천드립니다.',
  },
  {
    name: '초청강연',
    description:
      '교수님 또는 외부에서 초청을 해서 학회에 와 강연을 해줍니다. 높은 수준의 강의를 무료로 들을수 있는 좋은 기회입니다.',
  },
  {
    name: 'MT',
    description:
      '1박2일, 학회원들끼리 모여서 여행을 갑니다. 팀 빌딩, 레크레이션 등 재밌는 행사가 준비되어 있으니 많은 참여 부탁드립니다.',
  },
  {
    name: '선배특강',
    description:
      '선배 학우가 하루치 수업을 준비해서 학회원들에게 강의를 해줍니다. 프로젝트 위주로 진행됩니다.',
  },
  {
    name: '야식사업 및 세미나',
    description:
      '학회원 4명에게 신청 받아 세미나를 진행합니다. 맛있는 야식을 먹으면서 세미나를 듣습니다. AI 관련 주제는 언제든 환영합니다 :)',
  },
]
