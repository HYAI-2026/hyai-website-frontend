import { Navigate, useParams } from 'react-router-dom'
import { getLectureById } from '../../data/study'
import styles from '../../assets/styles/StudyContent.module.css'

export default function LectureDetailPage() {
  const { lectureId } = useParams()
  const lecture = getLectureById(lectureId)

  if (!lecture) {
    return <Navigate to="/study" replace />
  }

  return (
    <section className={styles.panel}>
      <div className={styles.detailThumb}>
        <img src={lecture.image} alt="" />
      </div>
      <h2 className={styles.heading}>{lecture.title}</h2>
      <p className={styles.detailMeta}>
        <span className={styles.detailDate}>{lecture.date}</span>
        <span className={styles.detailInstructor}>주강사 : {lecture.instructor}</span>
      </p>
      <div className={styles.text}>
        {lecture.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
