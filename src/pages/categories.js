import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Page from "../components/page"

const Categories = ({
  data: {
    categories: { group },
  },
}) => {
  const categories = group.map((category) => (
    <li key={category.categoryName}>
      <Link to={`/categories/${kebabCase(category.categoryName)}`}>
        {category.categoryName} ({category.totalCount})
      </Link>
    </li>
  ))

  return (
    <Page title="Categories">
      <ul>{categories}</ul>
    </Page>
  )
}
export default Categories

export const pageQuery = graphql`
  query {
    categories: allMdx(
      filter: { frontmatter: { categories: { ne: "Testing" } } }
    ) {
      group(field: frontmatter___categories) {
        categoryName: fieldValue
        totalCount
      }
    }
  }
`
