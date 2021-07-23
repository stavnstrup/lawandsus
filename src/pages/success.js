import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Footer from '../components/footer'

const Sucess = () => (
  <>
    <Seo title="Tak for din tilmelding" />
    <Header />
    <Layout>
      <p>
        Tak for din tilmelding. Du vil få en mail med et forslag til
        undervisningen hurtigst muligt.
      </p>
    </Layout>
    <Footer />
  </>
)

export default Sucess;
