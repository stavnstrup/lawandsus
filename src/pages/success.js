import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

export default () => (
  <>
    <SEO title="Tak for din tilmelding" />
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
