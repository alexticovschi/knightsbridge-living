import React from "react"
import ApartmentCard from "../ApartmentCard/ApartmentCard"
import { Link } from "gatsby"

import "./threeApartments.scss"

const ThreeApartments = ({ apartments }) => {
  return (
    <section className="section-three-apartments mt">
      <div className="section-three-apartments__bg"></div>
      <div className="grid-container apartments-wrapper">
        <div className="section-three-apartments__header">
          <h2 className="section-three-apartments__header--title">
            Live in London’s most exciting, new neighbourhood <br />
            And love where you rent.
          </h2>
        </div>
        <div className="apartments-list">
          {apartments.edges.map(apartment => (
            <ApartmentCard apartment={apartment.node} key={apartment.node.id} />
          ))}
        </div>
      </div>
      <div className="grid-container">
        <div className="section-three-apartments__cta">
          <Link to={`/apartments`} className="section-three-apartments__btn">
            View All Apartments Available
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ThreeApartments
