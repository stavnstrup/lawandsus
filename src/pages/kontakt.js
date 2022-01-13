import React from 'react'
import Seo from '../components/seo.js'
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { Link } from 'gatsby'
import * as kontaktStyles from '../components/kontakt.module.scss'

const Kontakt = () => (
  <>
    <Seo
      title="Kontakt og tilmelding"
      description="Vi underviser på din arbejdsplads, privat eller hos os. Vores område dækker Københavnsområdet. Du kan tilmelde dig på hjemmesiden. Vi vender så tilbage med et forslag til undervisningen. Du kan kontakte os på vores mails."
    />
    <Header />
    <Layout>
      <h1>Kontakt</h1>

      <h2>Hvor</h2>
      <p>
        Undervisningen kan foregå i vores lokaler, på din arbejdsplads eller online.
      </p>

      <h2>Kontakt os</h2>
      <p>
        Klik <Link to="/tilmelding/">her</Link>, og vi ringer dig op inden for 24 timer. Har du spørgsmål, kan du også kontakte os pr. mail.
      </p>

      <div className={kontaktStyles.cvrInfo}>
        <div>
          <h4>Sproglærerne / Tysk</h4>
          <p>
            J.E. Ohlsens Gade 6, 4. tv
            <br />
            2100 København Ø.
            <br />
            e-mail: sus.vestergaard@mail.tele.dk
          </p>
          <p>CVR: 41435119</p>
        </div>
        <div>
          <h4>Sproglærerne / Fransk</h4>
          <p>
            Pilesvinget 79
            <br />
            2700 Brønshøj
            <br />
            e-mail: lisbeth@woll.dk
          </p>
          <p>CVR: 41435127 </p>
        </div>
      </div>
    </Layout>
    <Footer />
  </>
)

export default Kontakt;
