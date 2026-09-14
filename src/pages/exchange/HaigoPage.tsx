import { useEffect, useState } from 'react'
import { fetchHaigoGroups, getHaigoDetailPath, type HaigoGroup } from '../../data/haigo'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function HaigoPage() {
  const [groups, setGroups] = useState<HaigoGroup[]>([])

  useEffect(() => {
    let cancelled = false
    fetchHaigoGroups()
      .then((next) => {
        if (!cancelled) setGroups(next)
      })
      .catch((err) => {
        console.error('Failed to load HY-GO groups', err)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className={styles.panel}>
      <Seo
        title="HY-GO!"
        description="학회원들이 조를 이뤄 친목을 도모하는 HYAI 대표 교류행사 HY-GO! 를 소개합니다."
        path="/exchange"
      />
      <h2 className={styles.heading}>HY-GO!</h2>
      <div className={styles.lectureGrid}>
        {groups.map((group, index) => (
          <PostCard
            key={group.id}
            post={{
              id: index + 1,
              title: group.label,
              summary: `조원 : ${group.members}`,
              date: group.date,
              image: group.thumbnail,
              href: getHaigoDetailPath(group.id),
            }}
          />
        ))}
      </div>
    </section>
  )
}
