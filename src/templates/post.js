import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Renderer from "../components/renderer"
import Page from "../components/page"

const PostTemplate = ({ data: { mdx } }) => {
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
  // const title = "Test"

  return (
    <Page
      title={title}
      subtitle={subtitle}
      description={description}
      headerImgSrc={headerImgSrc ? headerImgSrc.childImageSharp.fluid : null}
      headerImgAlt={headerImgAlt}
      headerImgCredit={headerImgCredit}
      headerImgCreditLink={headerImgCreditLink}
      type="post"
    >
      <Renderer>{body}</Renderer>
      <PostFooter className="align-wide">
        Hi there! Thanks for reading. I debated for a while having a comment
        section here, but I wasn't really on board with any of the alternatives
        I read about. If something you read on this site sparked something in
        you and you want to communicate that to me,{" "}
        <Link to="/contact">get in touch</Link> with me either by{" "}
        <a href="mailto:hello@lgrqvst.com">email</a>, or by{" "}
        <a href="https://twitter.com/lgrqvst">social media</a>. Thanks!
      </PostFooter>
    </Page>
  )
}

export default PostTemplate

const PostFooter = styled.footer`
  position: relative;
  margin: 2rem 0 0;
  padding: 3rem 0 0;
  border-top: 0.5rem solid transparent;

  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0%;
    display: block;
    width: 100%;
    height: 0.5rem;
    background: var(--flush);
    transform: skewX(-35deg);
  }
`

export const pageQuery = graphql`
  query PostQuery($id: String) {
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
