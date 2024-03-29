import React from 'react'
import Seo from '../components/seo.js'
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'

import '../styles/global.css'

const Undervisning = () => (
  <>
    <Seo
      title="Undervisnings tilbud"
      description="Vi udbyder undervisning på gymnasialt niveau og intensive fransk kurser og tysk kurser. Vi tilbyder individuelle forløb på baggrund af kursisternes ønsker."
    />
    <Header />
    <Layout>
      <h1>Undervisning</h1>

      <p>
        Vi tilbyder individuelt tilrettelagte kurser à 10 lektioners varighed og underviser både fysisk og online.
        Vi følger den enkelte tæt i forhold til den sproglige udvikling og fokuserer på det, der
        er væsentligt for at tilegne sig et sprog. Vi lægger vægt på det mundtlige og inddrager grammatikken,
        når den er relevant og i passende doser.
      </p>

      <p>
       Når du har meldt dig til et kursus, indleder vi med en afklarende samtale. Her finder vi dit
       niveau og din læringsstil, dvs. at vi sammen fastlægger, hvordan netop du lærer bedst. Vi planlægger
       herefter et overordnet forløb. Efter hver lektion laver vi en kort opsamling og en plan for næste modul. I hver lektion vil du få talt sproget i mindst en halv time, og du vil kunne mærke en større sikkerhed, have fået et større gloseforråd og have lært lige det, du mangler for at komme videre.
      </p>

      <p>
       Vi bruger ikke traditionelt lærebogsmateriale, men sammensætter vores eget i form af podcasts,
       videoer, grammatiske forklaringer mm., som følges op i undervisningen af samtaler med læreren.
       Vi underviser både på sproget og på dansk, hvilket giver de bedste forudsætninger for at lære
       et fremmedsprog.
      </p>

      <p>Kursusperiode: 10 lektioner eller efter aftale</p>

      <p>1 lektion: 45 minutter</p>

      <p>Holdstørrelse: enetimer eller minihold på 2-3 personer</p>

      <p>Tidspunkt: efter aftale</p>

      <h2>Priser</h2>

      <table className="prices">
        <tbody>
          <tr>
            <th colspan="2">For almindelige kursister</th>
          </tr>
          <tr>
            <td>1 lektion</td>
            <td className="priceCol">575 kr.</td>
          </tr>
          <tr>
            <td>10 lektioner</td>
            <td className="priceCol">5.200 kr.</td>
          </tr>

          <tr>
            <th colspan="2">For studerende (20% rabat)</th>
          </tr>
          <tr>
            <td>1 lektion</td>
            <td className="priceCol">460 kr.</td>
          </tr>
          <tr>
            <td>10 lektioner</td>
            <td className="priceCol">4.200 kr.</td>
          </tr>
          <tr>
            <th colspan="2">For elever med særlige behov</th>
          </tr>
          <tr>
            <td colspan="2">Normal SPS-støttetakst</td>
          </tr>
        </tbody>
      </table>
      <p />
      <p>Priserne er inkl. undervisningsmaterialer.</p>
    </Layout>
    <Footer />
  </>
)

export default Undervisning;
