import { majorAwards } from '../../data/activities'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function AwardsPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="수상경력"
        description="SW중심대학 공동해커톤 대상 등 HYAI 학회원들의 주요 수상 실적을 소개합니다."
        path="/activities/awards"
      />
      <h2 className={styles.heading}>수상경력</h2>
      <h3 className={styles.awardsSubheading}>🏆 주요 수상 실적</h3>
      <ul className={styles.awardsList}>
        {majorAwards.map((award) => (
          <li key={award} className={styles.awardsItem}>
            {award}
          </li>
        ))}
      </ul>
    </section>
  )
}
