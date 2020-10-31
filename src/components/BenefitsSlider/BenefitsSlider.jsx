import React from "react"
import Slider from "./Slider/Slider"
import { Link } from "gatsby"
import "./benefitsSlider.scss"

const BenefitsSlider = () => {
  return (
    <section className="section-benefits-slider grid-container mt">
      <h2 className="section-benefits-slider__title">
        Knightsbridge Living <span>Benefits</span>
      </h2>
      <div className="benefits-slider">
        <Slider />
      </div>
      <Link
        to="/benefits"
        className="btn-primary section-benefits-slider__btn-primary"
      >
        Learn more
      </Link>
    </section>
  )
}

export default BenefitsSlider
