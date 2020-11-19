import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import LifeInKnightsbridge from "../components/LifeInKnightsbridge/LifeInKnightsbridge"
import HealthAndCommunity from "../components/HealthAndCommunity/HealthAndCommunity"
import LifeStyle from "../components/LifeStyle/LifeStyle"
import TransportAndConnections from "../components/TransportAndConnections/TransportAndConnections"
import Directions from "../components/Directions/Directions"
import ThreeApartments from "../components/ThreeApartments/ThreeApartments"

import { Link } from "gatsby"
import { graphql } from "gatsby"

const Knightsbridge = ({ data }) => {
  return (
    <Layout>
      <StyledHero
        home="true"
        opacity="true"
        img={data.homeHeroImage.childImageSharp.fluid}
      >
        <Banner
          className="banner"
          titleFirst="Explore how life is like in Knightsbridge"
        >
          <Link to="/apartments" className="btn-primary banner__btn-primary">
            Our Apartments
          </Link>
          <Link to="/buildings" className="btn-white">
            View Buildings
          </Link>
        </Banner>
      </StyledHero>
      <LifeInKnightsbridge
        bigBadge="Eat & Drink"
        smallBadge="Shopping"
        headerFirstTitle="Food Heaven."
        headerSecondTitle="Overindulged for
                Choice"
        headerText="Explore places where you can eat and drink, with the latest Food
                Markek featuring 10+ global street food traders. Renowned bakery
                Cavan from Knightsbridge Market with its all-day restaurant and
                bakery school, artisan pasta specialists La Casa Mia and the
                Designer Outlet’s 15+ restaurants from Wagamama, Zizzi, Nandos
                and more."
        eatDrink={data.eatDrink.childImageSharp.fluid}
        outlet={data.outlet.childImageSharp.fluid}
        market={data.market.childImageSharp.fluid}
        shopping={data.shoppingFood.childImageSharp.fluid}
      />
      <LifeStyle data={data.lifeStyle.edges} />
      <HealthAndCommunity
        health={data.yoga.childImageSharp.fluid}
        opera={data.opera.childImageSharp.fluid}
        green={data.green.childImageSharp.fluid}
        entertainment={data.entertainment.childImageSharp.fluid}
      />
      <TransportAndConnections title="London Underground Journey Times" />
      <Directions />
      <ThreeApartments apartments={data.apartments} />
    </Layout>
  )
}

export const query = graphql`
  query {
    apartments: allContentfulApartment(limit: 3) {
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
    lifeStyle: allContentfulLifeStyle {
      edges {
        node {
          id
          label
          title
          content {
            content
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    homeHeroImage: file(relativePath: { eq: "hero2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eatDrink: file(relativePath: { eq: "eat-drink.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    market: file(relativePath: { eq: "market.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    outlet: file(relativePath: { eq: "outlet.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    shoppingFood: file(relativePath: { eq: "shopping-food.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    yoga: file(relativePath: { eq: "yoga-big.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    opera: file(relativePath: { eq: "opera.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    green: file(relativePath: { eq: "thegreen.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    entertainment: file(relativePath: { eq: "entertainment.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Knightsbridge
