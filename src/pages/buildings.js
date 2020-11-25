import React from "react"
import Layout from "../components/Layout/Layout"
import BuildingsStyledHero from "../components/BuildingsStyledHero"
import BuildingsList from "../components/BuildingsList/BuildingsList"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import BenefitsSlider from "../components/BenefitsSlider/BenefitsSlider"
import FindIdealHome from "../components/FindIdealHome/FindIdealHome"
import TransportAndConnections from "../components/TransportAndConnections/TransportAndConnections"
import Directions from "../components/Directions/Directions"
import { Link } from "gatsby"
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
    homeHeroImage2: file(relativePath: { eq: "hero2.jpg" }) {
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
        buildings="true"
        opacity="true"
        img={data.buildingsHeroImage.childImageSharp.fluid}
      ></BuildingsStyledHero>
      <BuildingsList />
      <FindIdealHome />
      <StyledHero
        marginTop="true"
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
          <Link to="/" className="btn-white">
            Request a call back
          </Link>
        </Banner>
      </StyledHero>
      <BenefitsSlider />
      <TransportAndConnections />
      <Directions />
    </Layout>
  )
}

export default Buildings
