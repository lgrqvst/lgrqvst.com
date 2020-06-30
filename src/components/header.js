import React from "react"
import styled from "styled-components"

import { gridColumns } from "../styles"
import UnstyledLogo from "./logo"
import Nav from "./nav"

const Header = ({ isHome }) => {
  return (
    <HeaderElement>
      <Logo size={isHome ? 10 : 3} color="contrast" inverted={true} />
      <Title>
        <h2>Lgrqvst</h2>
      </Title>
      <Nav />
    </HeaderElement>
  )
}

export default Header

const HeaderElement = styled.header`
  grid-area: header;

  z-index: 5;

  display: grid;

  ${gridColumns()}

  @media (max-width: 48rem) {
    position: relative;
    display: block;
    padding: 0 0 5rem;
    transition: padding 0.25s;

    .is-not-home & {
      padding: 0;
    }
  }

  @media (max-width: 30rem) {
    padding: 0 0 2rem;
  }

  background: linear-gradient(
    to bottom,
    transparent 0,
    rgba(0, 0, 0, 0.1) 100%
  );

  .is-theme-dark & {
    background: linear-gradient(
      to bottom,
      transparent 0,
      rgba(255, 255, 255, 0.1) 100%
    );
  }
`

const Logo = styled(UnstyledLogo)`
  grid-column: 2 / 3;
  margin: 2rem 1rem 0 0;
  transition: width 0.25s, height 0.25s;
  justify-self: end;

  @media (max-width: 60rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: start;

    margin: 2rem 1rem 3rem 0;

    .is-home & {
      margin: 2rem 1rem 0 0;
    }
  }

  @media (max-width: 48rem) {
    display: block;
    margin: 1rem 0 1rem 1rem;
    /* transition: margin 0.25s; */

    .is-home & {
      margin: 1rem auto 2rem 1rem;
    }
  }

  @media (max-width: 30rem) {
    width: 2rem !important;
    height: 2rem !important;

    .is-home & {
      width: 5rem;
      height: 5rem;
    }
  }
`

const Title = styled.div`
  position: relative;
  z-index: 1;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  align-self: stretch;

  position: relative;

  @media (max-width: 60rem) {
    grid-column: 2 / 3;
  }

  @media (max-width: 48rem) {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-top: -1.6875rem;
  }

  h2 {
    position: absolute;
    left: 0;
    bottom: 105%;

    margin: 0 0 0 -0.0625em;
    font-size: 8rem;
    font-weight: 400;
    color: var(--accent1);
    text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.1);
    line-height: 1;
    transition: bottom 0.25s, opacity 0.25s;
    opacity: 0;

    .is-home & {
      bottom: -0.2109375em;
      opacity: 1;
    }

    @media (max-width: 60rem) {
      left: 11rem;
    }

    @media (max-width: 48rem) {
      position: relative;
      left: 0;
      text-align: left;
      padding-left: 1rem;
      transition: bottom 0.25s -0.25s, opacity 0.25s;
    }

    @media (max-width: 30rem) {
      font-size: 4rem;
    }
  }
`
