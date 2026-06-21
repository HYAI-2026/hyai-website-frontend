import { Navigate, useParams } from 'react-router-dom'
import { getMogakcoSession } from '../../data/mogakco'
import styles from '../../assets/styles/StudyContent.module.css'

export default function MogakcoDetailPage() {
  const { itemId } = useParams()
  const session = getMogakcoSession(itemId)

  if (!session?.detailImage) {
    return <Navigate to="/exchange/mogakco" replace />
  }

  return (
    <section className={styles.panel}>
      <p className={styles.detailMeta}>
        <span className={styles.detailDate}>{session.date}</span>
      </p>
      <div className={styles.detailThumb}>
        <img src={session.detailImage} alt="" loading="lazy" />
      </div>
    </section>
  )
}
