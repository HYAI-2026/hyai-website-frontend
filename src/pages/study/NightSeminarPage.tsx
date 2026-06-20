import { nightSeminars } from '../../data/study'
import PostCard from '../../components/common/PostCard'
import styles from '../../assets/styles/StudyContent.module.css'

export default function NightSeminarPage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>야식사업세미나</h2>
      <div className={styles.lectureGrid}>
        {nightSeminars.map((seminar, index) => (
          <PostCard
            key={seminar.id}
            post={{
              id: index + 1,
              title: seminar.title,
              summary: seminar.summary,
              date: seminar.date,
              image: seminar.image,
              href: `/study/night-seminar/${seminar.id}`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
