import { useEffect, useState } from 'react'
import StructuredData from '../../components/common/StructuredData'
import Seo from '../../components/common/Seo'
import {
  fetchExecutiveMembers,
  getExecutiveCohort,
  getMembersStructuredData,
  type ExecutiveCohort,
  type Member,
} from '../../data/members'
import styles from '../../assets/styles/MembersContent.module.css'

type ExecutivesPageProps = {
  cohort: ExecutiveCohort
}

export default function ExecutivesPage({ cohort }: ExecutivesPageProps) {
  const { title, path, executives: fallback } = getExecutiveCohort(cohort)
  const [executives, setExecutives] = useState<Member[]>([...fallback])

  useEffect(() => {
    let cancelled = false
    setExecutives([...getExecutiveCohort(cohort).executives])
    fetchExecutiveMembers(cohort)
      .then((next) => {
        if (!cancelled) setExecutives(next)
      })
      .catch((err) => {
        console.error('Failed to load member images', err)
      })
    return () => {
      cancelled = true
    }
  }, [cohort])

  return (
    <section className={styles.panel}>
      <Seo
        title={title}
        description={`2026년 HYAI ${title}을 소개합니다. 회장단, 학술부, 기획부, 홍보부, 디자인부 구성원 정보를 확인하세요.`}
        path={path}
      />
      <StructuredData data={getMembersStructuredData(cohort, executives)} />
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.grid}>
        {executives.map((member) => (
          <article key={member.id} className={styles.card}>
            <img
              className={styles.photo}
              src={member.image}
              alt={`${member.name} 프로필 사진`}
            />
            <div className={styles.info}>
              {member.role ? <p className={styles.role}>{member.role}</p> : null}
              <h3 className={styles.name}>{member.name}</h3>
              {member.grade ? (
                <p className={styles.detail}>
                  <span className={styles.detailLabel}>학번</span> : {member.grade}
                </p>
              ) : null}
              {member.department ? (
                <p className={styles.detail}>
                  <span className={styles.detailLabel}>학과</span> :{' '}
                  {member.department}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
