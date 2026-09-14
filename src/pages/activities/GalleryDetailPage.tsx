import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  fetchGalleryItem,
  getGalleryItem,
  type GalleryItem,
} from '../../data/gallery'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function GalleryDetailPage() {
  const { itemId } = useParams()
  const fallback = getGalleryItem(itemId)
  const [item, setItem] = useState<GalleryItem | undefined>(fallback)

  useEffect(() => {
    let cancelled = false
    fetchGalleryItem(itemId)
      .then((next) => {
        if (!cancelled && next) setItem(next)
      })
      .catch((err) => {
        console.error('Failed to load gallery item', err)
      })
    return () => {
      cancelled = true
    }
  }, [itemId])

  if (!fallback) {
    return <Navigate to="/activities/gallery" replace />
  }

  if (!item) {
    return null
  }

  return (
    <section className={styles.panel}>
      <Seo
        title={item.title}
        description={item.description || `${item.title} 갤러리 사진입니다.`}
        path={`/activities/gallery/${item.id}`}
        image={item.image || undefined}
      />
      <div className={`${styles.detailThumb} ${styles.detailThumbNatural}`}>
        {item.image ? <img src={item.image} alt="" loading="lazy" /> : null}
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
