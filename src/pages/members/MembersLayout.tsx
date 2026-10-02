import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { membersNav } from '../../data/members'
import layoutStyles from '../../assets/styles/IntroductionLayout.module.css'

export default function MembersLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={layoutStyles.page}>
      <div className={layoutStyles.inner}>
        <div className={layoutStyles.pageHead}>
          <span className={layoutStyles.eyebrow}>Members</span>
          <h1 className={layoutStyles.title}>구성원</h1>
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
              aria-label="구성원 하위 메뉴"
            >
              {membersNav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
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
