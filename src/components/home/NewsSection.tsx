import { useEffect, useRef, useState } from 'react'
import { fetchHomeNewsPosts } from '../../data/news'
import type { PostCard } from '../../types'
import CardCarousel, { CarouselArrows } from '../common/CardCarousel'
import type { CardCarouselHandle } from '../common/CardCarousel'
import styles from '../../assets/styles/Section.module.css'

export default function NewsSection() {
  const carouselRef = useRef<CardCarouselHandle>(null)
  const [posts, setPosts] = useState<PostCard[]>([])

  useEffect(() => {
    let cancelled = false
    fetchHomeNewsPosts()
      .then((next) => {
        if (!cancelled) setPosts(next)
      })
      .catch((err) => {
        console.error('Failed to load home news', err)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="board" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div className="section-head">
            <span className="section-head__eyebrow">News</span>
            <h2 className="section-head__title">학회소식</h2>
            <p className="section-head__desc">
              HYAI의 최근 학회소식을 안내드립니다.
            </p>
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
