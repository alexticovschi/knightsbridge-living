import React from "react"
import ApartmentCard from "../ApartmentCard/ApartmentCard"
import Title from "../Title/Title"

import "./availableApartments.scss"

const AvailableApartments = ({ apartments }) => {
  return (
    <section className="section-apartments mt">
      <div className="grid-container">
        <div className="section-apartments__header mb">
          <h2 className="section-apartments__header-title">Homes Available</h2>
          <p className="section-apartments__header-text">
            Find your dream home today. Search for a 1, 2 or 3 bed apartment
            across a variety of different buildings, each with their own design
            style from Scandi style, rustic, or vintage style and more.
          </p>
        </div>
      </div>
      <Title title="Find a home in Knightsbridge Living" />
      <div className="grid-container">
        <div className="apartments-list">
          {apartments.edges.map(apartment => (
            <ApartmentCard apartment={apartment.node} key={apartment.node.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AvailableApartments
