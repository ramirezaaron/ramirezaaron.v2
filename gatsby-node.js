/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.onCreateNode = ({ node }) => {
  // console.log(node)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWordpressPage {
        edges {
          node {
            id
            slug
            title
            content
          }
        }
      }
    }
  `)
  result.data.allWordpressPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/pages/page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        content: node.content,
        slug: node.slug
      },
    })
  })
}


