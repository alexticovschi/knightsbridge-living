import React from "react"
import Title from "../Title/Title"
import BuildingCard from "../BuildingCard/BuildingCard"
import { useStaticQuery, graphql } from "gatsby"

import "./buildings.scss"

const getBuildings = graphql`
  {
    buildings: allContentfulBuilding {
      edges {
        node {
          id
          intro
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

const Buildings = () => {
  const response = useStaticQuery(getBuildings)
  const buildings = response.buildings.edges

  return (
    <section className="buildings-container mt">
      <Title
        title="Choose your building in Knightsbridge"
        subtitle="Each Knightsbridge Living building has its own unique personality and design - which one's right for you?
"
      />
      <div className="grid-container">
        <div className="buildings">
          {buildings.map(({ node }) => (
            <BuildingCard key={node.id} building={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Buildings
