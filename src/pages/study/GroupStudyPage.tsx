import { groupStudies } from '../../data/study'
import PostCard from '../../components/common/PostCard'
import styles from '../../assets/styles/StudyContent.module.css'

export default function GroupStudyPage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>자율그룹스터디</h2>
      <div className={styles.lectureGrid}>
        {groupStudies.map((group, index) => (
          <PostCard
            key={group.id}
            post={{
              id: index + 1,
              title: group.title,
              summary: group.summary,
              date: group.date,
              image: group.image,
              href: `/study/group/${group.id}`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
