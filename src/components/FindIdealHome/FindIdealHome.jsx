import React from "react"
import { Link } from "gatsby"
import pin from "../../images/svg/ideal-home/pin.svg"
import truck from "../../images/svg/ideal-home/truck.svg"
import move from "../../images/svg/ideal-home/move.svg"
import Title from "../Title/Title"

import "./findIdealHome.scss"

const FindIdealHome = () => {
  return (
    <section className="find-ideal-home-container mt">
      <Title title="Helping you to find your ideal home" />
      <div className="grid-container">
        <div className="find-ideal-home">
          <Link to="covid-19-update-and-faqs" className="find-ideal-home-card">
            <figure className="find-ideal-home-card__img-wrapper">
              <img
                src={pin}
                className="find-ideal-home-card__img"
                alt="find-ideal-home card"
              />
              <div className="find-ideal-home-card__overlay">
                <h3 className="find-ideal-home-card__name">
                  Virtual viewings & self-guided tours
                </h3>
                <div className="find-ideal-home-card__intro-container">
                  <p className="find-ideal-home-card__intro">
                    We’ll send an Uber to bring you to your safe, in-person
                    self-guided tour and drop you back home again after. It’s on
                    us.
                  </p>
                </div>
              </div>
            </figure>
          </Link>
          <Link to="/covid-19-update-and-faqs" className="find-ideal-home-card">
            <figure className="find-ideal-home-card__img-wrapper">
              <img
                src={truck}
                className="find-ideal-home-card__img"
                alt="find-ideal-home card"
              />
              <div className="find-ideal-home-card__overlay">
                <h3 className="find-ideal-home-card__name">
                  Free contactless move ins
                </h3>
                <div className="find-ideal-home-card__intro-container">
                  <p className="find-ideal-home-card__intro">
                    Moving is hassle that’s why we’ll get Aussie Man & Van to
                    move your boxes for you - for free.
                  </p>
                </div>
              </div>
            </figure>
          </Link>
          <Link to="/covid-19-update-and-faqs" className="find-ideal-home-card">
            <figure className="find-ideal-home-card__img-wrapper">
              <img
                src={move}
                className="find-ideal-home-card__img"
                alt="find-ideal-home card"
              />
              <div className="find-ideal-home-card__overlay">
                <h3 className="find-ideal-home-card__name">
                  Move anytime in 2020
                </h3>
                <div className="find-ideal-home-card__intro-container">
                  <p className="find-ideal-home-card__intro">
                    Reserve an apartment now and move in anytime in 2020. Fargo
                    & Terrum buildings only.
                  </p>
                </div>
              </div>
            </figure>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FindIdealHome
