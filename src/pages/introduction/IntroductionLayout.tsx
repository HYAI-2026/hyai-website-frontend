import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { introductionNav } from '../../data/introduction'
import layoutStyles from '../../assets/styles/IntroductionLayout.module.css'

export default function IntroductionLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={layoutStyles.page}>
      <div className={layoutStyles.inner}>
        <div className={layoutStyles.pageHead}>
          <span className={layoutStyles.eyebrow}>About HYAI</span>
          <h1 className={layoutStyles.title}>학회소개</h1>
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
              aria-label="학회소개 하위 메뉴"
            >
              {introductionNav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/introduction'}
                  className={({ isActive }) =>
                    `${layoutStyles.navLink} ${isActive ? layoutStyles.navLinkActive : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
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
