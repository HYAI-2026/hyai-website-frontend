import { newsPosts, getNewsDetailPath } from '../../data/news'
import PostCard from '../../components/common/PostCard'
import styles from '../../assets/styles/StudyContent.module.css'

export default function NewsPage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>학회 소식</h2>
      <div className={styles.lectureGrid}>
        {newsPosts.map((post, index) => (
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
