import { galleryItems, getGalleryDetailPath } from '../../data/gallery'
import PostCard from '../../components/common/PostCard'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/StudyContent.module.css'

export default function GalleryPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="갤러리"
        description="벚꽃행사, 임원 회식, 대학축제 등 HYAI 학회원들의 활동 사진 갤러리입니다."
        path="/activities/gallery"
      />
      <h2 className={styles.heading}>갤러리</h2>
      <div className={styles.lectureGrid}>
        {galleryItems.map((item, index) => (
          <PostCard
            key={item.id}
            post={{
              id: index + 1,
              title: item.title,
              summary: item.description || undefined,
              date: item.date,
              image: item.image,
              href: getGalleryDetailPath(item.id),
            }}
          />
        ))}
      </div>
    </section>
  )
}
