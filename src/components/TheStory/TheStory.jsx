import React from "react"
import Title from "../Title/Title"
import "./theStory.scss"

const TheStory = () => {
  return (
    <section className="section-the-story mt">
      <Title title="The story of Knightsbridge Living" />

      <div className="grid-container">
        <div className="the-story">
          <div className="the-story__content">
            <p className="the-story__text">
              We provide a hassle-free, trustworthy and simple rental
              experience. From property marketing to move-in, we pride ourselves
              on delivering exceptional results and customer service. Home Made
              is the trusted partner of choice for many of the UK’s largest
              property funds as well as tens of thousands of landlords and
              renters. We are working together to create the best possible
              rental experience, because we think you should love where you
              rent.
            </p>
            <p className="the-story__text">
              Your utilities, and free superfast broadband are all set up and
              ready to go. There’s no part of the rental experience we haven’t
              carefully thought through. We have made the process of renting and
              letting a home simple, fair and transparent with our unique
              centralised model, proprietary technology, an outstanding team and
              a non-compromising commitment to compliance standards. Our
              apartments are co-designed with the likes of Robins & Partners &
              H&B Design. You can enjoy roof terraces, landscaped gardens,
              cinema rooms, gyms in your building, flexible work from home and
              social spaces, and even a 24 hour concierge - all included in your
              rent. We even take care of any maintenance. We love pets as much
              as you do, and offer pet-friendly rentals (as well as dog exercise
              areas). And if you need private parking or extra storage, we have
              that too. We want to create the best rental experience for you and
              we like to think we’ve thought of everything, but if we haven’t
              just let us know. You’re going to love where you rent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheStory
