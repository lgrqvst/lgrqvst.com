import React from "react"
import styled from "styled-components"
import UnstyledImg from "gatsby-image"

import SEO from "./seo"

const Page = ({
  children,
  title,
  subtitle,
  description,
  headerImgSrc,
  headerImgCredit,
  headerImgCreditLink,
  headerImgAlt,
  element = "article",
  type,
}) => {
  return (
    <>
      <SEO title={title} subtitle={subtitle} description={description} />
      <main>
        <PageElement as={element}>
          {title && (
            <header>
              <Title>{title}</Title>
              {subtitle && (
                <Subtitle>
                  <span>{subtitle}</span>
                </Subtitle>
              )}
            </header>
          )}
          {headerImgSrc && <Img fluid={headerImgSrc} alt={headerImgAlt} />}
          {children}
        </PageElement>
      </main>
    </>
  )
}

export default Page

const PageElement = styled.article`
  grid-area: page;

  display: grid;

  grid-template-columns: 1fr 11rem 20rem 20rem 27.5rem 1fr;

  @media (max-width: 80.5rem) {
    grid-template-columns: 1rem 11rem 20rem 20rem 1fr 1rem;
  }

  @media (max-width: 60rem) {
    grid-template-columns: 3rem 1fr 1fr 3rem;
  }

  @media (max-width: 48rem) {
    grid-template-columns: 1rem 1fr 1fr 1rem;
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1rem auto 1rem;
  }

  .is-home & {
    margin-top: 7rem;

    @media (max-width: 48rem) {
      margin-top: 2rem;
    }
  }
`

const Title = styled.h1`
  margin: 3rem 0 3rem calc(-4rem - 0.0625em);
  font-size: 8rem;
  font-weight: 500;
  line-height: 1;
  text-transform: none;

  @media (max-width: 60rem) {
    font-size: 6rem;
    margin: 1rem 0 1rem 0;
  }

  @media (max-width: 48rem) {
    font-size: 5rem;
  }

  @media (max-width: 30rem) {
    margin: 1rem 0 1rem 0;
    font-size: 4rem;
  }
`

const Subtitle = styled.p`
  display: block;
  margin: -1rem 0 2rem -4rem;
  padding: 0 0.5rem;
  font-size: 2rem;
  font-family: "Rajdhani", sans-serif;
  line-height: 1;
  text-transform: uppercase;

  span {
    display: inline;
    /* padding: 0.3em 0.5em 0.25em; */
    /* border-radius: 0.25rem; */
    background: var(--accent1);
    line-height: 1.5;
    box-shadow: 0.5rem 0.25rem 0 var(--accent1),
      -0.5rem 0.25rem 0 var(--accent1), 0.5rem -0.25rem 0 var(--accent1),
      -0.5rem -0.25rem 0 var(--accent1);
  }

  @media (max-width: 60rem) {
    margin: 2rem 0 1rem 0;
  }

  @media (max-width: 30rem) {
    font-size: 1.5rem;
  }
`

const Img = styled(UnstyledImg)`
  margin: 1rem 0 2rem 0;

  /* @media (max-width: 80rem) { */
  grid-column: 2 / -1;
  /* } */

  @media (max-width: 60rem) {
    grid-column: 1 / -1;
  }

  @media (max-width: 30rem) {
    margin: 1rem 0 1rem 0;
  }
`
