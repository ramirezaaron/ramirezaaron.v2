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
      allWordpressPage {
        edges {
          node {
            id
            title
            slug
            menu_order
          }
        }
      }
    }
  `)


  const menu = data.allWordpressPage.edges
  menu.sort((a,b) => (a.node.menu_order > b.node.menu_order) ? 1 : ((b.node.menu_order < a.node.menu_order) ? -1 : 0)); 
  return (
    <>
      {/*<Header style={{ textAlign: 'center'}} siteTitle={data.site.siteMetadata.title} />*/}
      <Menu menu={menu} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "60%",
          padding: `0 1.0875rem 1.45rem`,
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
