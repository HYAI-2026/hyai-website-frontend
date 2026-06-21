import { getMogakcoDetailPath, visibleMogakcoSessions } from '../../data/mogakco'
import PostCard from '../../components/common/PostCard'
import styles from '../../assets/styles/StudyContent.module.css'

export default function MogakcoPage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>모각코</h2>
      <div className={`${styles.lectureGrid} ${styles.mogakcoGrid}`}>
        {visibleMogakcoSessions.map((session, index) => (
          <PostCard
            key={session.id}
            post={{
              id: index + 1,
              title: '',
              date: session.date,
              image: session.thumbnail,
              href: getMogakcoDetailPath(session.id),
            }}
          />
        ))}
      </div>
    </section>
  )
}
