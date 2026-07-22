import { Navigate, useParams } from 'react-router-dom'
import { getGalleryItem } from '../../data/gallery'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function GalleryDetailPage() {
  const { itemId } = useParams()
  const item = getGalleryItem(itemId)

  if (!item) {
    return <Navigate to="/activities/gallery" replace />
  }

  return (
    <section className={styles.panel}>
      <Seo
        title={item.title}
        description={item.description || `${item.title} 갤러리 사진입니다.`}
        path={`/activities/gallery/${item.id}`}
        image={item.image}
      />
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
