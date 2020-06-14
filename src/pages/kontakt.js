import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import KursusForm from '../components/kursusform'

export default () => (
  <>
    <Header />
    <Layout>
      {/* A little help for the Netlify post-processing bots */}
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="text" name="address" />
        <input type="text" name="postnr" />
        <input type="text" name="city" />
        <input type="text" name="telefonnummer" />
        <input type="email" name="email" />
        <textarea name="kunskaber"></textarea>
        <select name="sprog" />
        <textarea name="emner"></textarea>
      </form>

      <h1>Kontakt</h1>

      <h2>Hvor</h2>

      <p>
        Vi underviser der, hvor det passer dig: på din arbejdsplads eller hos
        dig selv i Københavnsområdet.
      </p>

      <p>
        Undervisningen kan også foregå hos os på Østerbro eller i Brønshøj efter
        aftale.
      </p>

      <h2>Tilmelding</h2>
      <p>
        Du kan tilmelde dig her, og så vender vi tilbage til dig med et forslag
        til undervisningen. Tilmeldingen er først bindende efter den første
        undervisningstime.
      </p>

      <KursusForm />

      {/*
Navn, adresse og mobilnr.
Tysk: ___ Fransk: ___
Beskriv dine sprogkundskaber og hvorfor du ønsker et sprogkursus?
Emner, som du gerne vil beskæftige dig med?
*/}

      <p>Har du spørgsmål, kan du kontakte os på flg. mails:</p>

      <p>Fransk: lisbeth@woll.dk</p>

      <p>Tysk: sus.vestergaard@mail.tele.dk</p>
    </Layout>
  </>
)
