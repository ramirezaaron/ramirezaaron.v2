/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Menu from "./menu"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      
      allWordpressWpApiMenusMenusItems {
        nodes {
          items {
            url
            title
            order
            object_slug
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const menu = data.allWordpressWpApiMenusMenusItems.nodes[0].items
  menu.sort((a,b) => (a.order > b.order) ? 1 : ((b.order < a.order) ? -1 : 0)); 

  return (
    <>
      {/*<Header style={{ textAlign: 'center'}} siteTitle={data.site.siteMetadata.title} />*/}
      <Menu menu={menu} siteTitle={siteTitle} />
      <div className="main-container"
        style={{
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
