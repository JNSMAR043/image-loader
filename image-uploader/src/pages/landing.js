import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageDisplay from '../components/ImageDisplay';

const Landing = () => (
  <Layout>
    {/* Page to view Image display component */}
    <ImageDisplay />
    <SEO title="landing" />
  </Layout>
)

export default Landing;