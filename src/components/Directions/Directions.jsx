import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./directions.scss"

const getMapImage = graphql`
  query map {
    map: file(relativePath: { eq: "map.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Directions = () => {
  const image = useStaticQuery(getMapImage)
  return (
    <section className="section-directions mt">
      <div className="grid-container">
        <div className="directions">
          <Image
            fluid={image.map.childImageSharp.fluid}
            className="directions__img"
            alt="map"
          />
          <div className="directions__info">
            <h2 className="directions__info-title">Getting here</h2>
            <p className="directions__info-content">
              Bordering vast Hyde Park, Knightsbridge is an upscale area with
              grand Victorian homes and leafy garden squares. Tourists and
              well-to-do international residents mingle in high-end restaurants
              and shops, including the iconic Harrods department store. The
              Victoria and Albert Museum showcases decorative arts and has
              blockbuster exhibitions, while the Italianate London Oratory
              church hosts organ recitals.
            </p>
            <div className="directions__info-address">
              <p>Sloane St, Knightsbridge</p>
              <p>London SW1X 9LA</p>
            </div>
            <a
              className="directions__link"
              href="https://www.google.com/maps/place/Knightsbridge+Station/@51.4955481,-0.1646154,16z/data=!4m22!1m16!4m15!1m6!1m2!1s0x48760b5aa14cbde7:0xc1935f9c24752a59!2s82+Gloucester+Road,+Hampton+TW12+2UJ,+UK!2m2!1d-0.3634827!2d51.4209021!1m6!1m2!1s0x487605472c727749:0xc6e00ce34470009c!2sKnightsbridge,+London!2m2!1d-0.1644394!2d51.4991195!3e3!3m4!1s0x4876053909bfa367:0x3fb0a87b22095338!8m2!3d51.5015326!4d-0.1605383"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Directions
