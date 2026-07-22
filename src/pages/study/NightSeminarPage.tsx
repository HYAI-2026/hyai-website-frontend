import { nightSeminars } from '../../data/study'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function NightSeminarPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="야식사업세미나"
        description="맛있는 야식과 함께 진행하는 HYAI 야식사업 및 세미나. 학회원 발표로 채워지는 세미나를 소개합니다."
        path="/study/night-seminar"
      />
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
