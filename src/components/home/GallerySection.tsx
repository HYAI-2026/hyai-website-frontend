import { useEffect, useRef, useState } from 'react'
import { fetchHomeGalleryPosts } from '../../data/gallery'
import type { PostCard } from '../../types'
import CardCarousel, { CarouselArrows } from '../common/CardCarousel'
import type { CardCarouselHandle } from '../common/CardCarousel'
import styles from '../../assets/styles/Section.module.css'

export default function GallerySection() {
  const carouselRef = useRef<CardCarouselHandle>(null)
  const [posts, setPosts] = useState<PostCard[]>([])

  useEffect(() => {
    let cancelled = false
    fetchHomeGalleryPosts()
      .then((next) => {
        if (!cancelled) setPosts(next)
      })
      .catch((err) => {
        console.error('Failed to load home gallery', err)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="activities" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div className="section-head">
            <span className="section-head__eyebrow">Gallery</span>
            <h2 className="section-head__title">갤러리</h2>
          </div>
          <CarouselArrows
            className={styles.headArrows}
            onPrev={() => carouselRef.current?.scrollPrev()}
            onNext={() => carouselRef.current?.scrollNext()}
          />
        </div>
        <CardCarousel ref={carouselRef} posts={posts} />
      </div>
    </section>
  )
}
