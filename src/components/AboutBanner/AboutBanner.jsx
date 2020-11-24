import React from "react"

import "./aboutBanner.scss"

const AboutBanner = () => {
  return (
    <div className="grid-container-no-padding">
      <div className="about-banner">
        <h1 className="about-banner__title">About Knightsbridge Living</h1>
        <p className="about-banner__info">
          <span>
            We are Knightsbridge Living. We manage properties better than anyone
            else.
          </span>
          We challenge you to compare our service to your current residential
          property management right now. You will save money, time and
          dramatically reduce the hassle factor, allowing you to focus on your
          investment strategy. We create amazing places to live, both inside and
          outside your four walls. We’re part of Knightsbridge Group, the
          award-winning developer behind Hyde Park. All just 10 minutes from
          Central London.
        </p>
      </div>
    </div>
  )
}

export default AboutBanner
