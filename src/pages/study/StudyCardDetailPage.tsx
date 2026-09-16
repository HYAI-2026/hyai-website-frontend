import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  fetchDailySeminarById,
  fetchGroupStudyById,
  fetchNightSeminarById,
  getStudyCard,
  type StudyCard,
  type StudyCategory,
  studyCategoryPaths,
} from '../../data/study'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

interface Props {
  category: StudyCategory
}

const fetchByCategory: Partial<
  Record<StudyCategory, (id: string | undefined) => Promise<StudyCard | undefined>>
> = {
  group: fetchGroupStudyById,
  seminar: fetchDailySeminarById,
  'night-seminar': fetchNightSeminarById,
}

export default function StudyCardDetailPage({ category }: Props) {
  const { itemId } = useParams()
  const fallback = getStudyCard(category, itemId)
  const [item, setItem] = useState<StudyCard | undefined>(fallback)
  const listPath = studyCategoryPaths[category]

  useEffect(() => {
    const fetchItem = fetchByCategory[category]
    if (!fetchItem) return
    let cancelled = false
    fetchItem(itemId)
      .then((next) => {
        if (!cancelled && next) setItem(next)
      })
      .catch((err) => {
        console.error('Failed to load study card', err)
      })
    return () => {
      cancelled = true
    }
  }, [category, itemId])

  if (!fallback) {
    return <Navigate to={listPath} replace />
  }

  if (!item) {
    return null
  }

  return (
    <section className={styles.panel}>
      <Seo
        title={item.title}
        description={item.paragraphs[0] ?? `${item.title} 소개입니다.`}
        path={`${listPath}/${item.id}`}
        image={item.image || undefined}
      />
      <div
        className={`${styles.detailThumb} ${category === 'seminar' || category === 'night-seminar' ? styles.detailThumbNatural : ''}`}
      >
        {item.image ? (
          <img src={item.image} alt="" loading="lazy" decoding="async" />
        ) : null}
      </div>
      <h2 className={styles.heading}>{item.title}</h2>
      <p className={styles.detailMeta}>
        <span className={styles.detailDate}>{item.date}</span>
        <span className={styles.detailInstructor}>{item.summary}</span>
      </p>
      <div className={styles.text}>
        {item.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
