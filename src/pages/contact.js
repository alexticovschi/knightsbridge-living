import React from "react"
import Layout from "../components/Layout/Layout"
import DefaultStyledHero from "../components/DefaultStyledHero"
import ContactBanner from "../components/ContactBanner/ContactBanner"
import Directions from "../components/Directions/Directions"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contact Knightsbridge Living"
        description="We’re Here To Answer Your Questions. Have a question? We would love to hear from you. Contact us and get your dream flat today. Get in touch by phone or email and our friendly Leasing team can help with any questions you have and arrange a type of viewing that suits you."
      />
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
