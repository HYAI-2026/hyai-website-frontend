import { galleryPosts, getActivityDetailPath } from '../../data/activities'
import PostCard from '../../components/common/PostCard'
import styles from '../../assets/styles/StudyContent.module.css'

export default function GalleryPage() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>갤러리</h2>
      <div className={styles.lectureGrid}>
        {galleryPosts.map((post, index) => (
          <PostCard
            key={post.id}
            post={{
              id: index + 1,
              title: post.title,
              summary: post.summary,
              date: post.date,
              image: post.image,
              href: getActivityDetailPath('gallery', post.id),
            }}
          />
        ))}
      </div>
    </section>
  )
}
