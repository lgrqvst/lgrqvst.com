import React from "react"
import styled from "styled-components"
import UnstyledCategory from "./category"

const Categories = ({ categories }) => {
  return (
    <CategoryList>
      {categories.map((category) => (
        <li key={category.categoryName}>
          <Category name={category.categoryName} count={category.totalCount} />
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
`

const Category = styled(UnstyledCategory)`
  margin-right: 1rem;
  font-size: 1.25rem;
`
