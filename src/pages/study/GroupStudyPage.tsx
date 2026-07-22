import { groupStudies } from '../../data/study'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function GroupStudyPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="자율그룹스터디"
        description="마음 맞는 학회원끼리 모여 학회 지원을 받아 자율적으로 진행하는 HYAI 자율그룹스터디를 소개합니다."
        path="/study/group"
      />
      <h2 className={styles.heading}>자율그룹스터디</h2>
      <div className={styles.lectureGrid}>
        {groupStudies.map((group, index) => (
          <PostCard
            key={group.id}
            post={{
              id: index + 1,
              title: group.title,
              summary: group.summary,
              date: group.date,
              image: group.image,
              href: `/study/group/${group.id}`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
