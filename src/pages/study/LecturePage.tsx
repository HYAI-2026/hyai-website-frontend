import { lectures } from '../../data/study'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function LecturePage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="HYAI N주특강"
        description="선배 학우가 4~6주 동안 이론과 실습 위주로 강의하는 HYAI N주특강. 파이썬, 머신러닝, 컴퓨터비전, 그래프신경망, 강화학습, RAG/Agent 과목을 소개합니다."
        path="/study"
      />
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
