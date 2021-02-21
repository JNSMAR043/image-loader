import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Loading from '../components/loading';

const SecondPage = () => (
  <Layout>
    <Loading />
    <SEO title="Page two" />
  </Layout>
)

export default SecondPage
