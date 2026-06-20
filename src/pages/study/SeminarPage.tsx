import { dailySeminars } from '../../data/study'
import PostCard from '../../components/common/PostCard'
import styles from '../../assets/styles/StudyContent.module.css'

export default function SeminarPage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>일일세미나</h2>
      <div className={styles.lectureGrid}>
        {dailySeminars.map((seminar, index) => (
          <PostCard
            key={seminar.id}
            post={{
              id: index + 1,
              title: seminar.title,
              summary: seminar.summary,
              date: seminar.date,
              image: seminar.image,
              href: `/study/seminar/${seminar.id}`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
