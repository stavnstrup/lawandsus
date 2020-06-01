import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import '../styles/global.css'

export default () => (
  <>
    <Header />
    <Layout>
      <h1>Om os</h1>

      <p>
        Vi er erfarne sproglærere med en masse i bagagen, både hvad angår
        uddannelse og praksis. Vi har flg. CV’er:
      </p>

      <img
        className="poetrait"
        src="https://via.placeholder.com/200x300"
        alt="Lisbeth Woll"
      />

      <h2>Lisbeth Aggerbeck Woll</h2>

      <ul>
        <li>Cand.mag. i fransk og engelsk, KU</li>
        <li>Korrespondent i fransk og engelsk, CBS</li>
        <li>Erhvervsøkonomisk suppleringsuddannelse, CBS</li>
        <li>It-faglig efteruddannelse, ITU</li>
        <li>Gymnasielærer på HHX og STX i 25 år</li>
        <li>
          3 år i Bruxelles med jobs i et amerikansk firma og EU-Kommissionen
        </li>
        <li>Jobs i forskellige firmaer i Danmark</li>
      </ul>

      <img
        className="poetrait"
        src="https://via.placeholder.com/200x300"
        alt="Susanne Vestergaard"
      />

      <h2>Susanne Vestergaard</h2>

      <ul>
        <li>Magister i Germansk Filologi, Frie Universität Berlin</li>
        <li>Cand.mag i tysk og kunsthistorie, AAU</li>
        <li>
          Suppleringsuddannelse : ”Interkulturel Kommunikation”, Wiens
          universitet
        </li>
        <li>Underviser på AAU</li>
        <li>Underviser på CBS</li>
        <li>Gymnasielærer på STX i 25 år</li>
        <li>Jobs i forskellige danske firmaer</li>
        <li>Udgiver af en række lærebøger og underviser på kurser</li>
      </ul>
    </Layout>
  </>
)
