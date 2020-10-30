import React from "react"
import BuildingCard from "../BuildingCard/BuildingCard"
import { useStaticQuery, graphql } from "gatsby"

import "./buildingsList.scss"

const getBuildings = graphql`
  {
    buildings: allContentfulBuilding {
      edges {
        node {
          id
          longIntro {
            internal {
              content
            }
          }
          offer
          slug
          title
          description {
            id
            internal {
              content
            }
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BuildingsList = () => {
  const response = useStaticQuery(getBuildings)
  const buildings = response.buildings.edges
  return (
    <section className="buildings-list-container buildings-list">
      <div className="grid-container">
        <div className="buildings-list__intro">
          <h2 className="buildings-list__intro-title">
            Choose your ideal home
          </h2>
          <p className="buildings-list__intro-text">
            Find your dream apartment in any one of our buildings with virtual
            viewings and in person self-guided tours available. We’ll even send
            an Uber to collect you and drop you off home after. And if it's love
            at first sight, you can reserve your home and we’ll arrange the move
            for you – for free, thanks to our friends at Aussie Man & Van.
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="buildings-list__buildings-container">
          {buildings.map(({ node }) => (
            <BuildingCard key={node.id} building={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuildingsList
