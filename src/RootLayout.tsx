import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollTopButton from './components/layout/ScrollTopButton'
import StructuredData from './components/common/StructuredData'
import { organizationStructuredData } from './seo/site'

// 모든 페이지 공통 레이아웃(헤더/푸터/맨위로 버튼) + 라우트 아웃렛.
export default function RootLayout() {
  return (
    <div id="top">
      <StructuredData data={organizationStructuredData} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  )
}
