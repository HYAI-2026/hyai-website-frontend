import { historyItems } from '../../data/introduction'
import styles from '../../assets/styles/IntroductionContent.module.css'

export default function HistoryPage() {
  return (
    <section className={styles.panel}>
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
