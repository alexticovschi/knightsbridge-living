import React from "react"
import Title from "../Title/Title"
import TeamCard from "./TeamCard/TeamCard"
import { useStaticQuery, graphql } from "gatsby"

import "./theTeam.scss"

const getTeamImages = graphql`
  query teamImages {
    img1: file(relativePath: { eq: "team/leasing-team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "team/resident-team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "team/concierge.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "team/events-team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "team/hub-team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const TheTeam = () => {
  const images = useStaticQuery(getTeamImages)
  const { img1, img2, img3, img4, img5 } = images

  return (
    <section className="section-the-team mt-5">
      <Title title="Knightsbridge Living Team" />
      <div className="grid-container">
        <p className="section-the-team__subtitle ">
          Our team’s experience spans across a wide range of industries,
          allowing us to bring a fresh and unique approach into the property
          sector. We are Knightsbridge Living and we are proud to be different.
        </p>
      </div>
      <div className="grid-container">
        <div className="the-team">
          <TeamCard image={img1} title="Knightsbridge Living Leasing Team" />
          <TeamCard image={img2} title="Knightsbridge Living Resident Team" />
          <TeamCard image={img3} title="Knightsbridge Living Concierge Team" />
          <TeamCard image={img4} title="Knightsbridge Living Events Team" />
          <TeamCard image={img5} title="Knightsbridge Living Hub Team" />
        </div>
      </div>
    </section>
  )
}

export default TheTeam
