import React from "react"
import Layout from "../components/Layout/Layout"
import AvailableApartments from "../components/AvailableApartments/AvailableApartments"
import BenefitsSlider from "../components/BenefitsSlider/BenefitsSlider"

import { graphql } from "gatsby"

const Apartments = ({ data }) => {
  return (
    <main>
      <Layout>
        <AvailableApartments apartments={data.apartments} />
        <BenefitsSlider />
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
  }
`

export default Apartments
