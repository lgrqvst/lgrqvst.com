import React, { useState, useEffect } from "react"
import styled, { css, createGlobalStyle } from "styled-components"
import "sanitize.css"
import "sanitize.css/typography.css"
import "sanitize.css/forms.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { gridColumns } from "../styles"
import Header from "./header"
import Footer from "./footer"

config.autoAddCss = false

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, path }) => {
  const [theme, setTheme] = useState("light")
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme("dark")
      }
    }
  }, [])

  useEffect(() => {
    setIsHome(path === "/" ? true : false)
  }, [path])

  return (
    <>
      <GlobalStyles theme={theme} />
      <Site
        className={[
          isHome ? "is-home" : "is-not-home",
          `is-theme-${theme}`,
        ].concat(" ")}
      >
        <Header isHome={isHome} />
        <PageWrap>{children}</PageWrap>
        <Footer
          theme={theme}
          changeTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <DecoratorTop></DecoratorTop>
        <DecoratorBottom></DecoratorBottom>
        <DecoratorSide></DecoratorSide>
      </Site>
    </>
  )
}

export default Layout

const Site = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "header header header header"
    "page page page page"
    "footer footer footer footer";
  grid-template-rows: max-content auto max-content;
  ${gridColumns()}

  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: var(--background);

  transition: background 0.25s;

  @media (max-width: 60rem) {
    grid-template-areas:
      "header header header"
      "page page page"
      "footer footer footer";
  }
`

const PageWrap = styled.div`
  position: relative;
  z-index: 4;
  grid-area: page;
`

const DecoratorTop = styled.i`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  display: block;
  width: 52.5vmin;
  height: 75vmin;
  transform-origin: top left;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.15) 0,
      transparent 10rem
    ),
    linear-gradient(225deg, rgba(0, 0, 0, 0.2) 0, rgba(255, 255, 255, 0.2) 100%),
    var(--accent1);
  transform: skewX(-35deg);
  /* box-shadow: 0 0 3rem inset rgba(0, 0, 0, 0.25); */
`

const DecoratorBottom = styled(DecoratorTop)`
  top: auto;
  left: auto;
  right: 0;
  bottom: 0;
  width: 35vmin;
  height: 50vmin;
  transform-origin: bottom right;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.15) 0,
      transparent 10rem
    ),
    linear-gradient(225deg, rgba(0, 0, 0, 0.2) 0, rgba(255, 255, 255, 0.2) 100%),
    var(--accent2);
`

const DecoratorSide = styled.i`
  grid-column: 1 / 2;
  position: relative;
  z-index: 2;
  grid-row: 1 / -1;
  content: "";
  display: block;
  background: linear-gradient(to right, transparent 0, rgba(0, 0, 0, 0.2) 100%);

  .is-theme-dark & {
    background: linear-gradient(
      to right,
      transparent 0,
      rgba(255, 255, 255, 0.2) 100%
    );
  }

  @media (max-width: 60rem) {
    display: none;
  }
