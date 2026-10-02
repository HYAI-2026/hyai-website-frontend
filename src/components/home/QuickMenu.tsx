import { quickMenu } from '../../data/navigation'
import AppLink from '../common/AppLink'
import styles from '../../assets/styles/QuickMenu.module.css'

export default function QuickMenu() {
  return (
    <nav className={styles.wrapper} aria-label="바로가기">
      <ul className={styles.list}>
        {quickMenu.map((item) => (
          <li key={item.label} className={styles.item}>
            <AppLink href={item.href} className={styles.link}>
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles.label}>{item.label}</span>
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
