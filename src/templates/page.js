import React from "react"
import { graphql } from "gatsby"

import Page from "../components/page"
import Renderer from "../components/renderer"

const PageTemplate = ({ data: { mdx } }) => {
  const { body, frontmatter } = mdx
  const {
    title,
    subtitle,
    description,
    headerImgSrc,
    headerImgCredit,
    headerImgCreditLink,
    headerImgAlt,
  } = frontmatter

  return (
    <Page
      title={title}
      subtitle={subtitle}
      description={description}
      headerImgSrc={headerImgSrc ? headerImgSrc.childImageSharp.fluid : null}
      headerImgCredit={headerImgCredit}
      headerImgCreditLink={headerImgCreditLink}
      headerImgAlt={headerImgAlt}
      type="page"
    >
      <Renderer>{body}</Renderer>
    </Page>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        description
        headerImgCredit
        headerImgCreditLink
        headerImgAlt
        headerImgSrc {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
