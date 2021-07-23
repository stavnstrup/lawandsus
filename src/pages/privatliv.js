import React from 'react'
import Seo from '../components/seo.js'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'

const Privatliv = () => (
  <>
    <Seo title="Cookie- og privatliv- og cookie og privatliv" />
    <Header />
    <Layout>
      <h1>Cookie- og privatlivspolitik</h1>

      <h2>Cookies</h2>
      <p>Sproglærerne.dk anvender ikke cookies.</p>

      <h2>Privatlivspolitik for Sproglærerne.dk</h2>
      <p>
        På denne side kan du læse om vores behandling af dine personoplysninger
        og dine rettigheder.
      </p>
      <p>
        Sproglærerne.dk behandler de oplysninger, du giver os, i
        overensstemmelse med gældende regler. Vi er bevidste om, at dine
        oplysninger skal behandles med respekt for oplysningernes fortrolighed
        og for dit privatliv.
      </p>
      <h3>Brug af personoplysninger</h3>
      <p>
        Vi anvender dine personoplysninger til tilmelding af kurser, betaling
        for kurser og udsendelse af undervisningsmateriale samt anden
        kommunikation med dig vedr. dit sprogkursus hos os.
      </p>
      <p>Vi indsamler følgende oplysninger</p>
      <ul>
        <li>Navn</li>
        <li>Adresse</li>
        <li>Telefonnummer</li>
        <li>E-mail</li>
      </ul>
      <h3>Videregivelse af dine personoplysninger</h3>
      <p>Vi videregiver ikke dine personoplysninger.</p>
      <h3>Opbevaring af dine personoplysninger</h3>
      <p>
        Dine personoplysninger opbevares sikkert og fortroligt i IT-systemer med
        kontrolleret og begrænset adgang og på servere, placeret i særligt
        sikrede lokaler.
      </p>
      <h3>Dine rettigheder</h3>
      <p>
        Du har ret til at anmode om indsigt, berigtigelse eller sletning af dine
        personoplysninger. Hvis du ønsker en mere udførlig beskrivelse af dine
        rettigheder, kan du læse forordningen, Vejledning om de registreredes
        rettigheder fra Datatilsynet.
      </p>
      <h3>Klage til Datatilsynet</h3>
      <p>
        Du har ret til at indgive en klage til Datatilsynet, hvis du er
        utilfreds med den måde, vi behandler dine personoplysninger på. Du
        finder Datatilsynets kontaktoplysninger på www.datatilsynet.dk
      </p>

      <p>Sidst opdateret: 1. juli 2020</p>
    </Layout>
    <Footer />
  </>
)

export default Privatliv;
