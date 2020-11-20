import React from "react"
import Layout from "../components/Layout/Layout"
import ApartmentHeroSlider from "../components/ApartmentHeroSlider/ApartmentHeroSlider"
import SubBanner from "../components/SubBanner/SubBanner"

const ApartmentTemplate = ({ data }) => {
  return (
    <Layout>
      <ApartmentHeroSlider
        apartment={data.apartment}
        buildingName={data.building.title}
      />
      <SubBanner />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $nameSlugified: String!) {
    building: contentfulBuilding(slug: { eq: $slug }) {
      title
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

export default ApartmentTemplate
