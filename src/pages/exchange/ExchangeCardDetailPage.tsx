import { Navigate, useParams } from 'react-router-dom'
import {
  getExchangeCard,
  exchangeCategoryPaths,
} from '../../data/exchange'
import styles from '../../assets/styles/StudyContent.module.css'

interface Props {
  category: 'mt'
}

export default function ExchangeCardDetailPage({ category }: Props) {
  const { itemId } = useParams()
  const item = getExchangeCard(category, itemId)
  const listPath = exchangeCategoryPaths[category]

  if (!item) {
    return <Navigate to={listPath} replace />
  }

  return (
    <section className={styles.panel}>
      <div className={`${styles.detailThumb} ${styles.detailThumbNatural}`}>
        <img src={item.image} alt="" loading="lazy" />
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
