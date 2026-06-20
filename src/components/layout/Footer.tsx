import styles from '../../assets/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <strong>HYAI</strong>
            <span>Hanyang Artificial Intelligence Association</span>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.infoRow}>
            <span className={styles.infoStrong}>한양대학교 ERICA 인공지능학회 HYAI</span>
          </div>
          <p className={styles.address}>
            <em>주소</em> (15588) 경기도 안산시 상록구 한양대학로 55 ERICA 융합교육관
          </p>
          <p className={styles.address}>
            <em>Conatact : </em> hyai20220926@gmail.com
          </p>
        </div>

        <div className={styles.bottom}>
          <span>Copyright © HYAI. All rights reserved.</span>
          <span>Developed by HYAI</span>
        </div>
      </div>
    </footer>
  )
}
