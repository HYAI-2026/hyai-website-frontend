import { Navigate, useParams } from 'react-router-dom'
import {
  getInvitedLecture,
  type InvitedLectureCategory,
  invitedLectureCategoryPaths,
} from '../../data/invitedLectures'
import styles from '../../assets/styles/StudyContent.module.css'

interface Props {
  category: InvitedLectureCategory
}

export default function InvitedLectureDetailPage({ category }: Props) {
  const { itemId } = useParams()
  const lecture = getInvitedLecture(category, itemId)
  const listPath = invitedLectureCategoryPaths[category]

  if (!lecture) {
    return <Navigate to={listPath} replace />
  }

  return (
    <section className={styles.panel}>
      <div className={`${styles.detailThumb} ${styles.detailThumbNatural}`}>
        <img src={lecture.image} alt="" />
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
