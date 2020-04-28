import React from "react"
import Layout from "../components/layout"

import HeroImage from "../images/writing-person-student-education-students-learning-multicultural-language-school-743887.jpg"

export default () => {
  return (
    <Layout>
      <h1>BIENVENUE - WILLKOMMEN</h1>

      <img
        style={{
          width: "750px",
        }}
        src={HeroImage}
        alt="Studerende"
      />

      <h2>Fransk og tysk i hyggelige rammer</h2>
      <p>
        Lær fransk og tysk hos dygtige undervisere med en solid faglig og
        pædagogisk baggrund. Vi er gamle gymnasielærere og kender udfordringerne
        for elever med forskellige forudsætninger for at lære sprog. Og så er vi
        uhøjtidelige og afslappede.
      </p>

      <h2>1. Gymnasiesprog</h2>
      <p>
        Skal du starte - eller går du allerede - på en gymnasial uddannelse med
        fransk eller tysk på fortsætterniveau, og synes du ikke du har lært nok,
        kan du få et brush-up kursus hos os. Vi gør det sjovt at lære, for alle
        kan lære et fremmedsprog; det kræver blot vilje og lidt vovemod. Hos os
        vil du være i centrum, og vi kan føre dig frem til et niveau, hvor du
        kan gå videre med tilstrækkelig selvtillid til at turde kommunikere uden
        frygt for at lave fejl!
      </p>

      <h2>2. Ordblind eller særlige udfordringer</h2>
      <p>
        Har du faglige udfordringer, fx er ordblind, kan vi hjælpe dig med at
        lære og træne fransk eller tysk ud fra dine forudsætninger. Vi er vant
        til at håndtere den enkelte elevs forskellige læringsmåder, dvs. vi ser
        på, hvordan DU bedst lærer at forstå, tale og skrive fransk eller tysk.
      </p>

      <h2>3. Sprog og kultur</h2>
      <p>
        {" "}
        At kende et sprog er også at kende kulturen, dvs. de mennesker, der
        taler sproget: hvordan de lever og oplever verden. Sproget er nøglen til
        at forstå de lokales omgangsformer, normer og værdier. Der er forskel på
        landes kulturer.
      </p>

      <p>
        Hvorfor og hvordan kender franske og tyske elever den historie, deres
        forældre og bedsteforældre lærte, mens danske skoler har mere fokus på
        nutiden? Hvorfor er franske og tyske folk så høflige, mens vi danske er
        mere ligefremme og uformelle?
      </p>

      <p>
        Når man kobler sprog og kultur, lærer man hvordan mennesker tænker og
        føler i andre lande, og så bliver det nemmere og sjovere at kommunikere
        med hinanden i vores globale verden. Og faktisk også lære noget af
        hinanden! Du kan hos os få et kursus, der giver dig en fin sproglig
        kulturforståelse.
      </p>
    </Layout>
  )
}
