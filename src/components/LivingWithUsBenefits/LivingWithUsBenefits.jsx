import React from "react"
import BenefitsCard from "./BenefitsCard/BenefitsCard"
import "./livingWithUsBenefits.scss"

const LivingWithUsBenefits = ({ benefits }) => {
  console.log(benefits)
  return (
    <section className="section-living-with-us-benefits mt">
      <div className="grid-container">
        <div className="living-with-us-benefits">
          {benefits.map(({ node }) => (
            <BenefitsCard key={node.id} benefit={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LivingWithUsBenefits
