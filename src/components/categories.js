import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons"

const Categories = ({ categories }) => {
  return (
    <CategoryList>
      {categories.map((category) => (
        <li key={category.categoryName}>
          <Category to={`/categories/${kebabCase(category.categoryName)}`}>
            <FontAwesomeIcon icon={faFolderOpen} /> {category.categoryName} (
            {category.totalCount})
          </Category>
        </li>
      ))}
    </CategoryList>
  )
}

export default Categories

const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap; */
`

const Category = styled(Link)`
  margin-right: 1rem;
  text-decoration: none;
  font-family: "Rajdhani", sans-serif;
  font-size: 1.25rem;
  text-transform: uppercase;
`
