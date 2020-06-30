import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Renderer = ({ children }) => {
  return (
    <MDXProvider>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )
}

export default Renderer
