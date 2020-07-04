import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ContactForm, Figure, Lede } from "./mdx"

const Renderer = ({ children }) => {
  const shortcodes = { ContactForm, Figure, Lede }

  return (
    <MDXProvider components={shortcodes}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )
}

export default Renderer
