import StructuredData from '../../components/common/StructuredData'
import Seo from '../../components/common/Seo'
import { executives, membersStructuredData } from '../../data/members'
import styles from '../../assets/styles/MembersContent.module.css'

export default function ExecutivesPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="5기 임원진"
        description="2026년 HYAI 5기 임원진을 소개합니다. 학회장, 부학회장, 학술부, 기획부, 홍보부, 디자인부 구성원 정보를 확인하세요."
        path="/members"
      />
      <StructuredData data={membersStructuredData} />
      <h2 className={styles.heading}>5기 임원진</h2>
      <div className={styles.grid}>
        {executives.map((member) => (
          <article key={member.id} className={styles.card}>
            <img
              className={styles.photo}
              src={member.image}
              alt={`${member.name} 프로필 사진`}
            />
            <div className={styles.info}>
              <p className={styles.role}>{member.role}</p>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.detail}>
                <span className={styles.detailLabel}>학번</span> : {member.grade}
              </p>
              <p className={styles.detail}>
                <span className={styles.detailLabel}>학과</span> : {member.department}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
