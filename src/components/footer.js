import React from "react"
import styled from "styled-components"

import Copyright from "./copyright"
import UnstyledThemeSwitcher from "./themeSwitcher"
import { gridColumns } from "../styles"

const Footer = ({ theme, changeTheme }) => {
  return (
    <FooterElement>
      <Inner>
        <ThemeSwitcher onClick={changeTheme}>
          <span>Change theme</span>
        </ThemeSwitcher>
        <Copyright />
        {/* <span>Made with &lt;3 in Osaka.</span> */}
        {/* <br /> */}
      </Inner>
    </FooterElement>
  )
}

export default Footer

const FooterElement = styled.footer`
  position: relative;
  z-index: 2;
  grid-area: footer;

  display: grid;
  margin: 1rem 0 0;

  @media (max-width: 40rem) {
    margin: 0;
  }

  ${gridColumns()}
`

const Inner = styled.div`
  grid-column: 3 / 4;

  @media (max-width: 60rem) {
    grid-column: 2 / 3;
  }

  position: relative;
  border-top: 1rem solid transparent;
  margin: 0;
  padding: 1rem 0 2rem;

  &::before {
    content: "";
    position: absolute;
    left: -0.5rem;
    bottom: 100%;
    display: block;
    width: calc(100% + 0.25rem);

    /* height: 1rem; */
    /* background: linear-gradient(to right, var(--flush) 0, rgba(0, 0, 0, 0) 75%); */
    /* background: var(--flush); */

    /* background: none;
    height: 0;
    border-top: 0.5rem solid var(--background);
    border-bottom: 0.5rem solid var(--accent1);
    transform: skewX(-30deg); */

    height: 1.5rem;
    background: linear-gradient(
        to bottom,
        var(--background) 0.5rem,
        transparent 0.5rem
      ),
      linear-gradient(to top, var(--background) 0.5rem, transparent 0.5rem),
      linear-gradient(to left, var(--background) 0.5rem, transparent 0.5rem),
      linear-gradient(to right, var(--background) 0.5rem, transparent 0.5rem),
      linear-gradient(
        to right,
        var(--background) 1px,
        var(--accent1) 1px,
        var(--accent1) calc(100% - 1px),
        var(--background) calc(100% - 1px)
      );
    border-radius: 0.25rem 0 0.25rem 0;
    transform: skewX(-35deg);
  }
`

const ThemeSwitcher = styled(UnstyledThemeSwitcher)`
  margin: 0 0 1rem;
`
