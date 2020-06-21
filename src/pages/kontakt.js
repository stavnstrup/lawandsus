import React from 'react'
import SEO from '../components/seo.js'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import kontaktStyles from '../components/kontakt.module.scss'

export default () => (
  <>
    <SEO
      title="Kontakt og tilmelding"
      description="Vi underviser på din arbejdsplads, privat eller hos os. Vores område dækker Københavnsområdet. Du kan tilmelde dig på hjemmesiden. Vi vender så tilbage med et forslag til undervisningen. Du kan kontakte os på vores mails."
    />
    <Header />
    <Layout>
      <h1>Kontakt</h1>

      <h2>Hvor</h2>

      <p>
        Vi underviser der, hvor det passer dig: på din arbejdsplads eller hos
        dig selv inden for Københavnsområdet.
      </p>

      <p>
        Undervisningen kan også foregå hos os på Østerbro eller i Brønshøj efter
        aftale.
      </p>

      <h2>Tilmelding</h2>
      <p>
        Du kan tilmelde dig <Link to="/tilmelding/">her</Link>, og så vender vi
        tilbage til dig med et forslag til undervisningen. Tilmeldingen er først
        bindende efter den første undervisningstime.
      </p>

      <p>Har du spørgsmål, kan du kontakte os pr. mail.</p>

      <div className={kontaktStyles.cvrInfo}>
        <div>
          <h4>Sproglærerne / Fransk</h4>
          <p>
            Lisbeth Aggerbeck Woll
            <br />
            Irisvej 16
            <br />
            2700 Brønshøj
            <br />
            e-mail: lisbeth@woll.dk
          </p>
          <p>CVR: 41435127 </p>
        </div>
        <div>
          <h4>Sproglærerne / Tysk</h4>
          <p>
            Susanne Vestergaard
            <br />
            J.E. Ohlsens Gade 6, 4. tv
            <br />
            2100 København Ø.
            <br />
            e-mail: sus.vestergaard@mail.tele.dk
          </p>
          <p>CVR: 41435119</p>
        </div>
      </div>
    </Layout>
    <Footer />
  </>
)
