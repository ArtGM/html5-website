/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/* const path = require('path')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const workTpl = path.resolve('src/pages/templates/work-tpl.js')
    resolve(
      graphql(`
                {
                    allContentfulProject(limit: 100) {
                        edges {
                            node {
								id
                                slug
                            }
                        }
                    }
                }
            `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProject.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: workTpl,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
} */
