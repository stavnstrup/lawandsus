import React from 'react'
import { Link } from 'gatsby'
import * as footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <ul className={footerStyles.miniNav}>
        <li>
          <Link to="/">Sproglærerne</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/om-os/">Om os</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/undervisning/">Undervisning</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/kontakt/">Kontakt</Link>
        </li>
      </ul>
      <div className={footerStyles.cookie}>
        <Link to="/privatliv/">Cookie- og privatlivspolitik</Link>
      </div>
      <div className={footerStyles.copyright}>
        Copyright © 2020-2022 SPROGLÆRERNE
      </div>
    </div>
  )
}

export default Footer
