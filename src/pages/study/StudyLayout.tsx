import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { studyNav } from '../../data/study'
import layoutStyles from '../../assets/styles/IntroductionLayout.module.css'

function isStudyNavActive(path: string, pathname: string) {
  if (path === '/study') {
    return pathname === '/study' || pathname.startsWith('/study/lecture/')
  }
  return pathname === path || pathname.startsWith(`${path}/`)
}

export default function StudyLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className={layoutStyles.page}>
      <div className={layoutStyles.inner}>
        <div className={layoutStyles.pageHead}>
          <span className={layoutStyles.eyebrow}>Programs</span>
          <h1 className={layoutStyles.title}>스터디</h1>
        </div>

        <div className={layoutStyles.layout}>
          <aside className={layoutStyles.sidebar}>
            <div className={layoutStyles.sidebarHead}>
              <span className={layoutStyles.sidebarTitle}>목록</span>
              <Hamburger
                toggled={menuOpen}
                toggle={setMenuOpen}
                size={22}
                color="#7C3AED"
                rounded
              />
            </div>
            <nav
              className={`${layoutStyles.nav} ${menuOpen ? layoutStyles.navOpen : ''}`}
              aria-label="스터디 하위 메뉴"
            >
              {studyNav.map((item) => {
                const active = isStudyNavActive(item.path, pathname)

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end
                    className={`${layoutStyles.navLink} ${active ? layoutStyles.navLinkActive : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
              })}
            </nav>
          </aside>

          <div className={layoutStyles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
