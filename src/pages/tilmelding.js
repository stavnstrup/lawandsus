import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import KursusForm from '../components/kursusform'
import Footer from '../components/footer'

const Tilmelding = () => (
  <>
    {/* A little help for the Netlify post-processing bots

    <form name="contact" data-netlify="true" hidden>
      <input type="text" name="navn" />
      <input type="text" name="addresse" />
      <input type="text" name="postnummer" />
      <input type="text" name="by" />
      <input type="text" name="telefonnummer" />
      <input type="email" name="email" />
      <select name="sprog" />
      <textarea name="kundskaber"></textarea>
      <textarea name="emner"></textarea>
    </form>
     */}

    <Header />
    <Layout>
      <h1>Kontaktformular</h1>
      <KursusForm />
    </Layout>
    <Footer />
  </>
)

export default Tilmelding;
