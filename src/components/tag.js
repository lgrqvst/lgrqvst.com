import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import kebabCase from "lodash/kebabCase"

const Tag = ({ to, name, count = 0, showCount = true, size = "default" }) => {
  return (
    <TagElement to={`/tags/${kebabCase(name)}`} size={size}>
      {name} {showCount && <>({count})</>}
    </TagElement>
  )
}
export default Tag

const TagElement = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 0.25em 0.25em 0.25em 0.5em;
  border-radius: 0.2em;
  background: var(--accent1);
  color: var(--contrastLight);
  line-height: 1.5;
  text-decoration: none;
  transition: background 0.25s, color 0.25s;

  ${({ size }) =>
    size === "small"
      ? css`
          font-size: 0.6em;
        `
      : css`
          font-size: 0.75em;
        `}

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(100% - 0.1em);
    display: block;
    width: 0;
    height: 0;
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-left: 1em solid var(--accent1);
    border-radius: 0.2em;
    transform: translateY(-50%);
    transition: border-color 0.25s;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(100% + 0.05em);
    display: block;
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    background: var(--background);
    transform: translateY(-50%);
  }

  &:hover {
    background: var(--contrast);
    color: var(--background);

    &::before {
      border-left: 1em solid var(--contrast);
    }
  }
`
