import React from "react"
import Image from "gatsby-image"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import "./buildingFeatures.scss"

const BuildingFeatures = ({ features, images, buildingName }) => {
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
    speed: 400,
  }
  return (
    <section className="section-features mt">
      <div className="grid-container">
        <h1 className="section-features__title ">
          <span className="section-features__building-name">
            {buildingName}
          </span>{" "}
          Features
        </h1>
      </div>
      <div className="grid-container">
        <div className="features">
          <div>
            <Swiper className="features__slider" {...params}>
              {Object.values(images).map(img => (
                <Image
                  key={img.id}
                  fluid={img.fluid}
                  className="features__slider-img"
                  alt="slider image"
                />
              ))}
            </Swiper>
          </div>
          <ul className="features__list">
            {features.map(ft => (
              <li key={ft.id}>{ft.feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BuildingFeatures
