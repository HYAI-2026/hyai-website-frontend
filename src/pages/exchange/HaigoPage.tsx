import { haigoGroups, getHaigoDetailPath } from '../../data/haigo'
import PostCard from '../../components/common/PostCard'
import styles from '../../assets/styles/StudyContent.module.css'

export default function HaigoPage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>HY-GO!</h2>
      <div className={styles.lectureGrid}>
        {haigoGroups.map((group, index) => (
          <PostCard
            key={group.id}
            post={{
              id: index + 1,
              title: group.label,
              summary: `조원 : ${group.members}`,
              date: group.date,
              image: group.thumbnail,
              href: getHaigoDetailPath(group.id),
            }}
          />
        ))}
      </div>
    </section>
  )
}
