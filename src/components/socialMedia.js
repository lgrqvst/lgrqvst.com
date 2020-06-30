import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faGithub,
  faCodepen,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const SocialMedia = () => {
  const socialMediaData = [
    {
      name: "Twitter",
      link: "https://twitter.com/lgrqvst",
      icon: faTwitter,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/lgrqvst",
      icon: faInstagram,
    },
    {
      name: "GitHub",
      link: "https://github.com/lgrqvst",
      icon: faGithub,
    },
    {
      name: "CodePen",
      link: "https://codepen.io/lgrqvst",
      icon: faCodepen,
    },
    {
      name: "ArtStation",
      link: "https://artstation.com/lgrqvst",
      icon: faArtstation,
    },
    {
      name: "hello@lgrqvst.com",
      link: "mailto:hello@lgrqvst.com",
      icon: faPaperPlane,
    },
  ]

  const socialMedia = socialMediaData.map((item) => (
    <li key={item.name}>
      <a href={item.link}>
        <FontAwesomeIcon icon={item.icon} /> {item.name}
      </a>
    </li>
  ))

  return <List>{socialMedia}</List>
}

export default SocialMedia

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    margin: 0.5em 0;
  }

  a {
    text-decoration: none;

    &:hover {
      color: var(--accent1);
    }
  }
`
