import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import BuildingSlider from "../components/BuildingSlider/BuildingSlider"
import Apartments from "../components/Apartments/Apartments"

const BuildingTemplate = ({ data }) => {
  return (
    <Layout>
      <BuildingSlider building={data.building} />
      <Apartments apartments={data.apartments} slug={data.building.slug} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    building: contentfulBuilding(slug: { eq: $slug }) {
      title
      slug
      description {
        id
        internal {
          content
        }
      }
      images {
        id
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyContentfulFluid
        }
      }
    }
    apartments: allContentfulApartment(filter: { slug: { eq: $slug } }) {
      edges {
        node {
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

export default BuildingTemplate
