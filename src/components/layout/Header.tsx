import { useState } from 'react'
import { mainNav, topNav } from '../../data/navigation'
import hyaiLogo from '../../assets/images/hyai.png'
import AppLink from '../common/AppLink'
import styles from '../../assets/styles/Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const toggleSection = (label: string) =>
    setOpenSection((cur) => (cur === label ? null : label))

  const isDropdownOpen = (label: string) =>
    openSection === label || hoveredSection === label

  const handleNavItemEnter = (label: string) => {
    if (window.matchMedia('(min-width: 901px)').matches) {
      setHoveredSection(label)
    }
  }

  const handleNavItemLeave = () => {
    setHoveredSection(null)
  }

  return (
    <header className={styles.header}>
      {/* 하이아이 소속 정보 */}
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <AppLink href={topNav[0].href} className={styles.topBrandTab}>
            {topNav[0].label}
          </AppLink>
          <div className={styles.topLinks}>
            {topNav.slice(1).map((item) => (
              <AppLink key={item.label} href={item.href} className={styles.topLink}>
                {item.label}
              </AppLink>
            ))}
          </div>
        </div>
      </div>

      {/* 헤더 메인 네비게이션 */}
      <div className={styles.mainBar}>
        <div className={styles.mainInner}>
          <AppLink href="/" className={styles.brand}>
            <img className={styles.brandMark} src={hyaiLogo} alt="HYAI 로고" />
            <span className={styles.brandText}>
              <strong>HYAI</strong>
              <em>Hanyang Artificial Intelligence</em>
            </span>
          </AppLink>

          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            aria-label="주 메뉴"
          >
            {mainNav.map((item) => (
              <div
                key={item.label}
                className={`${styles.navItem} ${
                  isDropdownOpen(item.label) ? styles.navItemActive : ''
                }`}
                onMouseEnter={() => handleNavItemEnter(item.label)}
                onMouseLeave={handleNavItemLeave}
              >
                <AppLink
                  href={item.href}
                  className={styles.navLink}
                  onClick={(e) => {
                    if (item.children && item.href.startsWith('#')) {
                      e.preventDefault()
                      toggleSection(item.label)
                      return
                    }
                    setMenuOpen(false)
                  }}
                >
                  {item.label}
                  {item.children && <span className={styles.caret} aria-hidden="true" />}
                </AppLink>
                {item.children && (
                  <div className={styles.dropdown}>
                    <ul className={styles.dropdownList}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <AppLink href={child.href} className={styles.dropdownLink}>
                            {child.label}
                          </AppLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.iconButton} ${styles.menuToggle}`}
              aria-label="전체 메뉴"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={styles.hamburger} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
