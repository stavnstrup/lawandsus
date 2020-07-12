import React from 'react'
import SEO from '../components/seo.js'
import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'

import '../styles/global.css'

export default () => (
  <>
    <SEO
      title="Undervisnings tilbud"
      description="Vi udbyder kurser på gymnasialt niveau og intensive brush-up kurser i sprog og kultur. Vi tilbyder individuelle forløb på baggrund af kursisternes ønsker."
    />
    <Header />
    <Layout>
      <h1>Undervisning</h1>

      <p>
        Vi udbyder tre typer af kurser: kurser på gymnasialt niveau, kurser for
        elever med særlige udfordringer og intensive brush-up kurser i sprog og
        kultur.
      </p>

      <p>
        Vi afholder primært kurser à 10 lektioners varighed, hvor vi tester og
        evaluerer resultatet. Kurserne opbygges som individuelle forløb på
        baggrund af dine ønsker. Undervisningen kan desuden foregå online, så
        mødetiden bliver mere fleksibel. Hjemmearbejde bliver afpasset dine
        ønsker.
      </p>

      <p>Kursusperiode: 10 lektioner eller efter aftale</p>

      <p>1 lektion: 50 minutter</p>

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
        </tbody>
      </table>
      <p />
      <p>Priserne er inkl. undervisningsmaterialer.</p>
    </Layout>
    <Footer />
  </>
)
