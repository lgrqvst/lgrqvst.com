import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

const Tags = ({ tags }) => {
  return (
    <TagList>
      {tags
        .sort((a, b) => {
          if (a.tagName.toLowerCase() < b.tagName.toLowerCase()) return -1
          if (a.tagName.toLowerCase() > b.tagName.toLowerCase()) return 1
          return 0
        })
        .map((tag) => (
          <li key={tag.tagName}>
            <Tag to={`/tags/${kebabCase(tag.tagName)}`}>
              {tag.tagName} ({tag.totalCount})
            </Tag>
          </li>
        ))}
    </TagList>
  )
}

export default Tags

const TagList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  li {
    margin: 0 1em 0.75em 0;
  }
`

const Tag = styled(Link)`
  position: relative;
  display: block;
  padding: 0.25em 0.25em 0.25em 0.5em;
  border-radius: 0.2em;
  background: var(--accent1);
  color: var(--contrastLight);
  font-size: 0.75em;
  line-height: 1.5;
  text-decoration: none;
  transition: background 0.25s, color 0.25s;

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
