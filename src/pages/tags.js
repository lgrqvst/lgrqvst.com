import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Page from "../components/page"

const Tags = ({
  data: {
    tags: { group },
  },
}) => {
  const tags = group.map((tag) => (
    <li key={tag.tagName}>
      <Link to={`/tags/${kebabCase(tag.tagName)}`}>
        {tag.tagName} ({tag.totalCount})
      </Link>
    </li>
  ))

  return (
    <Page title="Tags">
      <ul>{tags}</ul>
    </Page>
  )
}
export default Tags

export const pageQuery = graphql`
  query {
    tags: allMdx {
      group(field: frontmatter___tags) {
        tagName: fieldValue
        totalCount
      }
    }
  }
`
