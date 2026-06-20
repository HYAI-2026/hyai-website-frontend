import { lectures } from '../../data/study'
import PostCard from '../../components/common/PostCard'
import styles from '../../assets/styles/StudyContent.module.css'

export default function LecturePage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>HYAI N주특강</h2>
      <div className={styles.lectureGrid}>
        {lectures.map((lecture, index) => (
          <PostCard
            key={lecture.id}
            post={{
              id: index + 1,
              title: lecture.title,
              summary: lecture.summary,
              date: lecture.date,
              image: lecture.image,
              href: `/study/lecture/${lecture.id}`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
