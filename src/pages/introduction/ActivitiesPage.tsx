import ActivityInfoTooltip from '../../components/common/ActivityInfoTooltip'
import StructuredData from '../../components/common/StructuredData'
import Seo from '../../components/common/Seo'
import { activityItems, activityStructuredData } from '../../data/introduction'
import styles from '../../assets/styles/IntroductionContent.module.css'

export default function ActivitiesPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="활동 소개"
        description="개강총회, HYAI N주특강, 자율그룹스터디, 하이고, 모각코, 초청강연, MT, 선배특강, 야식사업 및 세미나 등 HYAI의 주요 활동을 소개합니다."
        path="/introduction/activities"
      />
      <StructuredData data={activityStructuredData} />
      <h2 className={styles.heading}>활동 소개</h2>
      <ul className={styles.activityList}>
        {activityItems.map((activity) => (
          <li key={activity.name} className={styles.activityItem}>
            <span className={styles.activityName}>{activity.name}</span>
            <ActivityInfoTooltip label={activity.name} description={activity.description} />
          </li>
        ))}
      </ul>
    </section>
  )
}
