import React from "react"

import "./transportAndConnections.scss"

const TransportAndConnections = () => {
  return (
    <section className="transport-and-connections grid-container mt">
      <h2 className="transport-and-connections__title">
        Transport & Connections
      </h2>
      <p className="transport-and-connections__info">
        London is just a stone’s throw away. Ten minutes to be more exact.
      </p>
      <div className="grid-container">
        <ul className="transport-and-connections__list">
          <li className="transport-and-connections__list-item">
            <a className="transport-and-connections__link" href="">
              <span>South</span>
              <span>Kensington</span>
            </a>
          </li>
          <li className="transport-and-connections__list-item">
            <div className="transport-and-connections__link knightsbridge">
              Knightsbridge
            </div>
          </li>
          <li className="transport-and-connections__list-item">
            <div className="transport-and-connections__link">
              <span>Hyde Park</span>
              <span>Corner</span>
            </div>
          </li>
          <li className="transport-and-connections__list-item">
            <div className="transport-and-connections__link">
              <span>Green</span>
              <span>Park</span>
            </div>
          </li>
          <li className="transport-and-connections__list-item">
            <div className="transport-and-connections__link">
              <span>Picadilly</span>
              <span>Circus</span>
            </div>
          </li>
          <li className="transport-and-connections__list-item">
            <div className="transport-and-connections__link">
              <span>Leicester</span>
              <span>Square</span>
            </div>
          </li>
          <li className="transport-and-connections__list-item">
            <div className="transport-and-connections__link">
              <span>Covent</span>
              <span>Garden</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TransportAndConnections
