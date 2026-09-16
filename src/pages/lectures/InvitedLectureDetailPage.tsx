import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  fetchInvitedLecture,
  getInvitedLecture,
  getInvitedLectureDetailPath,
  type InvitedLecture,
  type InvitedLectureCategory,
  invitedLectureCategoryPaths,
} from '../../data/invitedLectures'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

interface Props {
  category: InvitedLectureCategory
}

export default function InvitedLectureDetailPage({ category }: Props) {
  const { itemId } = useParams()
  const fallback = getInvitedLecture(category, itemId)
  const [lecture, setLecture] = useState<InvitedLecture | undefined>(fallback)
  const listPath = invitedLectureCategoryPaths[category]

  useEffect(() => {
    let cancelled = false
    fetchInvitedLecture(category, itemId)
      .then((next) => {
        if (!cancelled && next) setLecture(next)
      })
      .catch((err) => {
        console.error('Failed to load invited lecture', err)
      })
    return () => {
      cancelled = true
    }
  }, [category, itemId])

  if (!fallback) {
    return <Navigate to={listPath} replace />
  }

  if (!lecture) {
    return null
  }

  return (
    <section className={styles.panel}>
      <Seo
        title={lecture.title}
        description={lecture.paragraphs[0] ?? `${lecture.title} 강연 소개입니다.`}
        path={getInvitedLectureDetailPath(category, lecture.id)}
        image={lecture.image || undefined}
      />
      <div className={`${styles.detailThumb} ${styles.detailThumbNatural}`}>
        {lecture.image ? (
          <img src={lecture.image} alt="" loading="lazy" decoding="async" />
        ) : null}
      </div>
      <h2 className={styles.heading}>{lecture.title}</h2>
      <p className={styles.detailMeta}>
        <span className={styles.detailDate}>{lecture.date}</span>
        <span className={styles.detailInstructor}>{lecture.summary}</span>
      </p>
      <div className={styles.text}>
        {lecture.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
