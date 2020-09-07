import React from "react"
import styled from "styled-components"
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaCodepen,
  FaArtstation,
  FaPaperPlane,
} from "react-icons/fa"

const SocialMedia = () => {
  const socialMediaData = [
    {
      name: "Twitter",
      link: "https://twitter.com/lgrqvst",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/lgrqvst",
      icon: FaInstagram,
    },
    {
      name: "GitHub",
      link: "https://github.com/lgrqvst",
      icon: FaGithub,
    },
    {
      name: "CodePen",
      link: "https://codepen.io/lgrqvst",
      icon: FaCodepen,
    },
    {
      name: "ArtStation",
      link: "https://artstation.com/lgrqvst",
      icon: FaArtstation,
    },
    {
      name: "hello@lgrqvst.com",
      link: "mailto:hello@lgrqvst.com",
      icon: FaPaperPlane,
    },
  ]

  const socialMedia = socialMediaData.map((item) => (
    <li key={item.name}>
      <a href={item.link}>
        <item.icon /> {item.name}
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
