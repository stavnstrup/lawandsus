import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap'
import * as headerStyles from './header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import FrenchFlag from '../images/Flag_of_France.svg'
import GermanFlag from '../images/Flag_of_Germany.svg'

const Header = (props) => (
  <>
    <header className={headerStyles.headerBar}>
      <Navbar expand="md" variant="dark" fixed="top1">
        <Navbar.Brand href="/">
          <span className={headerStyles.logo}>Sproglærerne</span>
          <img src={GermanFlag} className={headerStyles.flag} alt="Germany" />
          <img src={FrenchFlag} className={headerStyles.flag} alt="France" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav as="ul">
            <Nav.Item as="li">
              <Link to="/om-os/" className="nav-link" activeClassName="active">
                Om os
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="/undervisning/"
                className="nav-link"
                activeClassName="active"
              >
                Undervisning
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="/kontakt/"
                className="nav-link"
                activeClassName="active"
              >
                Kontakt
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>

    {/*
    <nav>
      <ul className={headerStyles.navList}>
        <li className={(headerStyles.navItem, headerStyles.logo)}>
          <Link to="/">
            <strong>SPROGLÆRERNE</strong>
          </Link>
          <img className={headerStyles.flag} src={GermanFlag} alt="Germany" />
          <img className={headerStyles.flag} src={FrenchFlag} alt="France" />
        </li>
        <input className={headerStyles.menuBtn} type="checkbox" id="menuBtn" />
        <label className={headerStyles.menuIcon} for="menuBtn">
          <span className={headerStyles.navIcon}></span>
        </label>
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
*/}
  </>
)

export default Header;
