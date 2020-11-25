/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Knightsbridge Living",
    description:
      "We are Knightsbridge Living. We manage properties better than anyone else. We challenge you to compare our service to your current residential property management right now. You will save money, time and dramatically reduce the hassle factor, allowing you to focus on your investment strategy. We create amazing places to live, both inside and outside your four walls. We’re part of Knightsbridge Group, the award-winning developer behind Hyde Park. All just 10 minutes from Central London.",
    author: "Alex Ticovschi",
    twitterUsername: "@knightsbridgeliving",
    image: "/hero.jpg",
    siteUrl: "https://knightsbridgeliving.netlify.app",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
