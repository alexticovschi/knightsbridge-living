import React from "react"
import Layout from "../components/Layout/Layout"
import ApartmentHeroSlider from "../components/ApartmentHeroSlider/ApartmentHeroSlider"
import SubBanner from "../components/SubBanner/SubBanner"
import FloorPlan from "../components/FloorPlan/FloorPlan"
import BuildingApartmentFeatures from "../components/BuildingApartmentFeatures/BuildingApartmentFeatures"
import TransportAndConnections from "../components/TransportAndConnections/TransportAndConnections"
import ThreeApartmentsNoBg from "../components/ThreeApartmentsNoBg/ThreeApartmentsNoBg"

const ApartmentTemplate = ({ data }) => {
  return (
    <Layout>
      <ApartmentHeroSlider
        apartment={data.apartment}
        buildingName={data.building.title}
      />
      <SubBanner />
      <FloorPlan floorPlanImage={data.building.floorPlanImage} />
      <BuildingApartmentFeatures
        features={data.building.features}
        images={data.building.featureImages}
        buildingName={data.building.title}
      />
      <TransportAndConnections title="Transport & Connections" />
      <ThreeApartmentsNoBg apartments={data.apartments} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $nameSlugified: String!) {
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
      features {
        id
        feature
      }
      featureImages {
        id
        fluid(quality: 90, maxWidth: 740) {
          ...GatsbyContentfulFluid
        }
      }
      floorPlanImage {
        fluid(quality: 90, maxWidth: 640) {
          ...GatsbyContentfulFluid
        }
      }
    }
    apartment: contentfulApartment(nameSlugified: { eq: $nameSlugified }) {
      id
      name
      nameSlugified
      numberOfBeds
      squareMeters
      slug
      furnished
      price
      images {
        fluid(quality: 90, maxWidth: 2940) {
          ...GatsbyContentfulFluid
        }
      }
    }
    apartments: allContentfulApartment(limit: 3) {
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
  }
`

export default ApartmentTemplate
