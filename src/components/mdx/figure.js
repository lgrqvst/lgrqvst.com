import React from "react"
import styled from "styled-components"

const Figure = ({ img, alt, caption, align = "default" }) => (
  <figure className={`align-${align}`}>
    <img src={img} alt={alt} title={caption} />
    {caption && <Figcaption align={align}>{caption}</Figcaption>}
  </figure>
)

export default Figure

const Figcaption = styled.figcaption`
  margin: 0.5em 0 0;
  font-size: 0.875em;
  font-style: italic;

  .align-left &,
  .align-left-wide &,
  .align-left-large &,
  .full & {
    padding: 0 0 0 0.5em;
  }
`
