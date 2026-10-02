import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { invitedLectureNav } from '../../data/invitedLectures'
import layoutStyles from '../../assets/styles/IntroductionLayout.module.css'

function isInvitedLectureNavActive(path: string, pathname: string) {
  if (path === '/lectures') {
    return pathname === '/lectures' || pathname.startsWith('/lectures/professor/')
  }
  return pathname === path || pathname.startsWith(`${path}/`)
}

export default function LecturesLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className={layoutStyles.page}>
      <div className={layoutStyles.inner}>
        <div className={layoutStyles.pageHead}>
          <span className={layoutStyles.eyebrow}>Lectures</span>
          <h1 className={layoutStyles.title}>초청강연</h1>
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
              aria-label="초청강연 하위 메뉴"
            >
              {invitedLectureNav.map((item) => {
                const active = isInvitedLectureNavActive(item.path, pathname)

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
