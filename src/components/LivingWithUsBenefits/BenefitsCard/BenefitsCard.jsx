import React from "react"
import "./benefitsCard.scss"

const BenefitsCard = ({ benefit }) => {
  const {
    id,
    title,
    icon,
    content: { content },
  } = benefit
  return (
    <div className="benefit-card__item" key={id}>
      <figure className="benefit-card__img-wrapper">
        <h2 className="benefit-card__title">{title}</h2>

        <img
          className="benefit-card__icon"
          src={icon.file.url}
          alt="benefit icon"
        />
      </figure>
      <p className="benefit-card__text">{content}</p>
    </div>
  )
}

export default BenefitsCard
