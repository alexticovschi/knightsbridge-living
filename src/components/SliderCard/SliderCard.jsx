import React from "react"
import Image from "gatsby-image"

import "./sliderCard.scss"

const SliderCard = ({ review }) => {
  const {
    label,
    title,
    image,
    id,
    content: { content },
  } = review
  return (
    <div className="slider-card" key={id}>
      <figure className="slider-card__img-wrapper">
        <Image fluid={image.fluid} className="slider-card__img" />
        <div className="slider-card__badge-wrapper">
          <span className="slider-card__badge">{label}</span>
        </div>
      </figure>
      <div className="slider-card__data">
        <h3 className="slider-card__title">{title}</h3>
        <p className="slider-card__review">{content}</p>
      </div>
    </div>
  )
}

export default SliderCard
