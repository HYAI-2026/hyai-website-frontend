import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import {
  fetchHaigoGroup,
  getHaigoGroup,
  type HaigoGroup,
} from '../../data/haigo'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'
import carouselStyles from '../../assets/styles/HaigoDetail.module.css'

export default function HaigoDetailPage() {
  const { itemId } = useParams()
  const fallback = getHaigoGroup(itemId)
  const [group, setGroup] = useState<HaigoGroup | undefined>(fallback)

  useEffect(() => {
    let cancelled = false
    fetchHaigoGroup(itemId)
      .then((next) => {
        if (!cancelled && next) setGroup(next)
      })
      .catch((err) => {
        console.error('Failed to load HY-GO group', err)
      })
    return () => {
      cancelled = true
    }
  }, [itemId])

  if (!fallback) {
    return <Navigate to="/exchange" replace />
  }

  if (!group) {
    return null
  }

  return (
    <section className={styles.panel}>
      <Seo
        title={`HY-GO! ${group.label}`}
        description={`HYAI 교류행사 HY-GO! ${group.label} 활동 사진과 조원(${group.members})을 소개합니다.`}
        path={`/exchange/haigo/${group.id}`}
        image={group.thumbnail || undefined}
      />
      <h2 className={styles.heading}>{group.label}</h2>
      <p className={styles.detailMeta}>
        <span className={styles.detailDate}>{group.date}</span>
        <span className={carouselStyles.members}>조원 : {group.members}</span>
      </p>
      {group.images.length > 0 ? (
        <HaigoImageCarousel images={group.images} label={group.label} />
      ) : null}
    </section>
  )
}

function HaigoImageCarousel({ images, label }: { images: string[]; label: string }) {
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
  }, [emblaApi, images])

  return (
    <div className={carouselStyles.carousel}>
      <div className={carouselStyles.viewport} ref={emblaRef}>
        <div className={carouselStyles.container}>
          {images.map((image, index) => (
            <div className={carouselStyles.slide} key={image}>
              <img
                src={image}
                alt={`${label} 사진 ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
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
