import { useEffect, useRef } from 'react'
import nypcVideo from '../../assets/videos/nypc.mov'
import AppLink from '../common/AppLink'
import styles from '../../assets/styles/IntroSection.module.css'

export default function IntroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.volume = 0
    }
  }, [])

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
          <video
            ref={videoRef}
            className={styles.video}
            src={nypcVideo}
            autoPlay
            loop
            muted
            playsInline
          />
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
