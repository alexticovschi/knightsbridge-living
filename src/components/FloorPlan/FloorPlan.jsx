import React from "react"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Image from "gatsby-image"

import "./floorPlan.scss"

const FloorPlan = ({ floorPlanImage }) => {
  return (
    <section className="section-floor-plan mt">
      <div className="grid-container">
        <div className="floor-plan">
          <div className="floor-plan__left-box-info">
            <h3 className="floor-plan__left-box-info--small-title">
              Floor Plans
            </h3>
            <h1 className="floor-plan__left-box-info--title">
              CONTEMPORARY CALM IN THE HEART OF THE ACTION
            </h1>
            <p className="floor-plan__left-box-info--description">
              This apartment was designed to combat the hustle and bustle of
              modern city life, with its calming, pastel colour palette and
              open-plan rooms which welcome in natural light.From the fitted
              cupboards to the top-of-the-range Samsung appliances, the
              finishing touches accentuate the feeling of an urban oasis.The
              kitchen is a moody olive green, with Nordic oak flooring
              throughout the apartment.
            </p>
            <div className="floor-plan__cta-wrapper">
              <Link to={`/`} className="floor-plan__btn floor-plan__cta-left">
                Enquire
              </Link>
              <Link to={`/`} className="floor-plan__btn floor-plan__cta-right">
                Book A Viewing
              </Link>
              <Link to={`/`} className="floor-plan__btn floor-plan__cta-bottom">
                Reserve Your Apartment
              </Link>
            </div>
            <div className="floor-plan__social-block">
              <h5 className="floor-plan__social-block--small-title">
                Share this home
              </h5>
              <ul className="floor-plan__social-links">
                <li className="floor-plan__social-item">
                  <a
                    className="floor-plan__social-link"
                    href="https://www.instagram.com/"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="floor-plan__social-item">
                  <a
                    className="floor-plan__social-link"
                    href="https://twitter.com/"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="floor-plan__social-item">
                  <a
                    className="floor-plan__social-link"
                    href="https://en-gb.facebook.com/"
                  >
                    <FaFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="floor-plan__plan-img-wrapper">
            <Image
              fluid={floorPlanImage.fluid}
              className="floor-plan__plan-img"
              alt="floor plan"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloorPlan
