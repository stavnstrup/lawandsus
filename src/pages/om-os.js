import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <>
    <Header />
    <Layout>
      <h1>Om os</h1>
      <p>
        Vi er erfarne sproglærere med en masse i bagagen, både hvad angår
        uddannelse og praksis. Her nogle uddrag fra vores CV’er:
      </p>

      <h2>Lisbeth</h2>
      <ul>
        <li>Cand.mag. i fransk og engelsk</li>
        <li>Korrespondent i fransk og engelsk</li>
        <li>Erhvervsøkonomisk suppleringsuddannelse på CBS</li>
        <li>It-faglig efteruddannelse på ITU</li>
        <li>Gymnasielærer på hhx og stx i 25 år</li>
        <li>
          3 år i Bruxelles med jobs i et amerikansk firma og EU-Kommissionen
        </li>
        <li>Jobs i forskellige firmaer i Danmark</li>
      </ul>

      <h2>Susanne</h2>

      <ul>
        <li>Magister</li>
      </ul>
    </Layout>
  </>
)
