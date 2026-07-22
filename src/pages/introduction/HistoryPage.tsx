import { historyItems } from '../../data/introduction'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/IntroductionContent.module.css'

export default function HistoryPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="연혁 및 현황"
        description="2022년 창설 이후 HYAI의 주요 연혁과 현황을 소개합니다."
        path="/introduction/history"
      />
      <h2 className={styles.heading}>연혁 및 현황</h2>
      <div className={styles.timeline}>
        {historyItems.map((item) => (
          <div key={`${item.date}-${item.title}`} className={styles.timelineItem}>
            <time className={styles.timelineDate}>{item.date}</time>
            <p className={styles.timelineTitle}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
