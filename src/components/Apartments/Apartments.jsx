import React from "react"
import ApartmentCard from "../ApartmentCard/ApartmentCard"

import "./apartments.scss"

const Apartments = ({ apartments, slug }) => {
  return (
    <section className="section-apartments mt">
      <h2 className="section-apartments__title">
        Featured apartments in{" "}
        <span className="section-apartments__building-name">{slug}</span>
      </h2>
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

export default Apartments
