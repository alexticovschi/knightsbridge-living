import React from "react"
import Image from "gatsby-image"
import "./teamCard.scss"

const TeamCard = ({ image, title }) => {
  return (
    <div className="team-card">
      <Image
        fluid={image.childImageSharp.fluid}
        className="team-card__img"
        alt="team card"
      />
      <h2 className="team-card__title">{title}</h2>
    </div>
  )
}

export default TeamCard
