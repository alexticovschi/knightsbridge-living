import React from "react"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import { Link } from "gatsby"
import Image from "gatsby-image"
import "./buildingSlider.scss"

const BuildingSlider = ({ building }) => {
  const { title, description, images } = building
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
    effect: "fade",
    autoplay: {
      delay: 10000,
    },
    speed: 2000,
  }

  return (
    <div className="swiper-slide">
      <Swiper {...params}>
        {Object.values(images).map((img, i) => (
          <div className="grid-container-no-padding" key={img.id}>
            <figure className="swiper-slide__img-wrapper">
              <Image
                key={img.id}
                fluid={img.fluid}
                className="swiper-slide__img"
                alt="slider image"
              />
            </figure>
            <div className="swiper-slide__box">
              <h3 className="swiper-slide__title">
                {title}{" "}
                <span>{title !== "Carlyle Gardens" ? "Building" : ""}</span>
              </h3>
              <p className="swiper-slide__description">
                {description.internal.content}
              </p>
              <div className="swiper-slide__buttons">
                <Link
                  to="/knightsbridge"
                  className="swiper-slide__btn swiper-slide__cta-left"
                >
                  View Gallery
                </Link>
                <Link
                  to="/buildings"
                  className="swiper-slide__btn swiper-slide__cta-right"
                >
                  360 Virtual Tour
                </Link>
                <Link
                  to="/buildings"
                  className="swiper-slide__btn swiper-slide__cta-bottom"
                >
                  Guided Video Tour
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Swiper>
      <div className="grid-container">
        <div className="swiper-slide__box-mobile">
          <h3 className="swiper-slide__title">
            {title}
            <span>{title !== "Carlyle Gardens" ? "Building" : ""}</span>
          </h3>
          <p className="swiper-slide__description">
            {description.internal.content}
          </p>
          <div className="swiper-slide__buttons">
            <Link
              to="/knightsbridge"
              className="swiper-slide__btn swiper-slide__cta-left"
            >
              View Gallery
            </Link>
            <Link
              to="/buildings"
              className="swiper-slide__btn swiper-slide__cta-right"
            >
              360 Virtual Tour
            </Link>
            <Link
              to="/buildings"
              className="swiper-slide__btn swiper-slide__cta-bottom"
            >
              Guided Video Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildingSlider
