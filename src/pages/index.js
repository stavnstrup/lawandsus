import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import TaskList from '../components/tasklist'
import Task from '../components/task'
import '../styles/global.css'

import HeroImage from '../images/woman-in-yellow-shirt-writing-on-white-paper-3807755.jpg'

export default () => {
  return (
    <>
      <Header />
      <Layout>
        <div className="contentBanner">
          <p className="bannerTitle">
            Effektiv sprogundervisning i uhøjtidelige rammer
          </p>
          <p className="bannerTitle"></p>
          <p className="bannerDescr">Willkommen - Bienvenue</p>
        </div>

        {/*
      <img
        className="heroimage"
        style={{
          width: '100%',
        }}
        src={HeroImage}
        alt="Studerende"
      />
*/}

        <p>
          Lær tysk og fransk hos dygtige undervisere med en solid faglig og
          pædagogisk baggrund. Vi er erfarne gymnasielærere og kender
          udfordringerne for elever med forskellige forudsætninger for at lære
          sprog. Og så er vi uhøjtidelige og afslappede.
        </p>

        <p>
          Synes du, det at lære sprog på hold med mange deltagere på forskellige
          niveauer ikke giver det store udbytte, så er vores tilbud noget for
          dig. Vi lægger vægt på effektiv og relevant undervisning med
          individuelle forløb.
        </p>

        <TaskList>
          <Task>
            <h2>Gymnasiesprog</h2>
            <p>
              Skal du starte - eller går du allerede - på en gymnasial
              uddannelse med fransk eller tysk på fortsætterniveau, og synes du
              ikke, du har lært nok, kan du få et brush-up kursus hos os. Vi gør
              det sjovt at lære, og alle kan lære et fremmedsprog; det kræver
              blot vilje og lidt vovemod. Hos os vil du være i centrum, og vi
              kan føre dig frem til et niveau, hvor du kan komme videre med
              selvtillid og turde kommunikere uden frygt for at lave fejl.
            </p>
          </Task>

          <Task>
            <h2>Særlige behov</h2>
            <p>
              Har du særlige udfordringer, fx er ordblind, kan vi hjælpe dig med
              at lære og træne fransk eller tysk ud fra dine forudsætninger. Vi
              er vant til at håndtere den enkelte elevs forskellige
              læringsmåder, dvs. vi arbejder ud fra, hvordan du bedst lærer at
              forstå, tale og skrive fransk eller tysk.
            </p>
          </Task>

          <Task>
            <h2>Andre kursister</h2>

            <p>
              Hvis du som voksen allerede har lært lidt tysk eller fransk og
              gerne vil forbedre dine sprogkundskaber, skræddersyr vi et program
              til dig. Her vil din basisviden blive reaktiveret og suppleret, så
              du hurtigt bliver mere sikker og flydende på sproget. Vi tager
              udgangspunkt i et emne, der interesserer dig eller et område, du
              har brug for at kunne udtrykke dig på vha. emnespecifikke gloser
              og brugbare udtryk.
            </p>
          </Task>

          <Task>
            <h2>Sprog og kultur</h2>

            <p>
              At lære et sprog er også at lære kulturen at kende og de
              mennesker, der taler sproget: hvordan de lever og oplever verden,
              deres omgangsformer, vaner og værdier. Det kan være mad- og
              drikkevaner, hvordan man er sammen med familie og venner, og
              hvordan man ellers begår sig i samfundet. Humor kan være meget
              forskellig, og sådan er der mange andre ting, der adskiller
              kulturer. Kulturen omhandler desuden kunst og litteratur i bred
              forstand.
            </p>

            <p>
              Når der bliver lukket op til de forskellige aspekter af kulturen,
              bliver det nemmere og sjovere at kommunikere med hinanden på tværs
              af landene. Lære noget af hinanden ved at få udvidet sine
              horisonter. Hos os kan du få et kursus, der giver dig en større
              kulturforståelse gennem sproget.
            </p>
          </Task>
        </TaskList>
      </Layout>
    </>
  )
}
