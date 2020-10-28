import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import Benefits from "../components/Benefits/Benefits"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const HomePage = ({ data }) => {
  return (
    <main>
      <Layout>
        <StyledHero
          home="true"
          opacity="true"
          img={data.homeHeroImage.childImageSharp.fluid}
        >
          <Banner
            className="banner"
            titleFirst="London's most exciting"
            titleSecond="new neighbourhood"
            info="London Knightsbridge is a place to relax and be entertained right on your door step - 10 minutes from Central London"
          >
            <Link
              fade
              to="/knightsbridge"
              className="btn-primary banner__btn-primary"
            >
              Discover
            </Link>
            <Link fade to="/buildings" className="btn-white">
              View Buildings
            </Link>
          </Banner>
        </StyledHero>
        <Benefits />
      </Layout>
    </main>
  )
}

export const query = graphql`
  query {
    homeHeroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default HomePage
