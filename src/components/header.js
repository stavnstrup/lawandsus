import React from 'react'
import { Link } from 'gatsby'
import FrenchFlag from '../images/Flag_of_France.svg'
import GermanFlag from '../images/Flag_of_Germany.svg'

import headerStyles from './header.module.scss'

export default (props) => (
  <>
    <nav>
      <ul className={headerStyles.navList}>
        <li className={(headerStyles.navItem, headerStyles.logo)}>
          <Link to="/">
            <strong>SPROGLÆRERNE</strong>
          </Link>
          <img className={headerStyles.flag} src={GermanFlag} alt="Germany" />
          <img className={headerStyles.flag} src={FrenchFlag} alt="France" />
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/om-os/">Om os</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/undervisning/">Undervisning</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/kontakt/">Kontakt</Link>
        </li>
      </ul>
    </nav>
  </>
)
