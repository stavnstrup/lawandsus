import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

import YellowGirl from "../images/woman-in-yellow-shirt-writing-on-white-paper-3807755.jpg"
import LaptopGirl from "../images/photo-of-woman-sitting-on-floor-while-using-laptop-3813006.jpg"

export default () => (
  <>
    <Header />
    <h1>Ekstra meteriale</h1>

    <h2>Gul pige</h2>

    <img
      style={{
        width: "100vw",
      }}
      src={YellowGirl}
      alt="Studerende"
    />

    <h2>Pige med laptop</h2>
    <img
      style={{
        width: "100vw",
      }}
      src={LaptopGirl}
      alt="Studerende"
    />
  </>
)
