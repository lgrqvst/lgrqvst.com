import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons"

const Category = ({
  name,
  count = 0,
  showCount = true,
  showIcon = true,
  ...props
}) => {
  return (
    <CategoryElement to={`/categories/${kebabCase(name)}`} {...props}>
      {showIcon && <FontAwesomeIcon icon={faFolderOpen} />} {name}{" "}
      {showCount && <>({count})</>}
    </CategoryElement>
  )
}
export default Category

const CategoryElement = styled(Link)`
  font-family: "Rajdhani", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
`
