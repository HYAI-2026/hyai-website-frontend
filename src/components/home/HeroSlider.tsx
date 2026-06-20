import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { heroSlides } from '../../data/home'
import styles from '../../assets/styles/HeroSlider.module.css'

const AUTOPLAY_MS = 5000

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: AUTOPLAY_MS, stopOnInteraction: false }),
  ])
  const [selected, setSelected] = useState(0)
  const [playing, setPlaying] = useState(true)
  const count = heroSlides.length

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const togglePlay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    setPlaying((prev) => {
      const next = !prev
      if (next) autoplay.play()
      else autoplay.stop()
      return next
    })
  }, [emblaApi])

  return (
    <section className={styles.hero} aria-label="메인 슬라이드">
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {heroSlides.map((slide, index) => (
            <div className={styles.slide} key={slide.id}>
              <img className={styles.image} src={slide.image} alt="" />
              {(slide.title || slide.description) && (
                <div
                  className={`${styles.caption} hero-caption ${
                    index === selected ? 'is-active' : ''
                  }`}
                >
                  {slide.title && (
                    <h2 className={styles.title}>
                      {slide.title.split('\n').map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </h2>
                  )}
                  {slide.description && (
                    <p className={styles.desc}>
                      {slide.description.split('\n').map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.playButton}
            onClick={togglePlay}
            aria-label={playing ? '일시정지' : '재생'}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div className={styles.counter}>
            <button
              type="button"
              className={styles.navArrow}
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="이전 슬라이드"
            >
              ‹
            </button>
            <span>
              <strong>{selected + 1}</strong> / {count}
            </span>
            <button
              type="button"
              className={styles.navArrow}
              onClick={() => emblaApi?.scrollNext()}
              aria-label="다음 슬라이드"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" />
      <rect x="14" y="5" width="4" height="14" />
    </svg>
  )
}
