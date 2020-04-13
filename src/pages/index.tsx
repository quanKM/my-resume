import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Home/Hero'
import AboutMe from '../components/Home/AboutMe'
import Skill from '../components/Home/Skill'
import Resume from '../components/Home/Resume'
import Footer from '../components/Home/Footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Khong Minh Quan's Resume"></SEO>
    <Hero />
    <AboutMe />
    <Skill />
    <Resume />
    <Footer />
  </Layout>
)

export default IndexPage
