import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

export default props => (
  <>
    <nav>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/om-os/">Om Os</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/undervisning/">Undervisning</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/information/">Information</Link>
        </li>
      </ul>
    </nav>
  </>
)
