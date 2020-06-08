import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Layout from '../components/layout'
import FrenchFlag from '../images/Flag_of_France.svg'
import GermanFlag from '../images/Flag_of_Germany.svg'
import '../styles/global.css'

const Index2 = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/">
          <div className="logo1">Sproglærerne</div>
          <img src={GermanFlag} className="flag" alt="Germany" />
          <img src={FrenchFlag} className="flag" alt="France" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Item>
              <Nav.Link href="/om-os/">Om os</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/undervisning/">Undervisning</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/kontakt/">Kontakt</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Layout>
        <p>Hello World</p>
      </Layout>
    </>
  )
}

export default Index2
