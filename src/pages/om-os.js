import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo.js'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'
import '../styles/global.css'

export default ({ data }) => (
  <>
    <SEO
      title="Om sproglærerne"
      description="Vi er erfarne sproglærere med akademiske uddannelser og stor erfaring fra gymnasiet og erhvervslivet."
    />
    <Header />
    <Layout>
      <h1>Om os</h1>

      <p>
        Vi er erfarne sproglærere med en masse i bagagen, både hvad angår
        uddannelse og praksis.
      </p>

      <div className="teacherBox">
        <div className="teatherPortrait">
          <Img fixed={data.lisbeth.childImageSharp.fixed} />
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
        <div className="teatherPortrait">
          <Img fixed={data.susanne.childImageSharp.fixed} />
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
    <Footer />
  </>
)

export const fixedImage = graphql`
  fragment photoImage on File {
    childImageSharp {
      fixed(width: 250, height: 250) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    lisbeth: file(relativePath: { eq: "lisbeth.jpg" }) {
      ...photoImage
    }
    susanne: file(relativePath: { eq: "susanne_vestergaard_428x640.jpg" }) {
      ...photoImage
    }
  }
`
