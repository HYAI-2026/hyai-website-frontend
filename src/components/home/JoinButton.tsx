import AppLink from '../common/AppLink'
import styles from '../../assets/styles/JoinButton.module.css'

export default function JoinButton() {
  return (
    <div className={styles.wrapper}>
      <AppLink href="https://forms.gle/5ukQ6aMDWTxVuM7u5" className={styles.button}>
        가입하기
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </AppLink>
    </div>
  )
}
