import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { fetchLectureById, getLectureById, type Lecture } from '../../data/study'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function LectureDetailPage() {
  const { lectureId } = useParams()
  const fallback = getLectureById(lectureId)
  const [lecture, setLecture] = useState<Lecture | undefined>(fallback)

  useEffect(() => {
    let cancelled = false
    fetchLectureById(lectureId)
      .then((next) => {
        if (!cancelled && next) setLecture(next)
      })
      .catch((err) => {
        console.error('Failed to load lecture', err)
      })
    return () => {
      cancelled = true
    }
  }, [lectureId])

  if (!fallback) {
    return <Navigate to="/study" replace />
  }

  if (!lecture) {
    return null
  }

  return (
    <section className={styles.panel}>
      <Seo
        title={`${lecture.title} - HYAI N주특강`}
        description={lecture.paragraphs[0] ?? `${lecture.title} 강의 소개입니다.`}
        path={`/study/lecture/${lecture.id}`}
        image={lecture.image || undefined}
      />
      <div className={styles.detailThumb}>
        {lecture.image ? (
          <img src={lecture.image} alt="" loading="lazy" decoding="async" />
        ) : null}
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
