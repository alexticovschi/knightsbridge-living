import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./buildingCard.scss"

const BuildingCard = ({ building }) => {
  const { title, offer, longIntro, slug, image } = building
  console.log(longIntro)

  return (
    <Link to={`/${slug}`} className="building-card">
      <figure className="building-card__img-wrapper">
        <Image
          fluid={image.fluid}
          className="building-card__img"
          alt="building card"
        />
        <div className="building-card__overlay">
          <h3 className="building-card__name">{title}</h3>
          <div className="building-card__intro-container">
            <h2 className="building-card__offer-title">{offer}</h2>
            <p className="building-card__intro">
              {longIntro ? longIntro.internal.content : ""}
            </p>
            <strong className="building-card__link">Find out more</strong>
          </div>
        </div>
      </figure>
    </Link>
  )
}

export default BuildingCard
