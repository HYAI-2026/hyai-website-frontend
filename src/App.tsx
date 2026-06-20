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
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  )
}
