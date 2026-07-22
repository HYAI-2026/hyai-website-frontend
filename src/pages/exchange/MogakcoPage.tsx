import { getMogakcoDetailPath, visibleMogakcoSessions } from '../../data/mogakco'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function MogakcoPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="모각코"
        description="모여서 각자 코딩하는 HYAI 모각코. 학회원들이 함께 모여 각자 하고 싶은 공부를 진행합니다."
        path="/exchange/mogakco"
      />
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
