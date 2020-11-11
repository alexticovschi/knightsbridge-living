import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./exploreBuildingCard.scss"

const ExploreBuildingCard = ({ building }) => {
  const { title, intro, slug, images } = building
  const apartmentImage = images[0]

  return (
    <Link to={`/buildings/${slug}`} className="explore-building-card">
      <figure className="explore-building-card__img-wrapper">
        <Image
          fluid={apartmentImage.fluid}
          className="explore-building-card__img"
          alt="building card"
        />
        <div className="explore-building-card__overlay">
          <h3 className="explore-building-card__name">{title}</h3>
          <div className="explore-building-card__intro-container">
            <p className="explore-building-card__intro">{intro}</p>
          </div>
        </div>
      </figure>
    </Link>
  )
}

export default ExploreBuildingCard
