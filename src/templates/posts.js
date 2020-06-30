import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Page from "../components/page"
import PostList from "../components/postList"
import Categories from "../components/categories"
import Tags from "../components/tags"

const PostsTemplate = ({
  data: {
    posts: { edges },
    categories: { group: categories },
    tags: { group: tags },
  },
  pageContext: { currentPage, numPages },
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/posts" : `/posts/${(currentPage - 1).toString()}`
  const nextPage = `/posts/${(currentPage + 1).toString()}`

  return (
    <Page title="Posts" element="div" type="list">
      <div className="align-default">
        <PostList title="Recent Posts" edges={edges} />
      </div>
      {/* <PaginationUpper>
        {!isFirst && (
          <PrevPage to={prevPage} rel="prev">
            <span>← Previous</span>
          </PrevPage>
        )}
        {!isLast && (
          <NextPage to={nextPage} rel="next">
            <span>Next →</span>
          </NextPage>
        )}
      </PaginationUpper> */}
      <Taxonomies>
        <div>
          <h2>Categories</h2>
          <Categories categories={categories} />
        </div>
        <div>
          <h2>Tags</h2>
          <Tags tags={tags} />
        </div>
      </Taxonomies>
      <Pagination>
        {!isFirst && (
          <PrevPage to={prevPage} rel="prev">
            <span>← Previous</span>
          </PrevPage>
        )}
        {!isLast && (
          <NextPage to={nextPage} rel="next">
            <span>Next →</span>
          </NextPage>
        )}
      </Pagination>
    </Page>
  )
}

export default PostsTemplate

const Taxonomies = styled.div`
  grid-column: 5 / 6;
  padding: 0 0 0 1rem;
  order: 2;

  > div:nth-child(1) h2 {
    margin-top: 0;
  }

  @media (max-width: 67.5rem) {
    grid-column: 3 / 6;
    padding: 0;
    order: 3;

    display: grid;
    grid-template: "categories tags" auto / 1fr 1fr;

    > div:nth-child(1) {
      grid-area: categories;

      h2 {
        margin: 1rem 0;
      }
    }

    > div:nth-child(2) {
      grid-area: tags;
    }
  }

  @media (max-width: 60rem) {
    grid-column: 2 / 4;
  }

  @media (max-width: 30rem) {
    display: block;
  }
`

const Pagination = styled.div`
  display: grid;
  grid-template: "previous next" auto / 1fr 1fr;
  order: 3;
  margin: 1em 0 0 0;
  text-align: center;

  @media (max-width: 67.5rem) {
    order: 2;
  }

  a:nth-child(1):not(:last-child) {
    margin-right: 0.5rem;
  }

  a:nth-child(2) {
    margin-left: 0.5rem;
  }
`

// const PaginationUpper = styled(Pagination)`
//   display: none;

//   @media (max-width: 67.5rem) {
//     display: grid;
//   }
// `

const PageLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 0.25rem 1.5rem;
  background: var(--flush);
  color: var(--contrast);
  font-size: 1.25rem;
  font-family: "Rajdhani", sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  transform: skewX(-35deg);

  box-shadow: 0 0 0 var(--accent1);
  transition: box-shadow 0.25s, background 0.25s, color 0.25s;

  &:hover {
    background: var(--contrast);
    color: var(--flush);
    box-shadow: 0.5rem 0.5rem 0 var(--accent1);
  }

  @media (max-width: 30rem) {
    font-size: 1rem;
  }

  span {
    display: inline-block;
    transform: skewX(35deg);
  }
`

const NextPage = styled(PageLink)`
  right: 1rem;
  grid-area: next;
  justify-self: end;
`

const PrevPage = styled(PageLink)`
  left: 1rem;
  grid-area: previous;
  justify-self: start;
`

export const pageQuery = graphql`
  query blogPosts($skip: Int!, $limit: Int!) {
    posts: allMdx(
      filter: {
        fields: { sourceInstanceName: { eq: "posts" } }
        frontmatter: { draft: { eq: false } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            categories
            date(formatString: "YYYY/MM/DD")
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        tagName: fieldValue
        totalCount
      }
    }
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
