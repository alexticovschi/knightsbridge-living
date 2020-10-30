import React from "react"
import Title from "../Title/Title"
import HomeBuildingCard from "../HomeBuildingCard/HomeBuildingCard"
import { useStaticQuery, graphql } from "gatsby"

import "./homeBuildings.scss"

const getHomeBuildings = graphql`
  {
    homeBuildings: allContentfulBuilding {
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

const HomeBuildings = () => {
  const response = useStaticQuery(getHomeBuildings)
  const buildings = response.homeBuildings.edges

  return (
    <section className="home-buildings-container mt">
      <Title
        title="Choose your building in Knightsbridge"
        subtitle="Each Knightsbridge Living building has its own unique personality and design - which one's right for you?
"
      />
      <div className="grid-container">
        <div className="home-buildings">
          {buildings.map(({ node }) => (
            <HomeBuildingCard key={node.id} building={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBuildings
