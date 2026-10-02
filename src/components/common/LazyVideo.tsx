import { useState } from 'react'
import styles from '../../assets/styles/LazyVideo.module.css'

interface LazyVideoProps {
  src: string
  label?: string
  className?: string
}

export default function LazyVideo({ src, label = '영상', className }: LazyVideoProps) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <video
        className={className}
        src={src}
        controls
        autoPlay
        playsInline
        aria-label={label}
      />
    )
  }

  return (
    <button
      type="button"
      className={`${styles.placeholder} ${className ?? ''}`}
      onClick={() => setActive(true)}
      aria-label={`${label} 재생`}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
      <span className={styles.label}>영상 재생</span>
    </button>
  )
}
