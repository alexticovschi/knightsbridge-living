import React from "react"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import "./apartmentHeroSlider.scss"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ApartmentHeroSlider = ({ apartment, buildingName }) => {
  const {
    images,
    slug,
    name,
    nameSlugified,
    id,
    numberOfBeds,
    furnished,
    squareMeters,
    price,
  } = apartment

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
    <section className="section-apartment-hero-slider">
      <div className="apartment-hero-slider grid-container-no-padding">
        <div className="apartment-hero-slider__wrapper">
          <div className="apartment-hero-slider__body">
            <div className="apartment-hero-slider__breadcrumbs">
              Knigthsbridge Living <span>|</span> {name}
            </div>
            <h3 className="apartment-hero-slider__name">{name}</h3>
            <div className="apartment-hero-slider__info">
              {numberOfBeds} {numberOfBeds > 1 ? "Beds" : "Bed"}
              &nbsp;|&nbsp;
              {furnished ? "Furnished" : "Unfurnished"}&nbsp;|&nbsp;
              {squareMeters} sqm
            </div>
            <p className="apartment-hero-slider__offer">
              EXCLUSIVE OFFER: Move in by 31 December and get 2 months
              rent-free! This high spec {numberOfBeds}{" "}
              {numberOfBeds > 1 ? "bedrooms" : "bedroom"} apartment is on the
              4th floor of this brand new building, {buildingName}. It faces
              North with a private balcony overlooking Hyde Park.
            </p>

            <div className="apartment-hero-slider__price">
              &pound;{price}/mth
            </div>

            <div className="apartment-hero-slider__buttons">
              <Link
                to={`apartments/${slug}/${nameSlugified}`}
                className="apartment-hero-slider__btn apartment-hero-slider__cta-first"
              >
                Enquire
              </Link>
              <Link
                to={`apartments/${slug}/${nameSlugified}`}
                className="apartment-hero-slider__btn apartment-hero-slider__cta-second"
              >
                Book A Viewing
              </Link>
              <Link
                to={`/buildings/${slug}`}
                className="apartment-hero-slider__btn apartment-hero-slider__cta-last"
              >
                Reserve Your Apartment
              </Link>
            </div>
          </div>
          <Swiper className="apartment-hero-slider__slider" {...params}>
            {images.map(img => (
              <div
                key={id + Math.random() * 101}
                className="apartment-hero-slider__slider-img-wrapper"
              >
                <Image
                  fluid={img.fluid}
                  className="apartment-hero-slider__slider-img"
                  alt="slider image"
                />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ApartmentHeroSlider
