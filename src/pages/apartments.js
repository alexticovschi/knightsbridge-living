import React from "react"
import Layout from "../components/Layout/Layout"
import AvailableApartments from "../components/AvailableApartments/AvailableApartments"
import BenefitsSlider from "../components/BenefitsSlider/BenefitsSlider"
import ExploreBuildings from "../components/ExploreBuildings/ExploreBuildings"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

const Apartments = ({ data }) => {
  return (
    <main>
      <Layout>
        <SEO
          title="Apartments in Knightsbridge Living"
          description="We’re Here To Answer Your Questions. Have a question? We would love to hear from you. Contact us and get your dream flat today. Get in touch by phone or email and our friendly Leasing team can help with any questions you have and arrange a type of viewing that suits you."
        />
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
          nameSlugified
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
