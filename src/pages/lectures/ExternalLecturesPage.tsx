import { useEffect, useState } from 'react'
import {
  fetchExternalLectures,
  getInvitedLectureDetailPath,
  type InvitedLecture,
} from '../../data/invitedLectures'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function ExternalLecturesPage() {
  const [lectures, setLectures] = useState<InvitedLecture[]>([])

  useEffect(() => {
    let cancelled = false
    fetchExternalLectures()
      .then((next) => {
        if (!cancelled) setLectures(next)
      })
      .catch((err) => {
        console.error('Failed to load external lectures', err)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className={styles.panel}>
      <Seo
        title="외부인 초청강연"
        description="외부 연사를 초청해 진행하는 HYAI 외부인 초청강연을 소개합니다."
        path="/lectures/external"
      />
      <h2 className={styles.heading}>외부인 초청강연</h2>
      <div className={styles.lectureGrid}>
        {lectures.map((lecture, index) => (
          <PostCard
            key={lecture.id}
            post={{
              id: index + 1,
              title: lecture.title,
              summary: lecture.summary,
              date: lecture.date,
              image: lecture.image,
              href: getInvitedLectureDetailPath('external', lecture.id),
            }}
          />
        ))}
      </div>
    </section>
  )
}
