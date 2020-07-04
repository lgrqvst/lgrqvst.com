import React from "react"
import styled from "styled-components"

const Date = ({ date }) => {
  return <DateElement>{date}</DateElement>
}
export default Date

const DateElement = styled.span`
  font-family: "Rajdhani", sans-serif;
  text-transform: uppercase;
`
