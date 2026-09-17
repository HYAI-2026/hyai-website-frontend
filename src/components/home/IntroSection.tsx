import { useEffect, useRef, useState } from 'react'
import AppLink from '../common/AppLink'
import { fetchVideoUrl } from '../../data/home'
import styles from '../../assets/styles/IntroSection.module.css'

export default function IntroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!videoUrl || !videoRef.current) return
    const video = videoRef.current
    video.muted = true
    video.volume = 0
    void video.play().catch(() => {
      // Autoplay may still be blocked in some browsers; user can use controls.
    })
  }, [videoUrl])

  const handlePlay = () => {
    if (loading || videoUrl) return

    setLoading(true)
    fetchVideoUrl('nypc')
      .then((url) => {
        if (!url) {
          console.error('nypc video url is empty')
          return
        }
        setVideoUrl(url)
      })
      .catch((err) => {
        console.error('Failed to load nypc video', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <span className={styles.eyebrow}>Artificial Intelligence Association</span>
        <h2 className={styles.title}>HYAI</h2>
        <p className={styles.desc}>
          에리카 학생 누구라면 학과 상관없이 참여할수 있는 학회입니다. 
          자율을 학회 방향성으로 잡고있고, 원하는 만큼 학회에서 가져가게 하려고 합니다. 
          인공지능 시대에 필요한 인재가 될수 있도록 다같이 성장하겠습니다. 
          밑에 영상은 2025년 HYAI에서 팀을 이뤄 Nexon에서 운영한 NYPC 대회 참여 영상입니다. 
        </p>

        <div className={styles.visual}>
          {videoUrl ? (
            <video
              ref={videoRef}
              className={styles.video}
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <button
              type="button"
              className={styles.playButton}
              onClick={handlePlay}
              disabled={loading}
              aria-label={loading ? '영상 불러오는 중' : 'NYPC 영상 재생'}
            >
              {loading ? (
                <span className={styles.playLabel}>불러오는 중…</span>
              ) : (
                <>
                  <PlayIcon />
                  <span className={styles.playLabel}>영상 재생</span>
                </>
              )}
            </button>
          )}
          <AppLink href="/introduction" className={styles.cta}>
            <span className={styles.ctaIcon} aria-hidden="true">
              <PlusGrid />
            </span>
            <span className={styles.ctaLabel}>학회소개</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              ↗
            </span>
          </AppLink>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PlusGrid() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="13" height="13" stroke="#fff" strokeWidth="2" />
      <rect x="16" y="1" width="13" height="13" stroke="#fff" strokeWidth="2" />
      <rect x="1" y="16" width="13" height="13" stroke="#fff" strokeWidth="2" />
      <rect x="16" y="16" width="13" height="13" stroke="#fff" strokeWidth="2" />
    </svg>
  )
}
