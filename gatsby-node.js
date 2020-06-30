const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      pages: allMdx(
        filter: { fields: { sourceInstanceName: { eq: "pages" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      posts: allMdx(
        filter: {
          fields: { sourceInstanceName: { eq: "posts" } }
          frontmatter: { draft: { eq: false } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categoriesGroup: allMdx(
        filter: { frontmatter: { categories: { ne: "Testing" } } }
      ) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const pages = result.data.pages.edges
  const posts = result.data.posts.edges
  const tags = result.data.tagsGroup.group
  const categories = result.data.categoriesGroup.group

  const pageTemplate = path.resolve("./src/templates/page.js")
  const postTemplate = path.resolve("./src/templates/post.js")
  const postsTemplate = path.resolve("./src/templates/posts.js")
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const categoryTemplate = path.resolve("./src/templates/categories.js")

  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: pageTemplate,
      context: {
        id: node.id,
      },
    })
  })

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {
        id: node.id,
      },
    })
  })

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  categories.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })

  const postsPerPage = 9
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: postsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    createNodeField({
      name: "slug",
      node,
      value: createFilePath({ node, getNode }),
    })

    const parent = getNode(node.parent)

    createNodeField({
      name: "sourceInstanceName",
      node,
      value: parent.sourceInstanceName,
    })
  }
}
