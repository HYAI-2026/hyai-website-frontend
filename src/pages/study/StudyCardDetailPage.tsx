import { Navigate, useParams } from 'react-router-dom'
import {
  getStudyCard,
  type StudyCategory,
  studyCategoryPaths,
} from '../../data/study'
import styles from '../../assets/styles/StudyContent.module.css'

interface Props {
  category: StudyCategory
}

export default function StudyCardDetailPage({ category }: Props) {
  const { itemId } = useParams()
  const item = getStudyCard(category, itemId)
  const listPath = studyCategoryPaths[category]

  if (!item) {
    return <Navigate to={listPath} replace />
  }

  return (
    <section className={styles.panel}>
      <div
        className={`${styles.detailThumb} ${category === 'seminar' || category === 'night-seminar' ? styles.detailThumbNatural : ''}`}
      >
        <img src={item.image} alt="" />
      </div>
      <h2 className={styles.heading}>{item.title}</h2>
      <p className={styles.detailMeta}>
        <span className={styles.detailDate}>{item.date}</span>
        <span className={styles.detailInstructor}>{item.summary}</span>
      </p>
      <div className={styles.text}>
        {item.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
