import { Link } from 'react-router-dom'
import type { PostCard as PostCardType } from '../../types'
import styles from '../../assets/styles/PostCard.module.css'

interface Props {
  post: PostCardType
}

export default function PostCard({ post }: Props) {
  const isInternal = post.href.startsWith('/')

  const content = (
    <>
      <div className={styles.thumb}>
        <img src={post.image} alt="" loading="lazy" />
      </div>
      <div className={styles.body}>
        {post.title && <h3 className={styles.title}>{post.title}</h3>}
        {post.summary && <p className={styles.summary}>{post.summary}</p>}
        <span className={styles.date}>
          <CalendarIcon />
          {post.date}
        </span>
      </div>
    </>
  )

  if (isInternal) {
    return (
      <Link to={post.href} className={styles.card}>
        {content}
      </Link>
    )
  }

  return (
    <a href={post.href} className={styles.card}>
      {content}
    </a>
  )
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
