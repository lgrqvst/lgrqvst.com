import React from "react"
import styled from "styled-components"

const Lede = ({ children }) => {
  return <LedeElement className="align-wide">{children}</LedeElement>
}

export default Lede

const LedeElement = styled.p`
  margin: 1rem 0 2rem;
  font-size: 2em;
  font-style: italic;
  font-weight: 200;
  font-family: "Crimson Pro", serif;
  line-height: 1.5;

  @media (max-width: 60rem) {
    font-size: 1.75rem;
  }

  @media (max-width: 30rem) {
    font-size: 1.5rem;
  }

  em,
  i {
    font-style: normal;
  }
`
