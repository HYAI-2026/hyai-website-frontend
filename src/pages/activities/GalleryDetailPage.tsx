import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import {
  fetchGalleryItem,
  getGalleryItem,
  isVideoUrl,
  type GalleryItem,
} from '../../data/gallery'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'
import carouselStyles from '../../assets/styles/HaigoDetail.module.css'

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

  const showCarousel = item.images.length > 1

  return (
    <section className={styles.panel}>
      <Seo
        title={item.title}
        description={item.description || `${item.title} 갤러리 사진입니다.`}
        path={`/activities/gallery/${item.id}`}
        image={item.image || undefined}
      />
      {showCarousel ? (
        <GalleryMediaCarousel media={item.images} label={item.title} />
      ) : (
        <div className={`${styles.detailThumb} ${styles.detailThumbNatural}`}>
          {item.image ? (
            isVideoUrl(item.image) ? (
              <video src={item.image} controls playsInline preload="metadata" />
            ) : (
              <img src={item.image} alt="" loading="lazy" decoding="async" />
            )
          ) : null}
        </div>
      )}
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

function GalleryMediaCarousel({
  media,
  label,
}: {
  media: string[]
  label: string
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.reInit()
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, media])

  return (
    <div className={carouselStyles.carousel}>
      <div className={carouselStyles.viewport} ref={emblaRef}>
        <div className={carouselStyles.container}>
          {media.map((url, index) => (
            <div className={carouselStyles.slide} key={url}>
              {isVideoUrl(url) ? (
                <video
                  src={url}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${label} 영상 ${index + 1}`}
                />
              ) : (
                <img
                  src={url}
                  alt={`${label} 사진 ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={carouselStyles.controls}>
        <button
          type="button"
          className={carouselStyles.arrow}
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="이전"
        >
          <Chevron direction="left" />
        </button>
        <span className={carouselStyles.counter}>
          <strong>{selected + 1}</strong> / {media.length}
        </span>
        <button
          type="button"
          className={carouselStyles.arrow}
          onClick={() => emblaApi?.scrollNext()}
          aria-label="다음"
        >
          <Chevron direction="right" />
        </button>
      </div>
    </div>
  )
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
