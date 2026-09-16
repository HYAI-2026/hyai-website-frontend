import characterImage from '../../assets/images/character.jpeg'
import { characterContent } from '../../data/introduction'
import Seo from '../../components/common/Seo'
import styles from '../../assets/styles/IntroductionContent.module.css'

export default function CharacterPage() {
  return (
    <section className={styles.panel}>
      <Seo
        title="학회캐릭터"
        description={`HYAI 학회캐릭터 ${characterContent.name}. 디자이너 ${characterContent.designer}. ${characterContent.description}`}
        path="/introduction/character"
        image={characterImage}
      />
      <h2 className={styles.heading}>학회캐릭터</h2>
      <div className={styles.characterMedia}>
        <img
          src={characterImage}
          alt={`학회캐릭터 ${characterContent.name}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <dl className={styles.characterMeta}>
        <div>
          <dt>캐릭터명</dt>
          <dd>{characterContent.name}</dd>
        </div>
        <div>
          <dt>디자이너</dt>
          <dd>{characterContent.designer}</dd>
        </div>
        <div>
          <dt>제작 날짜</dt>
          <dd>{characterContent.date}</dd>
        </div>
      </dl>
      <div className={styles.text}>
        <p>{characterContent.description}</p>
      </div>
    </section>
  )
}
