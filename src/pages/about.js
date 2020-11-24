import React from "react"
import Layout from "../components/Layout/Layout"
import AboutStyledHero from "../components/AboutStyledHero"
import AboutBanner from "../components/AboutBanner/AboutBanner"
import TheStory from "../components/TheStory/TheStory"
import TheTeam from "../components/TheTeam/TheTeam"

import { graphql } from "gatsby"

export const query = graphql`
  query {
    aboutHeroImage: file(relativePath: { eq: "london.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = ({ data }) => {
  return (
    <Layout>
      <AboutStyledHero
        opacity="true"
        img={data.aboutHeroImage.childImageSharp.fluid}
      >
        <AboutBanner />
      </AboutStyledHero>
      <TheStory />
      <TheTeam />
    </Layout>
  )
}

export default About
