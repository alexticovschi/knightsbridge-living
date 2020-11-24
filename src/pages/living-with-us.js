import React from "react"
import Layout from "../components/Layout/Layout"
import DefaultStyledHero from "../components/DefaultStyledHero"
import LivingWithUsBanner from "../components/LivingWithUsBanner/LivingWithUsBanner"
import LivingWithUsBenefits from "../components/LivingWithUsBenefits/LivingWithUsBenefits"

const LivingWithUsPage = ({ data }) => {
  return (
    <Layout>
      <DefaultStyledHero
        opacity="true"
        img={data.homeHeroImage.childImageSharp.fluid}
      >
        <LivingWithUsBanner />
      </DefaultStyledHero>
      <LivingWithUsBenefits benefits={data.benefits.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    homeHeroImage: file(relativePath: { eq: "sofa.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    benefits: allContentfulBenefits {
      edges {
        node {
          id
          title
          content {
            content
          }
          icon {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default LivingWithUsPage
