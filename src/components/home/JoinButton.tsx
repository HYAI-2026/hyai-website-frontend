import AppLink from '../common/AppLink'
import styles from '../../assets/styles/JoinButton.module.css'

export default function JoinButton() {
  return (
    <div className={styles.wrapper}>
      <AppLink href="https://forms.gle/3DexGKEx34vJYFBn8" className={styles.button}>
        가입하기
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </AppLink>
    </div>
  )
}
