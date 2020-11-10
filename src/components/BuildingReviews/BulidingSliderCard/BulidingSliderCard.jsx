import React from "react"
import quote from "../../../images/svg/quote.svg"

import "./buildingSliderCard.scss"

const BuildingSliderCard = ({ review, buildingName }) => {
  const {
    title,
    id,
    content: {
      internal: { content },
    },
  } = review

  return (
    <div className="building-slider-card" key={id}>
      <figure className="building-slider-card__img-wrapper">
        <img
          className="building-slider-card__img"
          src={quote}
          alt="review icon"
        />
        <div className="building-slider-card__badge-wrapper">
          <span className="building-slider-card__badge">
            Living in {buildingName}
          </span>
        </div>
      </figure>
      <div className="building-slider-card__data">
        <h3 className="building-slider-card__title">{title}</h3>
        <p className="building-slider-card__review">{content}</p>
      </div>
    </div>
  )
}

export default BuildingSliderCard
