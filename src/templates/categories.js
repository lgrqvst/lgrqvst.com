import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Page from "../components/page"
import PostList from "../components/postList"
import Categories from "../components/categories"
import Tags from "../components/tags"

const CategoryTemplate = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.posts
  const {
    categories: { group: categories },
  } = data
  const {
    tags: { group: tags },
  } = data

  return (
    <Page title={`In: ${category}`} type="list">
      <div className="align-default">
        <PostList
          title={`${totalCount} Post${totalCount > 1 ? "s" : ""}`}
          edges={edges}
        />
      </div>
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
      {/* <Link to="/tags">All tags</Link> */}
    </Page>
  )
}

export default CategoryTemplate

const Taxonomies = styled.div`
  grid-column: 5 / 6;
  padding: 0 0 0 1rem;

  > div:nth-child(1) h2 {
    margin-top: 0;
  }

  @media (max-width: 67.5rem) {
    grid-column: 3 / 6;
    padding: 0;

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

export const pageQuery = graphql`
  query CategoryQuery($category: String) {
    posts: allMdx(
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { categories: { in: [$category] }, draft: { eq: false } }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            date(formatString: "YYYY/MM/DD")
            categories
            headerImgAlt
            headerImgCredit
            headerImgCreditLink
            headerImgSrc {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
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
