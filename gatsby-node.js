const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      buildings: allContentfulBuilding {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.buildings.edges.forEach(({ node }) => {
    createPage({
      path: `buildings/${node.slug}`,
      component: path.resolve("./src/templates/building-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
