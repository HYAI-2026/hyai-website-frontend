import { overviewContent } from '../../data/introduction'
import styles from '../../assets/styles/IntroductionContent.module.css'

export default function OverviewPage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>소개</h2>
      <div className={styles.text}>
        {overviewContent.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className={styles.stats}>
        {overviewContent.stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className={styles.statLabel}>{stat.label}</span>
            <strong className={styles.statValue}>{stat.value}</strong>
            {stat.note && <span className={styles.statNote}>{stat.note}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}
