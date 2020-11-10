import React from "react"
import BuildingSlider from "./BuildingSlider/BuildingSlider"
import "./buildingReviews.scss"

const BuildingReviews = ({ reviews, buildingName }) => {
  console.log(reviews)
  return (
    <section className="section-building-reviews">
      <div className="grid-container">
        <section className="building-reviews">
          <div className="building-reviews__residents">
            <h2 className="building-reviews__residents__title">
              WHAT OUR RESIDENTS SAY
            </h2>
            <p className="building-reviews__residents__text">
              See what Knightsbridge Living residents say about living in{" "}
              {buildingName}.
            </p>
          </div>
          <div className="building-reviews__slider-container">
            <BuildingSlider reviews={reviews} buildingName={buildingName} />
          </div>
        </section>
      </div>
    </section>
  )
}

export default BuildingReviews
