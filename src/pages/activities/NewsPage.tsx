import { useEffect, useState } from 'react'
import { fetchNewsPosts, getNewsDetailPath, type NewsPost } from '../../data/news'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function NewsPage() {
  const [posts, setPosts] = useState<NewsPost[]>([])

  useEffect(() => {
    let cancelled = false
    fetchNewsPosts()
      .then((next) => {
        if (!cancelled) setPosts(next)
      })
      .catch((err) => {
        console.error('Failed to load news posts', err)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className={styles.panel}>
      <Seo
        title="학회 소식"
        description="HYAI의 최신 학회 소식과 카드뉴스를 확인하세요."
        path="/activities"
      />
      <h2 className={styles.heading}>학회 소식</h2>
      <div className={styles.lectureGrid}>
        {posts.map((post, index) => (
          <PostCard
            key={post.id}
            post={{
              id: index + 1,
              title: post.title,
              date: post.date,
              image: post.thumbnail,
              href: getNewsDetailPath(post.id),
            }}
          />
        ))}
      </div>
    </section>
  )
}
