import { Navigate, useParams } from 'react-router-dom'
import { getGalleryItem } from '../../data/gallery'
import styles from '../../assets/styles/StudyContent.module.css'

export default function GalleryDetailPage() {
  const { itemId } = useParams()
  const item = getGalleryItem(itemId)

  if (!item) {
    return <Navigate to="/activities/gallery" replace />
  }

  return (
    <section className={styles.panel}>
      <div className={`${styles.detailThumb} ${styles.detailThumbNatural}`}>
        <img src={item.image} alt="" loading="lazy" />
      </div>
      <h2 className={styles.heading}>{item.title}</h2>
      {(item.date || item.description) && (
        <p className={styles.detailMeta}>
          {item.date && <span className={styles.detailDate}>{item.date}</span>}
          {item.description && (
            <span className={styles.detailInstructor}>{item.description}</span>
          )}
        </p>
      )}
    </section>
  )
}
