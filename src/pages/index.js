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

      <h1>Fransk og tysk i hyggelige rammer</h1>
      <p>
        Lær fransk og tysk hos dygtige undervisere med en solid faglig og
        pædagogisk baggrund. Vi er erfarne gymnasielærere og kender
        udfordringerne for elever med forskellige forudsætninger for at lære
        sprog. Og så er vi uhøjtidelige og afslappede.
      </p>

      <h2>Gymnasiesprog</h2>
      <p>
        Skal du starte - eller går du allerede - på en gymnasial uddannelse med
        fransk eller tysk på fortsætterniveau, og synes du ikke du har lært nok,
        kan du få et brush-up kursus hos os. Vi gør det sjovt at lære, og alle
        kan lære et fremmedsprog; det kræver blot vilje og lidt vovemod. Hos os
        vil du være i centrum, og vi kan føre dig frem til et niveau, hvor du
        kan komme videre med god selvtillid og turde kommunikere uden frygt for
        at lave fejl!
      </p>

      <h2>Ordblind eller særlige udfordringer</h2>
      <p>
        Har du faglige udfordringer, fx er ordblind, kan vi hjælpe dig med at
        lære og træne fransk eller tysk ud fra dine forudsætninger. Vi er vant
        til at håndtere den enkelte elevs forskellige læringsmåder, dvs. vi
        arbejder ud fra, hvordan du bedst lærer at forstå, tale og skrive fransk
        eller tysk.
      </p>

      <h2>Sprog og kultur</h2>

      <p>
        At lære et sprog er også at lære kulturen at kende og de mennesker, der
        taler sproget: hvordan de lever og oplever verden, deres omgangsformer,
        vaner og værdier. Det kan være mad- og drikkevaner, hvordan man er
        sammen med familie og venner, og hvordan man ellers begår sig i
        samfundet. Humor kan være meget forskellig, og sådan er der mange andre
        ting, der adskiller kulturer.
      </p>

      <p>
        Når der bliver lukket op til de forskellige aspekter af kulturen, bliver
        det nemmere og sjovere at kommunikere med hinanden på tværs af landene.
        Lære noget af hinanden ved at få udvidet sine horisonter. Hos os kan du
        få et kursus, der giver dig en større kulturforståelse gennem sproget.
      </p>
    </Layout>
  )
}
