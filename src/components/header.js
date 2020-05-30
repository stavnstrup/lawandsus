import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

export default (props) => (
  <>
    <nav>
      <ul className={headerStyles.navList}>
        <li className={(headerStyles.navItem, headerStyles.logo)}>
          <Link to="/">
            <strong>SPROGLÆRERNE</strong>
          </Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/om-os/">Om os</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/undervisning/">Undervisning</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/kontakt/">Kontakt / Tilmelding</Link>
        </li>
      </ul>
    </nav>
  </>
)
