import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Page from "../components/page"
import { Lede } from "../components/mdx/"
import SocialMedia from "../components/socialMedia"
import PostList from "../components/postList"

const Index = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Page type="page">
      <Lede>
        This is lgrqvst.com, online home of me, <em>Johan Lagerqvist</em>, a
        Swedish <del>web designer</del> <del>graphic designer</del>{" "}
        <del>web developer</del> <del>programmer</del> <del>writer</del>{" "}
        <del>game designer</del> <del>translator</del> <del>novelist</del>{" "}
        <del>painter</del> <del>musician</del> <del>artist</del>{" "}
        <del>illustrator</del> <del>creator</del> <del>cartoonist</del>{" "}
        <del>maker</del> <ins>procrastinator</ins>, currently living and working
        in Osaka, Japan.
      </Lede>
      <SocialLinks>
        <H2>Me Elsewhere</H2>
        <SocialMedia />
      </SocialLinks>
      <LatestPosts>
        <PostList title="Latest Posts" edges={edges} />
      </LatestPosts>
    </Page>
  )
}

export default Index

const SocialLinks = styled.div`
  grid-column: 3 / 4;
  align-self: start;
  margin: 0;
  line-height: 1;

  @media (max-width: 60rem) {
    grid-column: 2 / 3;
  }
`

const LatestPosts = styled.div`
  margin: 0;
  grid-column: 4 / 6;

  @media (max-width: 60rem) {
    grid-column: 3 / 4;
  }

  @media (max-width: 30rem) {
    margin: 2rem 0 0;
    grid-column: 2 / 3;
  }

  align-self: start;
  line-height: 1;

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      color: var(--accent1);
    }
  }

  h3 {
    margin: 1rem 0 0.5rem;
  }
`

const H2 = styled.h2`
  margin-top: 0;
`

export const pageQuery = graphql`
  query {
    allMdx(
      filter: {
        fields: { sourceInstanceName: { eq: "posts" } }
        frontmatter: { draft: { eq: false } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            categories
            date(formatString: "YYYY/MM/DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
