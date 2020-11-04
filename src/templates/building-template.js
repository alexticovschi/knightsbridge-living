import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import BuildingSlider from "../components/BuildingSlider/BuildingSlider"

const BuildingTemplate = ({ data }) => {
  return (
    <Layout>
      <BuildingSlider building={data.building} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    building: contentfulBuilding(slug: { eq: $slug }) {
      title
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
  }
`

export default BuildingTemplate
