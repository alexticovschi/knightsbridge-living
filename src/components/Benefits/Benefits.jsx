import React from "react"
import bedroom from "../../images/svg/benefits/bedroom.svg"
import key from "../../images/svg/benefits/key.svg"
import building from "../../images/svg/benefits/building.svg"
import priceTags from "../../images/svg/benefits/price-tags.svg"

import "./benefits.scss"

const Benefits = () => {
  return (
    <section className="section-benefits grid-container mt">
      <div className="benefits">
        <div className="benefits__list">
          <div className="benefits__item">
            <figure className="benefits__img-wrapper">
              <img
                className="benefits__icon"
                src={bedroom}
                alt="bedroom icon"
              />
            </figure>
            <h2 className="benefits__title">Stylish Apartments</h2>
            <p className="benefits__text">
              Brand new, studio to 4 bed stylish apartments, each with its own
              private balcony or terrace.
            </p>
          </div>
          <div className="benefits__item">
            <figure className="benefits__img-wrapper">
              <img className="benefits__icon" src={key} alt="key icon" />
            </figure>
            <h2 className="benefits__title">Hassle-free process</h2>
            <p className="benefits__text">
              No deposit to pay, and no hidden fees. Utilities and free
              superfast broadband all set up & ready to go.
            </p>
          </div>
          <div className="benefits__item">
            <figure className="benefits__img-wrapper">
              <img
                className="benefits__icon"
                src={building}
                alt="building icon"
              />
            </figure>
            <h2 className="benefits__title">New Neighbourhood</h2>
            <p className="benefits__text">
              A place to relax and be entertained on your doorstep and just 10
              minutes from Central London.
            </p>
          </div>
          <div className="benefits__item">
            <figure className="benefits__img-wrapper">
              <img
                className="benefits__icon"
                src={priceTags}
                alt="price tags icon"
              />
            </figure>
            <h2 className="benefits__title">Exclusive Offers</h2>
            <p className="benefits__text">
              eserve now and move in by 30 November and get up to 2 month's rent
              free on selected apartments. T&Cs apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
