import React from "react"
import ExploreBuildingCard from "./ExploreBuildingCard/ExploreBuildingCard"
import Title from "../Title/Title"

import "./exploreBuildings.scss"

const ExploreBuildings = ({ buildings }) => {
  return (
    <section className="section-explore-buildings mt mb">
      <Title title="Explore other Knightsbridge Livings buildings" />
      <div className="grid-container">
        <div className="explore-buildings">
          {buildings.map(({ node }) => (
            <ExploreBuildingCard key={node.id} building={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreBuildings
