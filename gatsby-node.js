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
      apartments: allContentfulApartment {
        edges {
          node {
            slug
            nameSlugified
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
  data.apartments.edges.forEach(({ node }) => {
    createPage({
      path: `apartments/${node.slug}/${node.nameSlugified}`,
      component: path.resolve("./src/templates/apartment-template.js"),
      context: {
        slug: node.slug,
        nameSlugified: node.nameSlugified,
      },
    })
  })
}
