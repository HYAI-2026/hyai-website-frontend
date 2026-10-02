import { mtEvents, getExchangeDetailPath } from '../../data/exchange'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function MtPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="MT"
        description="학회원들이 함께 떠나는 HYAI MT 및 연합행사를 소개합니다."
        path="/exchange/mt"
      />
      <h2 className={styles.heading}>MT</h2>
      <div className={styles.lectureGrid}>
        {mtEvents.map((event, index) => (
          <PostCard
            key={event.id}
            post={{
              id: index + 1,
              title: event.title,
              summary: event.summary,
              date: event.date,
              image: event.image,
              href: getExchangeDetailPath('mt', event.id),
            }}
          />
        ))}
      </div>
    </section>
  )
}
