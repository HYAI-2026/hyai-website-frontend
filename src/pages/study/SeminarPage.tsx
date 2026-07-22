import { dailySeminars } from '../../data/study'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function SeminarPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="일일세미나"
        description="학회원이 하루 분량의 발표를 준비해 진행하는 HYAI 일일세미나. 다양한 AI 주제 발표를 소개합니다."
        path="/study/seminar"
      />
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
