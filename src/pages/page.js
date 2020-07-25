import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

export default function Page({ data }){
  const page = data.allWordpressPage.edges[0].node
  const lastUpdated = <p className="p-last-updated"> Last Updated: {page.modified} UTC</p>

  return (<Layout>
    <SEO title={page.title} />
    <h2 className="text-center"> {page.title} </h2>
    <div dangerouslySetInnerHTML={{__html: page.content}} />

    <Footer rightContent={ lastUpdated } />
  </Layout>)
}

// Se asigna $slug = "hello" porque es la página inicial 
export const pageQuery = graphql` 
query ($slug: String = "hello") {
  allWordpressPage(filter: {slug: {eq: $slug}}) {
    edges {
      node {
        title
        content
        slug
        date(formatString: "YYYY-MM-DD")
        modified(formatString: "YYYY-MM-DD HH:mm:ss")
      }
    }
  }
}
`
