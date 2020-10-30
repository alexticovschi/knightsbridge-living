import React from "react"
import Layout from "../components/Layout/Layout"
import BuildingsList from "../components/BuildingsList/BuildingsList"
import FindIdealHome from "../components/FindIdealHome/FindIdealHome"
import BuildingsStyledHero from "../components/BuildingsStyledHero"

import { graphql } from "gatsby"

export const query = graphql`
  query {
    buildingsHeroImage: file(relativePath: { eq: "buildings-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Buildings = ({ data }) => {
  return (
    <Layout>
      <BuildingsStyledHero
        home="true"
        opacity="true"
        img={data.buildingsHeroImage.childImageSharp.fluid}
      ></BuildingsStyledHero>
      <BuildingsList />
      <FindIdealHome />
    </Layout>
  )
}

export default Buildings
