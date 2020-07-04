import React from "react"
import styled, { css } from "styled-components"

const TagList = ({ children, variant }) => {
  return <TagListElement variant={variant}>{children}</TagListElement>
}
export default TagList

const TagListElement = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  line-height: 1;

  li {
    margin: 0 1em 0.5em 0;

    ${({ variant }) =>
      variant === "postFooter" &&
      css`
        margin: 0.5em 1em 0.5em 0;
        transform: translateY(-0.15em);

        @media (max-width: 40rem) {
          margin: 0 1em 0.5em 0;
        }
      `}
  }
`
