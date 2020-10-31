import React from "react"
import Image from "gatsby-image"

import "./sliderCard.scss"

const SliderCard = ({ benefit }) => {
  const {
    id,
    title,
    icon,
    content: { content },
  } = benefit
  return (
    <div className="benefit-slider-card__item" key={id}>
      <figure className="benefit-slider-card__img-wrapper">
        <h2 className="benefit-slider-card__title">{title}</h2>

        <img
          className="benefit-slider-card__icon"
          src={icon.file.url}
          alt="bedroom icon"
        />
      </figure>
      <p className="benefit-slider-card__text">{content}</p>
    </div>
  )
}

export default SliderCard
