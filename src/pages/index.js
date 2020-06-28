import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo.js'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'
import CardGroup from '../components/cardgroup'
import Card from '../components/card'
import CardHeader from '../components/cardheader'
import CardBody from '../components/cardbody'
import StyledBackgroundSection from '../components/heroimage'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

export default ({ data }) => {
  return (
    <>
      <SEO
        title="Sproglærerne"
        description="Få effektiv sprogundervisning i tysk og fransk hos dygtige undervisere. Vi udbyder sprogkurser for elever på gymnasiale uddannelser, elever med særlige udfordringer, fx ordblinde og voksne kursister, der ønsker at forbedre deres sprogkundskaber med et brush-up kursus."
      />
      <Header />
      <StyledBackgroundSection />
      <Layout>
        <p>
          Lær tysk og fransk hos dygtige undervisere med en solid faglig og
          pædagogisk baggrund. Vi er erfarne gymnasielærere, der kender
          udfordringerne for elever med forskellige forudsætninger for at lære
          sprog, og vi er på forkant med de nyeste metoder inden for
          fremmedsprogsundervisning.
        </p>

        <p>
          Vores undervisning er tilpasset den enkelte elevs behov med
          individuelle forløb. Vi er effektive, men uhøjtidelige.
        </p>

        <CardGroup>
          <Card>
            <Img fixed={data.bored.childImageSharp.fixed} />
            <CardHeader header="Gymnasiesprog" />
            <CardBody>
              <p>
                Skal du starte - eller går du allerede - på en gymnasial
                uddannelse med fransk eller tysk på fortsætterniveau, og synes
                du ikke, du har lært nok, kan du få et brush-up kursus hos os.
                Vi gør det sjovt at lære, og alle kan lære et fremmedsprog; det
                kræver primært vilje og gå-på-mod. Med fokus på dine behov kan
                vi føre dig frem til et niveau, hvor du kan komme videre med
                selvtillid og turde kommunikere uden frygt for at lave fejl.
              </p>
            </CardBody>
          </Card>

          <Card>
            <Img fixed={data.frustrated.childImageSharp.fixed} />
            <CardHeader header="Særlige behov" />
            <CardBody>
              <p>
                Har du særlige udfordringer, fx er ordblind, kan vi hjælpe dig
                med at lære og træne fransk eller tysk ud fra dine
                forudsætninger. Vi er vant til at håndtere den enkelte elevs
                forskellige læringsmåder, dvs. vi arbejder ud fra, hvordan du
                bedst lærer at forstå, tale og skrive fransk eller tysk.
              </p>
            </CardBody>
          </Card>

          <Card>
            <Img fixed={data.adult.childImageSharp.fixed} />
            <CardHeader header="Andre kursister" />
            <CardBody>
              <p>
                Hvis du som voksen allerede har lært lidt tysk eller fransk og
                gerne vil forbedre dine sprogkundskaber, skræddersyr vi et
                program til dig. Her vil din basisviden blive reaktiveret og
                suppleret, så du hurtigt bliver mere sikker og flydende på
                sproget. Vi tager udgangspunkt i et emne, der interesserer dig
                eller et område, du har brug for at kunne udtrykke dig på vha.
                emnespecifikke gloser og brugbare udtryk.
              </p>
            </CardBody>
          </Card>

          <Card>
            <Img fixed={data.culture.childImageSharp.fixed} />
            <CardHeader header="Sprog og kultur" />

            <CardBody>
              <p>
                At lære et sprog er også at lære kulturen at kende og de
                mennesker, der taler sproget: hvordan de lever og oplever
                verden, deres omgangsformer, vaner og værdier. Det kan være mad-
                og drikkevaner, hvordan man er sammen med familie og venner, og
                hvordan man ellers begår sig i samfundet. Kulturen omhandler
                desuden kunst og historie i bred forstand. Når der bliver lukket
                op til de forskellige aspekter af kulturen, bliver det nemmere
                og sjovere at kommunikere med hinanden på tværs af landene. Lære
                noget af hinanden ved at få udvidet sine horisonter.
              </p>

              <p>
                Hos os kan du få et kursus, der giver dig en større
                kulturforståelse gennem sproget.
              </p>
            </CardBody>
          </Card>
        </CardGroup>
      </Layout>
      <Footer />
    </>
  )
}
// 284x189 18em, previous version was 256x171 16em

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 284, height: 189) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    bored: file(relativePath: { eq: "bored.jpg" }) {
      ...fixedImage
    }
    frustrated: file(relativePath: { eq: "frustrated.jpg" }) {
      ...fixedImage
    }
    adult: file(relativePath: { eq: "adult.jpg" }) {
      ...fixedImage
    }
    culture: file(relativePath: { eq: "culture-food.jpg" }) {
      ...fixedImage
    }
  }
`
