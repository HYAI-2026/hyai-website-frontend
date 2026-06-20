import styles from '../../assets/styles/JoinButton.module.css'

export default function JoinButton() {
  return (
    <div className={styles.wrapper}>
      <a href="#join" className={styles.button}>
        가입하기
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </a>
    </div>
  )
}
