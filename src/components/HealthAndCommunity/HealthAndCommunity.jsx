import React from "react"
import Image from "gatsby-image"
import "./healthAndCommunity.scss"

const HealthAndCommunity = ({ health, opera, green, entertainment }) => {
  return (
    <section className="section-health-and-community mt">
      <div className="grid-container">
        <div className="health-and-community">
          <div className="health-and-community__wellness">
            <figure className="health-and-community__wellness__img-wrapper">
              <Image
                fluid={health}
                className="health-and-community__wellness__img"
                alt="food"
              />
              <div className="health-and-community__wellness__badge-wrapper">
                <span className="health-and-community__wellness__badge">
                  Wellness
                </span>
              </div>
            </figure>
            <div className="health-and-community__wellness__article">
              <h2 className="health-and-community__wellness__article-title">
                <span className="bold">Health </span> & Fitness
              </h2>
              <p className="health-and-community__wellness__article-content">
                Many Knightsbridge Living buildings have resident gyms or
                fitness spaces. But there are also others locally, from Pure Gym
                or Better gym, or exciting new fitness brands such as the
                fantastic, Ember Yoga studio or City Running Club.
              </p>
            </div>
          </div>

          <div className="health-and-community__container mt">
            <div className="health-and-community__card">
              <figure className="health-and-community__card__img-wrapper">
                <Image
                  fluid={entertainment}
                  className="health-and-community__card__img"
                  alt="food"
                />
                <span className="health-and-community__card__badge">
                  Entertainment
                </span>
              </figure>
              <div className="health-and-community__card__content">
                <h5 className="health-and-community__card__content-title">
                  <span>Awesome</span> Entertainment
                </h5>
                <p className="health-and-community__card__content-text">
                  Knightsbridge is home to iconic, world-class sporting & music
                  entertainment thanks to Brown Stadium and the SSE Arena. We
                  give residents the chance to win free tickets via monthly
                  prize draw to fantastic events every month.
                </p>
              </div>
            </div>

            <div className="health-and-community__card">
              <figure className="health-and-community__card__img-wrapper">
                <Image
                  fluid={green}
                  className="health-and-community__card__img"
                  alt="food"
                />
                <span className="health-and-community__card__badge">
                  Community
                </span>
              </figure>
              <div className="health-and-community__card__content">
                <h5 className="health-and-community__card__content-title">
                  <span>The</span> Green
                </h5>
                <p className="health-and-community__card__content-text">
                  The Green is a buzzing community hub where you can join parent
                  and baby clubs and yoga classes, see live music. A community
                  centre with events space, learning hub and fitness spot, open
                  to everyone in the community.
                </p>
              </div>
            </div>

            <div className="health-and-community__card">
              <figure className="health-and-community__card__img-wrapper">
                <Image
                  fluid={opera}
                  className="health-and-community__card__img"
                  alt="food"
                />
                <span className="health-and-community__card__badge">
                  Culture
                </span>
              </figure>
              <div className="health-and-community__card__content">
                <h5 className="health-and-community__card__content-title">
                  <span>Knightsbridge</span> Opera
                </h5>
                <p className="health-and-community__card__content-text">
                  Come and experience stunning performances of music and dance,
                  backstage tours, delicious food and drink, at a historic
                  landmark in the heart of London's most iconic places.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthAndCommunity
