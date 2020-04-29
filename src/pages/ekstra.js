import React from "react"
import Header from "../components/header"

import LaptopGirl from "../images/photo-of-woman-sitting-on-floor-while-using-laptop-3813006.jpg"
import FrustratedImage from "../images/pikrepo.com.jpg"
import BoredGirl from "../images/pikrepo.com-1.jpg"

export default () => (
  <>
    <Header />
    <h1>Ekstra materiale</h1>

    <p>
      Følgende billeder kan enten bruges som alternativ "Hero image" (det store
      billede på forsiden) eller i nedskaleret form på andre sider.
    </p>

    <h2>Pige med laptop</h2>
    <img
      style={{
        margin: "0",
        width: "100%",
      }}
      src={LaptopGirl}
      alt="Studerende"
    />

    <h2>Fustration</h2>
    <img
      style={{
        margin: "0",
        width: "100%",
      }}
      src={FrustratedImage}
      alt="Studerende"
    />

    <h2>Kedsomhed</h2>
    <img
      style={{
        margin: "0",
        width: "100%",
      }}
      src={BoredGirl}
      alt="Studerende"
    />
  </>
)
