import { css } from "styled-components"

export const gridColumns = () => css`
  grid-template-columns: 1fr 11rem 67.5rem 1fr;

  @media (max-width: 80.5rem) {
    grid-template-columns: 1rem 11rem auto 1rem;
  }

  @media (max-width: 60rem) {
    grid-template-columns: 3rem auto 3rem;
  }

  @media (max-width: 48rem) {
    grid-template-columns: 1rem auto 1rem;
  }
`
