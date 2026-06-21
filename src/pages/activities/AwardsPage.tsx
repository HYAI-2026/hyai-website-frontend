import { majorAwards } from '../../data/activities'
import styles from '../../assets/styles/StudyContent.module.css'

export default function AwardsPage() {
  return (
    <section className={styles.panel}>
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
