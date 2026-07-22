import { Navigate, useParams } from 'react-router-dom'
import {
  getInvitedLecture,
  getInvitedLectureDetailPath,
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
  const lecture = getInvitedLecture(category, itemId)
  const listPath = invitedLectureCategoryPaths[category]

  if (!lecture) {
    return <Navigate to={listPath} replace />
  }

  return (
    <section className={styles.panel}>
      <Seo
        title={lecture.title}
        description={lecture.paragraphs[0] ?? `${lecture.title} 강연 소개입니다.`}
        path={getInvitedLectureDetailPath(category, lecture.id)}
        image={lecture.image}
      />
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
