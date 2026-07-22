import { professorLectures, getInvitedLectureDetailPath } from '../../data/invitedLectures'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function ProfessorLecturesPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="교수님 초청강연"
        description="교수님을 초청해 수준 높은 강연을 듣는 HYAI 교수님 초청강연을 소개합니다."
        path="/lectures"
      />
      <h2 className={styles.heading}>교수님 초청강연</h2>
      <div className={styles.lectureGrid}>
        {professorLectures.map((lecture, index) => (
          <PostCard
            key={lecture.id}
            post={{
              id: index + 1,
              title: lecture.title,
              summary: lecture.summary,
              date: lecture.date,
              image: lecture.image,
              href: getInvitedLectureDetailPath('professor', lecture.id),
            }}
          />
        ))}
      </div>
    </section>
  )
}
