import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import BuildingSlider from "../components/BuildingSlider/BuildingSlider"
import Apartments from "../components/Apartments/Apartments"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import BuildingFeatures from "../components/BuildingFeatures/BuildingFeatures"
import TransportAndConnections from "../components/TransportAndConnections/TransportAndConnections"
import BuildingReviews from "../components/BuildingReviews/BuildingReviews"
import ExploreBuildings from "../components/ExploreBuildings/ExploreBuildings"
import { Link } from "gatsby"

const BuildingTemplate = ({ data }) => {
  return (
    <Layout>
      <BuildingSlider building={data.building} />
      <Apartments apartments={data.apartments} slug={data.building.slug} />
      <BuildingFeatures
        features={data.building.features}
        images={data.building.featureImages}
        buildingName={data.building.title}
      />
      <TransportAndConnections title="Transport & Connections" />
      <StyledHero
        opacity="true"
        img={data.homeHeroImage2.childImageSharp.fluid}
      >
        <Banner
          className="banner"
          titleFirst="Rent your ideal home"
          titleSecond="in Knightsbridge"
        >
          <Link to="/" className="btn-primary banner__btn-primary">
            Book a viewing
          </Link>
          <Link to="/apartments" className="btn-white">
            Find My Home
          </Link>
        </Banner>
      </StyledHero>
      <BuildingReviews
        reviews={data.reviews}
        buildingName={data.building.title}
      />
      <ExploreBuildings
        buildings={data.exploreBuildings.edges}
        title="Explore other Knightsbridge Living buildings"
      />
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
    }
    apartments: allContentfulApartment(filter: { slug: { eq: $slug } }) {
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
    homeHeroImage2: file(relativePath: { eq: "hero2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    reviews: allContentfulBuildingReview(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          content {
            id
            internal {
              content
            }
          }
        }
      }
    }
    exploreBuildings: allContentfulBuilding(
      filter: { slug: { ne: $slug } }
      limit: 4
    ) {
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

export default BuildingTemplate
