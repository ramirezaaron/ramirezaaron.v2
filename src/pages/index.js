import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }){
  return(<Layout>
    <SEO title="Home" />
    { 
      data.allWordpressPage.edges.map(({ node }) => (
        <div key={node.id}>
          <h2 className="text-center">{node.title}</h2>
          <div dangerouslySetInnerHTML={{__html: node.content}} />
        </div>
      ))
    }
  </Layout>
  )
}

export const pageQuery = graphql`
query {
  allWordpressPage(filter: {id: {eq: "b2bc8880-d4cc-5009-b979-b9b6aecb6f46"}}) {
    edges {
      node {
        id
        guid
        title
        content
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`
