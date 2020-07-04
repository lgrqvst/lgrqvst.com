import React from "react"
import TagList from "./tagList"
import Tag from "./tag"

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
            <Tag name={tag.tagName} count={tag.totalCount} />
          </li>
        ))}
    </TagList>
  )
}

export default Tags
