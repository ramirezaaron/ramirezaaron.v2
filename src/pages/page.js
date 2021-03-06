import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import Footer from "../components/footer"

export default function Page({ data }){
  if(data.allWordpressPage.edges[0] == undefined)
    return <></>

  const page = data.allWordpressPage.edges[0].node
  //const lastUpdated = <p className="p-last-updated"> Last Updated: {page.modified} UTC</p>

  return (<Layout>
    <SEO title={page.title} />
    <h2 className="text-center"> {page.title} </h2>
    <div dangerouslySetInnerHTML={{__html: page.content}} />
  </Layout>)
}
//<Footer rightContent={ lastUpdated } />

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
