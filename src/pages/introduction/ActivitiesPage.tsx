import { activityItems } from '../../data/introduction'
import styles from '../../assets/styles/IntroductionContent.module.css'

export default function ActivitiesPage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>활동 소개</h2>
      <ul className={styles.activityList}>
        {activityItems.map((activity) => (
          <li key={activity} className={styles.activityItem}>
            {activity}
          </li>
        ))}
      </ul>
    </section>
  )
}
