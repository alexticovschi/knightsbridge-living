import React from "react"
import Image from "gatsby-image"
import "./lifeInKnightsbridge.scss"

const LifeInKnightsbridge = ({ eatDrink, shopping, outlet, market }) => {
  return (
    <section className="section-life-in-knightsbridge">
      <div className="section-life-in-knightsbridge__bg"></div>
      <div className="grid-container">
        <div className="section-life-in-knightsbridge__header">
          <h2 className="section-life-in-knightsbridge__header-title">
            Live in Knightsbridge
          </h2>
          <p className="section-life-in-knightsbridge__header-text">
            Knightsbridge is one of the most excitings neighbourhoods. A place
            to live, relax and be entertained right on your doorstep. And just
            10 minutes from Central London.
          </p>
          <p className="section-life-in-knightsbridge__header-text__small">
            Think you know Knightsbridge? Think again.
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="life-in-knightsbridge">
          <div className="life-in-knightsbridge__eat-and-drink">
            <figure className="life-in-knightsbridge__eat-and-drink__img-wrapper">
              <Image
                fluid={eatDrink}
                className="life-in-knightsbridge__eat-and-drink__img"
                alt="food"
              />
              <div className="life-in-knightsbridge__eat-and-drink__badge-wrapper">
                <span className="life-in-knightsbridge__eat-and-drink__badge">
                  Eat & Drink
                </span>
              </div>
            </figure>
            <div className="life-in-knightsbridge__eat-and-drink__article">
              <h2 className="life-in-knightsbridge__eat-and-drink__article-title">
                <span className="bold">Food Heaven.</span> Overindulged for
                Choice
              </h2>
              <p className="life-in-knightsbridge__eat-and-drink__article-content">
                Explore places where you can eat and drink, with the latest Food
                Markek featuring 10+ global street food traders. Renowned bakery
                Cavan from Knightsbridge Market with its all-day restaurant and
                bakery school, artisan pasta specialists La Casa Mia and the
                Designer Outlet’s 15+ restaurants from Wagamama, Zizzi, Nandos
                and more.
              </p>
            </div>
          </div>

          <div className="life-in-knightsbridge__shopping mt">
            <div className="life-in-knightsbridge__shopping-card">
              <figure className="life-in-knightsbridge__shopping-card__img-wrapper">
                <Image
                  fluid={shopping}
                  className="life-in-knightsbridge__shopping-card__img"
                  alt="food"
                />
                <span className="life-in-knightsbridge__shopping-card__badge">
                  SHOPPING
                </span>
              </figure>
              <div className="life-in-knightsbridge__shopping-card__content">
                <h5 className="life-in-knightsbridge__shopping-card__content-title">
                  <span>Shopping's</span> Essentials
                </h5>
                <p className="life-in-knightsbridge__shopping-card__content-text">
                  There’s Sainsbury’s, Co-op, Tesco, Asda, Lidl, Costco all
                  within a short distance of your Knightsbridge Living
                  apartment. Along with nurseries, a post office, IKEA, ATMs,
                  petrol stations, etc. Everything you need is on your doorstep.
                </p>
              </div>
            </div>

            <div className="life-in-knightsbridge__shopping-card">
              <figure className="life-in-knightsbridge__shopping-card__img-wrapper">
                <Image
                  fluid={outlet}
                  className="life-in-knightsbridge__shopping-card__img"
                  alt="food"
                />
                <span className="life-in-knightsbridge__shopping-card__badge">
                  SHOPPING
                </span>
              </figure>
              <div className="life-in-knightsbridge__shopping-card__content">
                <h5 className="life-in-knightsbridge__shopping-card__content-title">
                  <span>Designer</span> Outlet
                </h5>
                <p className="life-in-knightsbridge__shopping-card__content-text">
                  DO features 50+ street brands from Nike, Converse, Kurt
                  Geiger, Gap and more – all up to 60% off, all year round. And
                  with its big screen Cineworld and 15+ restaurants, you'll be
                  able to fill your boots (and your bags), day or night.
                </p>
              </div>
            </div>

            <div className="life-in-knightsbridge__shopping-card">
              <figure className="life-in-knightsbridge__shopping-card__img-wrapper">
                <Image
                  fluid={market}
                  className="life-in-knightsbridge__shopping-card__img"
                  alt="food"
                />
                <span className="life-in-knightsbridge__shopping-card__badge">
                  SHOPPING
                </span>
              </figure>
              <div className="life-in-knightsbridge__shopping-card__content">
                <h5 className="life-in-knightsbridge__shopping-card__content-title">
                  <span>Knightsbridge</span> Market
                </h5>
                <p className="life-in-knightsbridge__shopping-card__content-text">
                  A market and community of independent merchants, makers, and
                  doers, ranging across the likes of fashion, arts and crafts,
                  health and wellness, food and more. The focus is on
                  sustainable, ethically sourced products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifeInKnightsbridge
