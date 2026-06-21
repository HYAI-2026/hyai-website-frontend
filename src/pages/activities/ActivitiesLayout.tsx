import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { activitiesNav, isActivitiesNavActive } from '../../data/activities'
import layoutStyles from '../../assets/styles/IntroductionLayout.module.css'

export default function ActivitiesLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className={layoutStyles.page}>
      <div className={layoutStyles.inner}>
        <div className={layoutStyles.pageHead}>
          <span className={layoutStyles.eyebrow}>Activities</span>
          <h1 className={layoutStyles.title}>학회원 활동</h1>
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
              aria-label="학회원 활동 하위 메뉴"
            >
              {activitiesNav.map((item) => {
                const active = isActivitiesNavActive(item.path, pathname)

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
