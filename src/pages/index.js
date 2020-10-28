import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import Benefits from "../components/Benefits/Benefits"
import Buildings from "../components/Buildings/Buildings"
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
              to="/knightsbridge"
              className="btn-primary banner__btn-primary"
            >
              Discover
            </Link>
            <Link to="/buildings" className="btn-white">
              View Buildings
            </Link>
          </Banner>
        </StyledHero>
        <Benefits />
        <Buildings />
        <StyledHero
          marginTop="true"
          opacity="true"
          img={data.homeHeroImage2.childImageSharp.fluid}
        >
          <Banner
            className="banner"
            titleFirst="Rent your home"
            titleSecond="in Knightsbridge"
            info="From stylish gardens to roof terraces and gyms, we’ve created social spaces for residents to enjoy."
          >
            <Link to="/" className="btn-primary banner__btn-primary">
              Find a Home
            </Link>
            <Link to="/" className="btn-white">
              Book a Viewing
            </Link>
          </Banner>
        </StyledHero>
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
    homeHeroImage2: file(relativePath: { eq: "hero2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default HomePage
