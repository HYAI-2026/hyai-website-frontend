import { galleryItems, getGalleryDetailPath } from '../../data/gallery'
import PostCard from '../../components/common/PostCard'
import styles from '../../assets/styles/StudyContent.module.css'

export default function GalleryPage() {
  return (
    <section className={styles.panel}>
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
