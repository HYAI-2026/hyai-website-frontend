import { overviewContent } from '../../data/introduction'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/IntroductionContent.module.css'

export default function OverviewPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="학회 소개"
        description="HYAI는 인공지능에 관심있는 사람들이 모인 한양대 에리카 인공지능학회입니다. 학회 방향성과 회비, 활동 규모를 소개합니다."
        path="/introduction"
      />
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
