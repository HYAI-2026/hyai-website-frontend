import { useRef } from 'react'
import { galleryPosts } from '../../data/home'
import CardCarousel, { CarouselArrows } from '../common/CardCarousel'
import type { CardCarouselHandle } from '../common/CardCarousel'
import styles from '../../assets/styles/Section.module.css'

export default function GallerySection() {
  const carouselRef = useRef<CardCarouselHandle>(null)

  return (
    <section id="activities" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div className="section-head">
            <span className="section-head__eyebrow">Awards and Honors</span>
            <h2 className="section-head__title">수상경력</h2>
          </div>
          <CarouselArrows
            className={styles.headArrows}
            onPrev={() => carouselRef.current?.scrollPrev()}
            onNext={() => carouselRef.current?.scrollNext()}
          />
        </div>
        <CardCarousel ref={carouselRef} posts={galleryPosts} />
      </div>
    </section>
  )
}
