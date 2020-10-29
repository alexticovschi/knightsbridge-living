import React from "react"
import Slider from "../Slider/Slider"
import "./reviews.scss"

const Reviews = () => {
  return (
    <section className="section-reviews">
      <div className="grid-container">
        <section className="reviews">
          <div className="reviews__residents">
            <h2 className="reviews__residents__title">
              WHAT OUR RESIDENTS SAY
            </h2>
            <p className="reviews__residents__text">
              See what Knightsbridge Living residents say about living in
              Knightsbridge with Knightsbridge Living.
            </p>
          </div>
          <div className="reviews__slider-container">
            <Slider />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Reviews
