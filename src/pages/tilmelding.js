import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import KursusForm from '../components/kursusform'

export default () => (
  <>
    <Header />
    <Layout>
      <h1>Tilmelding</h1>
      <KursusForm />
    </Layout>
  </>
)
