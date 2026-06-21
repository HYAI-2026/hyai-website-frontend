import { Navigate, useParams } from 'react-router-dom'
import {
  getActivityPost,
  type ActivityCategory,
  activityCategoryPaths,
} from '../../data/activities'
import styles from '../../assets/styles/StudyContent.module.css'

interface Props {
  category: 'gallery'
}

export default function ActivityDetailPage({ category }: Props) {
  const { itemId } = useParams()
  const post = getActivityPost(category, itemId)
  const listPath = activityCategoryPaths[category]

  if (!post) {
    return <Navigate to={listPath} replace />
  }

  return (
    <section className={styles.panel}>
      <div className={styles.detailThumb}>
        <img src={post.image} alt="" loading="lazy" />
      </div>
      <h2 className={styles.heading}>{post.title}</h2>
      <p className={styles.detailMeta}>
        <span className={styles.detailDate}>{post.date}</span>
        <span className={styles.detailInstructor}>{post.summary}</span>
      </p>
      <div className={styles.text}>
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
