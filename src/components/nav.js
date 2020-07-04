import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import { hideVisually } from "polished"

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Toggle onClick={() => setOpen(!open)} className={open ? "is-open" : ""}>
        <ToggleBars>
          <span>Menu</span>
        </ToggleBars>
      </Toggle>
      <NavElement className={open ? "is-open" : ""}>
        {/* <NavElement className="is-open"> */}
        <ul>
          <li>
            <Link
              to="/"
              activeClassName="is-current"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/posts"
              activeClassName="is-current"
              onClick={() => setOpen(false)}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClassName="is-current"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/now"
              activeClassName="is-current"
              onClick={() => setOpen(false)}
            >
              Now
            </Link>
          </li>
          <li>
            <Link
              to="/uses"
              activeClassName="is-current"
              onClick={() => setOpen(false)}
            >
              Uses
            </Link>
          </li>
          <li>
            <Link
              to="/todo"
              activeClassName="is-current"
              onClick={() => setOpen(false)}
            >
              To Do
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              activeClassName="is-current"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </NavElement>
      <Overlay
        className={open ? "is-open" : ""}
        onClick={() => setOpen(!open)}
      />
      {open && <FreezeBody />}
    </>
  )
}

export default Nav

const Toggle = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 1rem;
  z-index: 101;
  display: none;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: 0;
  appearance: none;
  /* transition: top 0.25s; */

  /* .is-home & {
    top: 1.25rem;
  } */

  @media (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
`

const ToggleBars = styled.span`
  --color: var(--contrast);
  .is-open & {
    --color: var(--accent1);
  }

  transition: transform 0.15s, background 0.15s;

  &,
  &::before,
  &::after {
    position: relative;
    display: block;
    width: 2rem;
    height: 2px;
    /* border-radius: 0.25rem; */
    background: var(--color);
    /* transition-timing-function: linear; */
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
  }

  &::before {
    top: -0.67rem;
    transition: top 0.25s 0.25s, transform 0.15s 0s, background 0.15s;
  }

  &::after {
    bottom: -0.67rem;
    transition: bottom 0.25s 0.25s, opacity 0.15s 0s, background 0.15s;
  }

  span {
    ${hideVisually()}
  }

  .is-open & {
    transform: rotate(45deg);
    transition: transform 0.15s 0.25s, background 0.15s;

    &::before {
      top: 0;
      transform: rotate(90deg);
      transition: top 0.25s 0s, transform 0.15s 0.3s, background 0.15s;
    }

    &::after {
      bottom: 0;
      opacity: 0;
      transition: bottom 0.25s 0s, opacity 0.25s 0.25s, background 0.15s;
    }
  }
`

const NavElement = styled.nav`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  align-self: end;

  @media (max-width: 60rem) {
    grid-column: 2 / 3;
  }

  position: relative;
  z-index: 2;
  bottom: -0.2109375em;

  font-size: 2rem;
  font-family: Rajdhani, sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1;
  transition: bottom 0.25s;

  .is-home & {
    bottom: -4.5rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  li {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  a {
    color: var(--contrast);
    text-decoration: none;
    border-bottom: 0px solid transparent;
    transition: border-bottom 0.25s;

    &.is-current,
    &:hover {
      border-bottom: 0.5rem solid var(--accent1);
    }
  }

  @media (max-width: 48rem) {
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: auto;
    padding: 2rem 4rem 0 0;
    background: var(--contrast);
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.25s, opacity 0.25s;

    .is-home & {
      bottom: auto;
    }

    &.is-open {
      transform: translateX(0);
      opacity: 1;
    }

    &::before {
      content: "";
      display: block;
      background: var(--contrast);
      width: 200%;
      height: 500%;
      position: absolute;
      top: 100%;
      left: 0;
      transform: translate(-1rem, -50%) rotate(-20deg);
      z-index: 1;
    }

    ul {
      position: relative;
      z-index: 2;
      flex-direction: column;
    }

    li {
      margin: 0 0 1rem 0;
    }

    a,
    a:hover {
      position: relative;
      border: 0;
      color: var(--background);

      &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 100%;
        background: var(--accent1);
        top: 0;
        right: calc(100% + 0.5rem);
        transition: width 0.25s;
      }

      &.is-current {
        border: 0;

        &::before {
          width: 0.1em;
        }
      }
    }
  }
`

const Overlay = styled.div`
  display: none;

  @media (max-width: 48rem) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    display: block;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(1.5rem);
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0s 0.25s, opacity 0.25s;

    &.is-open {
      transform: translateX(0);
      opacity: 1;
      transition: transform 0s, opacity 0.25s;
    }
  }
`

const FreezeBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`
