import React from "react"
import Layout from "../components/Layout/Layout"
import AvailableApartments from "../components/AvailableApartments/AvailableApartments"
import BenefitsSlider from "../components/BenefitsSlider/BenefitsSlider"
import ExploreBuildings from "../components/ExploreBuildings/ExploreBuildings"

import { graphql } from "gatsby"

const Apartments = ({ data }) => {
  return (
    <main>
      <Layout>
        <AvailableApartments apartments={data.apartments} />
        <BenefitsSlider />
        <ExploreBuildings
          buildings={data.exploreBuildings.edges}
          title="Explore our Knightsbridge Living buildings"
        />
      </Layout>
    </main>
  )
}

export const query = graphql`
  query {
    apartments: allContentfulApartment {
      edges {
        node {
          id
          name
          numberOfBeds
          squareMeters
          slug
          furnished
          price
          images {
            fluid(quality: 90, maxWidth: 540) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    exploreBuildings: allContentfulBuilding {
      edges {
        node {
          id
          intro
          title
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Apartments
