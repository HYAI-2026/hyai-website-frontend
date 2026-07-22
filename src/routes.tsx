import type { RouteRecord } from 'vite-react-ssg'

import RootLayout from './RootLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import IntroductionLayout from './pages/introduction/IntroductionLayout'
import OverviewPage from './pages/introduction/OverviewPage'
import HistoryPage from './pages/introduction/HistoryPage'
import ActivitiesPage from './pages/introduction/ActivitiesPage'

import MembersLayout from './pages/members/MembersLayout'
import ExecutivesPage from './pages/members/ExecutivesPage'

import StudyLayout from './pages/study/StudyLayout'
import LecturePage from './pages/study/LecturePage'
import LectureDetailPage from './pages/study/LectureDetailPage'
import GroupStudyPage from './pages/study/GroupStudyPage'
import SeminarPage from './pages/study/SeminarPage'
import NightSeminarPage from './pages/study/NightSeminarPage'
import StudyCardDetailPage from './pages/study/StudyCardDetailPage'

import LecturesLayout from './pages/lectures/LecturesLayout'
import ProfessorLecturesPage from './pages/lectures/ProfessorLecturesPage'
import ExternalLecturesPage from './pages/lectures/ExternalLecturesPage'
import InvitedLectureDetailPage from './pages/lectures/InvitedLectureDetailPage'

import ExchangeLayout from './pages/exchange/ExchangeLayout'
import HaigoPage from './pages/exchange/HaigoPage'
import HaigoDetailPage from './pages/exchange/HaigoDetailPage'
import MogakcoPage from './pages/exchange/MogakcoPage'
import MogakcoDetailPage from './pages/exchange/MogakcoDetailPage'
import MtPage from './pages/exchange/MtPage'
import ExchangeCardDetailPage from './pages/exchange/ExchangeCardDetailPage'

import ActivitiesLayout from './pages/activities/ActivitiesLayout'
import NewsPage from './pages/activities/NewsPage'
import NewsDetailPage from './pages/activities/NewsDetailPage'
import AwardsPage from './pages/activities/AwardsPage'
import GalleryPage from './pages/activities/GalleryPage'
import GalleryDetailPage from './pages/activities/GalleryDetailPage'

// 동적 라우트의 사전 렌더 경로는 실제 데이터 배열에서 생성합니다(하드코딩 금지).
import { lectures, groupStudies, dailySeminars, nightSeminars } from './data/study'
import { professorLectures, externalLectures } from './data/invitedLectures'
import { haigoGroups } from './data/haigo'
import { visibleMogakcoSessions } from './data/mogakco'
import { mtEvents } from './data/exchange'
import { newsPosts } from './data/news'
import { galleryItems } from './data/gallery'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: 'introduction',
        element: <IntroductionLayout />,
        children: [
          { index: true, element: <OverviewPage /> },
          { path: 'history', element: <HistoryPage /> },
          { path: 'activities', element: <ActivitiesPage /> },
        ],
      },

      {
        path: 'members',
        element: <MembersLayout />,
        children: [{ index: true, element: <ExecutivesPage /> }],
      },

      {
        path: 'study',
        element: <StudyLayout />,
        children: [
          { index: true, element: <LecturePage /> },
          {
            path: 'lecture/:lectureId',
            element: <LectureDetailPage />,
            getStaticPaths: () => lectures.map((l) => `/study/lecture/${l.id}`),
          },
          { path: 'group', element: <GroupStudyPage /> },
          {
            path: 'group/:itemId',
            element: <StudyCardDetailPage category="group" />,
            getStaticPaths: () => groupStudies.map((i) => `/study/group/${i.id}`),
          },
          { path: 'seminar', element: <SeminarPage /> },
          {
            path: 'seminar/:itemId',
            element: <StudyCardDetailPage category="seminar" />,
            getStaticPaths: () => dailySeminars.map((i) => `/study/seminar/${i.id}`),
          },
          { path: 'night-seminar', element: <NightSeminarPage /> },
          {
            path: 'night-seminar/:itemId',
            element: <StudyCardDetailPage category="night-seminar" />,
            getStaticPaths: () => nightSeminars.map((i) => `/study/night-seminar/${i.id}`),
          },
        ],
      },

      {
        path: 'lectures',
        element: <LecturesLayout />,
        children: [
          { index: true, element: <ProfessorLecturesPage /> },
          {
            path: 'professor/:itemId',
            element: <InvitedLectureDetailPage category="professor" />,
            getStaticPaths: () => professorLectures.map((i) => `/lectures/professor/${i.id}`),
          },
          { path: 'external', element: <ExternalLecturesPage /> },
          {
            path: 'external/:itemId',
            element: <InvitedLectureDetailPage category="external" />,
            getStaticPaths: () => externalLectures.map((i) => `/lectures/external/${i.id}`),
          },
        ],
      },

      {
        path: 'exchange',
        element: <ExchangeLayout />,
        children: [
          { index: true, element: <HaigoPage /> },
          {
            path: 'haigo/:itemId',
            element: <HaigoDetailPage />,
            getStaticPaths: () => haigoGroups.map((g) => `/exchange/haigo/${g.id}`),
          },
          { path: 'mogakco', element: <MogakcoPage /> },
          {
            path: 'mogakco/:itemId',
            element: <MogakcoDetailPage />,
            getStaticPaths: () =>
              visibleMogakcoSessions.map((s) => `/exchange/mogakco/${s.id}`),
          },
          { path: 'mt', element: <MtPage /> },
          {
            path: 'mt/:itemId',
            element: <ExchangeCardDetailPage category="mt" />,
            getStaticPaths: () => mtEvents.map((e) => `/exchange/mt/${e.id}`),
          },
        ],
      },

      {
        path: 'activities',
        element: <ActivitiesLayout />,
        children: [
          { index: true, element: <NewsPage /> },
          {
            path: 'news/:itemId',
            element: <NewsDetailPage />,
            getStaticPaths: () => newsPosts.map((p) => `/activities/news/${p.id}`),
          },
          { path: 'awards', element: <AwardsPage /> },
          { path: 'gallery', element: <GalleryPage /> },
          {
            path: 'gallery/:itemId',
            element: <GalleryDetailPage />,
            getStaticPaths: () => galleryItems.map((i) => `/activities/gallery/${i.id}`),
          },
        ],
      },

      // 사전 렌더되는 404 페이지 (빌드 후 dist/404.html 로 복사됨)
      { path: '404', element: <NotFound /> },
      // 클라이언트에서 알 수 없는 경로 진입 시 폴백
      { path: '*', element: <NotFound /> },
    ],
  },
]
