import React from "react"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import { Link } from "gatsby"
import Image from "gatsby-image"
import slugify from "slugify"

import "./apartmentCard.scss"

const ApartmentCard = ({ apartment }) => {
  const {
    name,
    price,
    squareMeters,
    images,
    slug,
    furnished,
    numberOfBeds,
  } = apartment

  const nameSlugified = slugify(name).toLowerCase()

  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    effect: "cubeEffect",
    speed: 500,
  }

  return (
    <div className="apartment-card">
      <Swiper className="apartment-card__slider" {...params}>
        {Object.values(images).map((img, i) => (
          <Link
            to={`/apartments/${slug}/${nameSlugified}`}
            key={i}
            className="apartment-card__slider-img-wrapper"
          >
            <Image
              fluid={img.fluid}
              className="apartment-card__slider-img"
              alt="slider image"
            />
          </Link>
        ))}
      </Swiper>
      <div className="apartment-card__body">
        <h3 className="apartment-card__name">{name}</h3>
        <div className="apartment-card__info">
          {numberOfBeds} {numberOfBeds > 1 ? "Beds" : "Bed"}
          &nbsp;|&nbsp;
          {furnished ? "Furnished" : "Unfurnished"}&nbsp;|&nbsp;
          {squareMeters} sqm
        </div>

        <div className="apartment-card__price">&pound;{price}/MTH</div>

        <div className="apartment-card__buttons">
          <Link
            to={`/buildings/${slug}`}
            className="apartment-card__btn apartment-card__cta-left"
          >
            Enquire
          </Link>
          <Link
            to={`/buildings/${slug}`}
            className="apartment-card__btn apartment-card__cta-right"
          >
            Book Viewing
          </Link>
          <Link
            to={`/buildings/${slug}`}
            className="apartment-card__btn apartment-card__cta-bottom"
          >
            Reserve Your Apartment
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApartmentCard
