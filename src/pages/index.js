import React from "react"
import { graphql, Link } from "gatsby"

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
          <Link to="/page">Home</Link>
        </div>
      ))
    }
  </Layout>
  )
}

export const pageQuery = graphql`
query {
  allWordpressPage(filter: {id: {eq: "ecc941e1-75b4-5595-a302-3ec5c01de9eb"}}) {
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
