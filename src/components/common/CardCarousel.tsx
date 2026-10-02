import { forwardRef, useImperativeHandle } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { PostCard as PostCardType } from '../../types'
import PostCard from './PostCard'
import styles from '../../assets/styles/CardCarousel.module.css'

export interface CardCarouselHandle {
  scrollPrev: () => void
  scrollNext: () => void
}

interface Props {
  posts: PostCardType[]
}

const CardCarousel = forwardRef<CardCarouselHandle, Props>(({ posts }, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  })

  useImperativeHandle(
    ref,
    () => ({
      scrollPrev: () => emblaApi?.scrollPrev(),
      scrollNext: () => emblaApi?.scrollNext(),
    }),
    [emblaApi],
  )

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {posts.map((post) => (
            <div className={styles.slide} key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

CardCarousel.displayName = 'CardCarousel'

export default CardCarousel

interface ArrowsProps {
  onPrev: () => void
  onNext: () => void
  className?: string
}

export function CarouselArrows({ onPrev, onNext, className }: ArrowsProps) {
  return (
    <div className={`${styles.arrows} ${className ?? ''}`}>
      <button type="button" className={styles.arrow} onClick={onPrev} aria-label="이전">
        <Chevron direction="left" />
      </button>
      <button type="button" className={styles.arrow} onClick={onNext} aria-label="다음">
        <Chevron direction="right" />
      </button>
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