`

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #efefef;
    --contrast: #222;
    --flush: #fff;
    --accent1: #ffaa05;
    /* --accent1: #05aaff; */
    --accent1Lighter: #ffc145;
    /* --accent1Lighter: #ffbf44; */
    --accent1Darker: #bf7f04;
    --accent2: #c93478;
    /* --accent2: #78c934; */
    --accent2Lighter: #fc4296;
    /* --accent2Lighter: #d7679a; */
    --accent2Darker: #97275a;

    --backgroundLight: #efefef;
    --backgroundDark: #111;
    --contrastLight: #222;
    --contrastDark: #efefef;
    --flushLight: #fff;
    --flushDark: #000;

    ${({ theme }) =>
      theme === "dark" &&
      css`
        --flush: #000;
        --background: #111;
        --contrast: #efefef;
      `}
  }

  body::-webkit-scrollbar {
    width: 0.75rem;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--accent1) var(--contrastLight);
  }
  body::-webkit-scrollbar-track {
    background: var(--contrastLight);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--accent1) ;
    border-radius: 0.5rem;
    border: 0.25rem solid var(--contrastLight);
  }

  body {
    background: var(--background);
    color: var(--contrast);
    font-family: "Ibarra Real Nova", serif;
    
    font-weight: 400;

    transition: background 0.25s, color 0.25s;

  }

  ::selection {
    background: var(--accent1);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: Rajdhani, sans-serif;
    /* text-transform: uppercase; */
    font-weight: 400;
  }

  img {
    max-width: 100%;
  }


  main {
    padding: 0 0 1rem;
    line-height: 2;
    
    a {
      color: var(--contrast);
      text-decoration: underline;
      transition: color 0.25s;

      &:hover, &:focus {
        color: var(--accent2);
      }

    }  

    h2, h3, h4, h5, h6 {
      position: relative;
      margin: 1rem 0;

      .anchor {
        position: absolute;
        top: 50%;
        right: 100%;
        padding: 0 0.5rem 0 0;
        transform: translateY(-50%);
        opacity: 0;
        transition: opacity 0.25s;
      }

      &:hover {
        .anchor {
          opacity: 1;
        }
      }

      @media (max-width: 48rem) {
        .anchor {
          position: relative;
          top: 0;
          right: 0;
          transform: none;
          opacity: 1;
        }
      }
    }
    
    h2 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--accent2);
      text-transform: uppercase;
    }
    h3 {
      font-size: 2rem;
      font-weight: 400;
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--accent2);
    }
    h5 {
      font-size: 1.5rem;
      font-weight: 400;
    }
    h6 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--accent2);
    }

    code {
      border-radius: 0.1em;
      background:  var(--flush);
      font-size: 0.875em;
      box-shadow: 0.1rem 0.1rem 0 var(--flush),-0.1rem 0.1rem 0 var(--flush),0.1rem -0.1rem 0 var(--flush),-0.1rem -0.1rem 0 var(--flush);
    }

    pre {
      max-width: 100%;
      overflow: auto;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25em;
      background: var(--contrastLight);
      color: var(--contrastDark);
      font-size: 0.9em;
      font-weight: 400;

      code {
        background: none;
        font-size: 1em;
        box-shadow: none;
      }
    }

    table {
      border-bottom: 0.5rem solid var(--accent2);
      border-radius: 0.25rem;

      tr:nth-child(even) td {
        background: var(--flush);
      }

      th {
        background: var(--accent2);
        color: var(--contrastDark);
      }
      
      th, td {
        padding: 0.25em;
        text-align: left;
      }
    }

    ul {
      list-style-type: square;

      p {
        margin: 0;
      }
    }

    blockquote {
      padding: 2rem 3em 1rem;
      font-style: italic;
      font-family: "Crimson Pro", serif;
      font-weight: 200;
      font-size: 1.25rem;
      line-height: 1;
      text-align: right;
      background: linear-gradient(to bottom, var(--flush) 0, transparent 100%);

      @media (max-width: 30rem) {
        padding: 2rem 2em 1rem;
        font-size: 1rem;
      }
      
      @media (max-width: 20rem) {
        padding: 1rem 1.5em 1rem;
        font-size: 1rem;
      }

      p {
        margin: 0 0 1rem;
        text-align: left;
        line-height: 2;
      }

      cite {
        display: inline-block;
        font-family: "Ibarra Real Nova", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1rem;
        
        &::before {
          content: '—';
        }
      }
    }
  }

  .contains-task-list {
    list-style: none;
    padding: 0;
  }

  main > article > *,
  main > div > * {
    margin: 1rem 0 0 0;
  }

  main > article > h2,
  main > article > h3,
  main > article > h4,
  main > article > h5,
  main > article > h6,
  main > article > p,
  main > article > ul,
  main > article > ol,
  main > article > figure,
  main > article > table,
  main > article > blockquote,
  main > article > hr,
  .align-default {
    grid-column: 3 / 5;

    @media (max-width: 60rem) {
      grid-column: 2 / 4;
    }

    @media (max-width: 30rem) {
      grid-column: 2 / 3;
    }
  }

  main > article > header,
  main > article > div,
  main > article > pre,
  main > div > header,
  main > div > div,
  .align-wide {
    grid-column: 3 / 6;

    @media (max-width: 60rem) {
      grid-column: 2 / 4;
    }

    @media (max-width: 30rem) {
      grid-column: 2 / 3;
    }
  }

  .align-full {
    grid-column: 2 / -1;

    @media (max-width: 60rem) {
      grid-column: 1 / -1;
    }
  }

  .align-absolute-full {
    grid-column: 1 / -1;
  }

  .align-left {
    grid-column: 2 / 5;

    @media (max-width: 60rem) {
      grid-column: 2 / 3;
    }
  }

  .align-left-half {
    grid-column: 3 / 4;

    @media (max-width: 60rem) {
      grid-column: 2 / 3;
    }
  }

  .align-left-half-wide {
    grid-column: 2 / 4;

    @media (max-width: 60rem) {
      grid-column: 2 / 3;
    }
  }

  .align-right-half {
    grid-column: 4 / 5;

    @media (max-width: 60rem) {
      grid-column: 3 / 4;
    }
    
    @media (max-width: 30rem) {
      grid-column: 2 / 3;
    }
  }

  .align-right-half-wide {
    grid-column: 4 / 6;

    @media (max-width: 60rem) {
      grid-column: 3 / 4;
    }
    
    @media (max-width: 30rem) {
      grid-column: 2 / 3;
    }
  }

  .align-right-wide {
    grid-column: 3 / -1;

    @media (max-width: 60rem) {
      grid-column: 2 / 4;
    }
    
    @media (max-width: 30rem) {
      grid-column: 2 / 3;
    }
  }

  .align-right-pop {
    position: relative;
    grid-column: 5 / 6;

    > * {
      position: absolute;
      left: 1rem;
      top: 0;
      max-width: calc(100% - 1rem);
    }

    @media (max-width: 80rem) {
      grid-column: 3 / 5;

      > * {
        position: static;
      }
    }
    
    @media (max-width: 60rem) {
      grid-column: 2 / 4;
    }
    
    @media (max-width: 30rem) {
      grid-column: 2 / 3;
    }
  }

  .align-right-pop-firm {
    grid-column: 5 / 6;
    grid-row-end: -1;

    @media (max-width: 80rem) {
      grid-column: 3 / 5;
    }

    @media (max-width: 60rem) {
      grid-column: 2 / 4;
    }
    
    @media (max-width: 30rem) {
      grid-column: 2 / 3;
    }
  }

`
