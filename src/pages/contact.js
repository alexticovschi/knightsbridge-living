import React from "react"
import Layout from "../components/Layout/Layout"
import DefaultStyledHero from "../components/DefaultStyledHero"
import ContactBanner from "../components/ContactBanner/ContactBanner"
import Directions from "../components/Directions/Directions"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <DefaultStyledHero
        opacity="true"
        img={data.contactHeroImage.childImageSharp.fluid}
      >
        <ContactBanner />
      </DefaultStyledHero>
      <Directions />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactHeroImage: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ContactPage
