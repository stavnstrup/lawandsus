import React from 'react'
import Header from '../components/header2'
import Layout from '../components/layout'
import '../styles/global.css'

export default () => (
  <>
    <Header />
    <Layout>
      <h1>Om os</h1>

      <p>
        Vi er erfarne sproglærere med en masse i bagagen, både hvad angår
        uddannelse og praksis.
      </p>

      <div className="teacherBox">
        <div className="teatherPortrait">
          <img
            className="portrait"
            src="https://via.placeholder.com/250x250"
            alt="Lisbeth Woll"
          />
        </div>

        <div className="teacherInfo">
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
        </div>
      </div>

      <div className="teacherBox">
        <div className="teatćherPortrait">
          <img
            className="portrait"
            src="https://via.placeholder.com/250x250"
            alt="Susanne Vestergaard"
          />
        </div>
        <div className="teacherInfo">
          <h2>Susanne Vestergaard</h2>

          <ul>
            <li>Magister i Germansk Filologi, Freie Universität Berlin</li>
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
        </div>
      </div>
    </Layout>
  </>
)
