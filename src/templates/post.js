import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Renderer from "../components/renderer"
import Page from "../components/page"
import Date from "../components/date"
import Category from "../components/category"
import TagList from "../components/tagList"
import Tag from "../components/tag"

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
    date,
    categories,
    tags,
  } = frontmatter

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
        <aside>
          <Date date={date} />
          <Divider>|</Divider>
          {categories.map((cat) => (
            <Category key={cat} name={cat} showCount={false} />
          ))}
          <Divider>|</Divider>
          <TagList variant="postFooter">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag name={tag} showCount={false} size="small" />
              </li>
            ))}
          </TagList>
        </aside>
        {/* <hr /> */}
        <p>
          Hi there! Thanks for reading. I debated for a while having a comment
          section here, but I wasn't really on board with any of the
          alternatives I looked at. If something you read on this site sparked
          something in you and you want to communicate that to me,{" "}
          <Link to="/contact">get in touch</Link> with me either by{" "}
          <a href="mailto:hello@lgrqvst.com">email</a>, or on social media,
          perhaps on <a href="https://twitter.com/lgrqvst">Twitter</a>. Thanks!
        </p>
      </PostFooter>
    </Page>
  )
}

export default PostTemplate

const PostFooter = styled.footer`
  position: relative;
  margin: 3rem 0 0;
  padding: 0;
  border-top: 0.5rem solid transparent;

  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0%;
    display: block;
    width: 100%;
    height: 0.5rem;
    background: var(--contrast);
    transform: skewX(-35deg);
  }

  p {
    margin: 1rem 0 0;
  }

  aside {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 1.75rem 0 2rem;
    padding: 0 0 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    .is-theme-dark & {
      border-color: rgba(255, 255, 255, 0.25);
    }

    @media (max-width: 40rem) {
      flex-direction: column;
      margin: 1rem 0;
      padding: 0 0 1rem;

      ul {
        margin: 0.5rem 0 0 0;
      }
    }
  }
`

const Divider = styled.span`
  margin: 0 0.5em;

  @media (max-width: 40rem) {
    display: none;
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
        date(formatString: "YYYY/MM/DD")
        categories
        tags
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
