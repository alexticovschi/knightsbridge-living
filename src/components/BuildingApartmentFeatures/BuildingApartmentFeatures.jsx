import React from "react"
import Image from "gatsby-image"
import Swiper from "react-id-swiper"
import "./buildingApartmentFeatures.scss"

const BuildingApartmentFeatures = ({ features, images, buildingName }) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.ap",
      prevEl: ".swiper-button-prev.ap",
    },
    loop: true,
    effect: "fade",
    speed: 400,
  }
  return (
    <section className="section-building-features mt">
      <div className="building-features">
        <div className="grid-container"></div>
        <div className="grid-container">
          <div className="building-features__content">
            <div>
              <Swiper className="building-features__slider" {...params}>
                {Object.values(images).map(img => (
                  <Image
                    key={img.id}
                    fluid={img.fluid}
                    className="building-features__slider-img"
                    alt="slider image"
                  />
                ))}
              </Swiper>
            </div>
            <ul className="building-features__description-list">
              <h1 className="building-features__title ">
                <span className="building-features__building-name">
                  {buildingName}
                </span>{" "}
                Features
              </h1>
              {features.map(ft => (
                <li key={ft.id}>{ft.feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildingApartmentFeatures
