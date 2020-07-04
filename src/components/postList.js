import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Category from "./category"
import Date from "./date"

const PostList = ({ title, edges, context }) => {
  const posts = edges.map((post, i) => (
    <Article key={post.node.fields.slug}>
      {post.node.frontmatter.headerImgSrc && (
        <figure>
          <Img
            fluid={post.node.frontmatter.headerImgSrc.childImageSharp.fluid}
          />
        </figure>
      )}
      <h3>
        <Link to={post.node.fields.slug}>
          {post.node.frontmatter.title}
          {post.node.frontmatter.subtitle &&
            `—${post.node.frontmatter.subtitle}`}
        </Link>
      </h3>
      <aside>
        <Date date={post.node.frontmatter.date} /> |{" "}
        {post.node.frontmatter.categories.map((cat) => (
          <Category key={cat} name={cat} showCount={false} />
        ))}
      </aside>
      {/* <p>{post.node.excerpt}</p> */}
    </Article>
  ))

  return (
    <>
      <PostListTitle>{title}</PostListTitle>
      <PostListElement>{posts}</PostListElement>
    </>
  )
}
export default PostList

const PostListTitle = styled.h2`
  margin-top: 0;
`

const PostListElement = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Article = styled.li`
  margin: 0 0 3rem;

  .is-home & {
    margin: 0 0 1rem;
  }

  figure {
    margin: 0 0 1rem;
  }

  h3 {
    margin: 0;
    line-height: 1;
    /* font-size: 3rem; */
    text-transform: none;
    font-weight: 400;

    .is-home & {
      font-size: 2rem;
    }
  }

  a {
    text-decoration: none;
  }

  p {
    max-width: 30em;
  }
`
