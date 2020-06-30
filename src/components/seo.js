import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// import preview from "../images/preview.jpg"

const SEO = ({ description, lang, meta, title, subtitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} ${subtitle ? ` - ${subtitle}` : ``}`}
      titleTemplate={
        title === "LGRQVST" ? `%s` : `%s | ${site.siteMetadata.title}`
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // {
        //   property: `og:image`,
        //   content: preview,
        // },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@lgrqvst`,
        },
        // {
        //   name: `twitter:image`,
        //   content: preview,
        // },
        // {
        //   name: `twitter:image:alt`,
        //   content: ``,
        // },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  title: `LGRQVST`,
  description: ``,
  subtitle: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}
