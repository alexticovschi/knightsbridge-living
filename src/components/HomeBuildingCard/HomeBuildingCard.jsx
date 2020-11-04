import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./homeBuildingCard.scss"

const HomeBuildingCard = ({ building }) => {
  const { title, intro, slug, image } = building

  return (
    <Link to={`/buildings/${slug}`} className="home-building-card">
      <figure className="home-building-card__img-wrapper">
        <Image
          fluid={image.fluid}
          className="home-building-card__img"
          alt="building card"
        />
        <div className="home-building-card__overlay">
          <h3 className="home-building-card__name">{title}</h3>
          <div className="home-building-card__intro-container">
            <p className="home-building-card__intro">{intro}</p>
            <strong className="home-building-card__link">Find out more</strong>
          </div>
        </div>
      </figure>
    </Link>
  )
}

export default HomeBuildingCard
