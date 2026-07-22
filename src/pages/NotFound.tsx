import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import styles from '../assets/styles/IntroductionContent.module.css'

export default function NotFound() {
  return (
    <section className={styles.panel} style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <Seo
        title="페이지를 찾을 수 없습니다"
        description="요청하신 페이지를 찾을 수 없습니다."
        path="/404"
        noindex
      />
      <h2 className={styles.heading}>404</h2>
      <p style={{ margin: '1rem 0 2rem' }}>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/" className={styles.navLinkActive} style={{ color: '#7C3AED', fontWeight: 600 }}>
        홈으로 돌아가기
      </Link>
    </section>
  )
}
