import { Navigate, useParams } from 'react-router-dom'
import { getMogakcoSession } from '../../data/mogakco'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function MogakcoDetailPage() {
  const { itemId } = useParams()
  const session = getMogakcoSession(itemId)

  if (!session?.detailImage) {
    return <Navigate to="/exchange/mogakco" replace />
  }

  return (
    <section className={styles.panel}>
      <Seo
        title={`모각코 (${session.date})`}
        description={`${session.date} 에 진행된 HYAI 모각코 활동입니다.`}
        path={`/exchange/mogakco/${session.id}`}
        image={session.detailImage}
      />
      <p className={styles.detailMeta}>
        <span className={styles.detailDate}>{session.date}</span>
      </p>
      <div className={styles.detailThumb}>
        <img src={session.detailImage} alt="" loading="lazy" />
      </div>
    </section>
  )
}
