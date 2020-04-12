import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Home/Hero'
import AboutMe from '../components/Home/AboutMe'
import Skill from '../components/Home/Skill'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"></SEO>
    <Hero />
    <AboutMe />
    <Skill />
  </Layout>
)

export default IndexPage
