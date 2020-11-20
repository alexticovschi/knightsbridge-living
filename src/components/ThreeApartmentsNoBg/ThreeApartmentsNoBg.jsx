import React from "react"
import ApartmentCard from "../ApartmentCard/ApartmentCard"
import { Link } from "gatsby"

import "./threeApartmentsNoBg.scss"

const ThreeApartmentsNoBg = ({ apartments }) => {
  return (
    <section className="section-three-apartments-no-bg mt">
      <div className="section-three-apartments-no-bg__header">
        <h2 className="section-three-apartments-no-bg__header--title">
          See other similar apartments in Knightsbridge Living
        </h2>
      </div>
      <div className="three-apartments-no-bg grid-container">
        <div className="apartments-list">
          {apartments.edges.map(apartment => (
            <ApartmentCard
              apartment={apartment.node}
              key={apartment.node.name}
            />
          ))}
        </div>
      </div>
      <div className="grid-container">
        <div className="three-apartments-no-bg__cta">
          <Link to={`/apartments`} className="three-apartments-no-bg__btn">
            View All Apartments Available
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ThreeApartmentsNoBg
