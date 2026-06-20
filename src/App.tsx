import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollTopButton from './components/layout/ScrollTopButton'
import Home from './pages/Home'
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

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<IntroductionLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="activities" element={<ActivitiesPage />} />
          </Route>
          <Route path="/members" element={<MembersLayout />}>
            <Route index element={<ExecutivesPage />} />
          </Route>
          <Route path="/study" element={<StudyLayout />}>
            <Route index element={<LecturePage />} />
            <Route path="lecture/:lectureId" element={<LectureDetailPage />} />
            <Route path="group/:itemId" element={<StudyCardDetailPage category="group" />} />
            <Route path="group" element={<GroupStudyPage />} />
            <Route path="seminar/:itemId" element={<StudyCardDetailPage category="seminar" />} />
            <Route path="seminar" element={<SeminarPage />} />
            <Route
              path="night-seminar/:itemId"
              element={<StudyCardDetailPage category="night-seminar" />}
            />
            <Route path="night-seminar" element={<NightSeminarPage />} />
          </Route>
          <Route path="/lectures" element={<LecturesLayout />}>
            <Route index element={<ProfessorLecturesPage />} />
            <Route path="professor/:itemId" element={<InvitedLectureDetailPage category="professor" />} />
            <Route path="external" element={<ExternalLecturesPage />} />
            <Route path="external/:itemId" element={<InvitedLectureDetailPage category="external" />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  )
}
