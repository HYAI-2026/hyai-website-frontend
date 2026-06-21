import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import { getNewsPost } from '../../data/news'
import styles from '../../assets/styles/StudyContent.module.css'
import carouselStyles from '../../assets/styles/HaigoDetail.module.css'

export default function NewsDetailPage() {
  const { itemId } = useParams()
  const post = getNewsPost(itemId)

  if (!post) {
    return <Navigate to="/activities" replace />
  }

  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>{post.title}</h2>
      <p className={styles.detailMeta}>
        <span className={styles.detailDate}>{post.date}</span>
      </p>
      <NewsImageCarousel images={post.images} label={post.title} />
      <div className={styles.text}>
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

function NewsImageCarousel({ images, label }: { images: string[]; label: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className={carouselStyles.carousel}>
      <div className={carouselStyles.viewport} ref={emblaRef}>
        <div className={carouselStyles.container}>
          {images.map((image, index) => (
            <div className={carouselStyles.slide} key={image}>
              <img src={image} alt={`${label} 사진 ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className={carouselStyles.controls}>
        <button
          type="button"
          className={carouselStyles.arrow}
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="이전 사진"
        >
          <Chevron direction="left" />
        </button>
        <span className={carouselStyles.counter}>
          <strong>{selected + 1}</strong> / {images.length}
        </span>
        <button
          type="button"
          className={carouselStyles.arrow}
          onClick={() => emblaApi?.scrollNext()}
          aria-label="다음 사진"
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
