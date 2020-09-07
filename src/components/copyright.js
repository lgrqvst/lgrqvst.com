import React from "react"
import styled from "styled-components"
import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsNc,
  FaCreativeCommonsSa,
  FaHeart,
} from "react-icons/fa"

const Copyright = () => {
  return (
    <CopyrightElement>
      <p>
        <span>
          Made with <FaHeart /> in Osaka.
        </span>
      </p>

      <LicenseIcons>
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"
        >
          <FaCreativeCommons />
          <FaCreativeCommonsBy />
          <FaCreativeCommonsNc />
          <FaCreativeCommonsSa />
        </a>
      </LicenseIcons>

      <p>
        <span>
          Except where otherwise noted,{" "}
          <span
            {...{ "xmlns:dct": "http://purl.org/dc/terms/" }}
            property="dct:title"
          >
            LGRQVST
          </span>{" "}
          by{" "}
          <a
            {...{ "xmlns:cc": "http://creativecommons.org/ns#" }}
            href="https://lgrqvst.com"
            property="cc:attributionName"
            rel="cc:attributionURL"
          >
            Johan Lagerqvist
          </a>{" "}
          is licensed under a{" "}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0
            International License
          </a>
          .
        </span>
      </p>
    </CopyrightElement>
  )
}

export default Copyright

const LicenseIcons = styled.div`
  margin: 0 0 0.5rem 0;
  font-size: 1.6em;
`

const CopyrightElement = styled.div`
  font-size: 0.625em;
  margin: 0 auto;

  @media (min-width: 48rem) {
    padding: 0 1rem 0 0;
  }

  p {
    margin: 0 0 1em 0;
    line-height: 2;

    &:last-child {
      margin: 0;
    }

    > span {
      background: var(--flush);
      box-shadow: 0.25rem 0.25rem 0 var(--flush),
        -0.25rem 0.25rem 0 var(--flush), 0.25rem -0.25rem 0 var(--flush),
        -0.25rem -0.25rem 0 var(--flush);
    }
  }

  a {
    color: var(--contrast);
    transition: color 0.25s;

    &:hover {
      color: var(--accent1);
    }
  }
`
