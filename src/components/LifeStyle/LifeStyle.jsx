import React from "react"
import Slider from "../Slider/Slider"
import "./lifeStyle.scss"

const LifeStyle = ({ data }) => {
  return (
    <section className="section-lifestyle">
      <div className="grid-container-no-padding">
        <section className="lifestyle">
          <div className="lifestyle__container">
            <h2 className="lifestyle__title">Life Style in Knightsbridge</h2>
            <p className="lifestyle__text">
              Knightsbridge is home to amazing everyday shopping with exciting
              local independents through to outlet shopping with big brands at
              DESIGNER OUTLET. Walking through the neighbourhood you'll find not
              just local businesses but the latest brands from Central London
              from restaurants, retailers, cultural and entertainment brands.
              Here’s a small snapshot of what’s on and what’s coming soon. Get
              to know London's most exciting new neighbourhood.
            </p>
          </div>
          <div className="lifestyle__slider-container">
            <Slider data={data} />
          </div>
        </section>
      </div>
    </section>
  )
}

export default LifeStyle
