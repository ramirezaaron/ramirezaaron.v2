import React from "react"
import { Link } from "gatsby";

export default function Menu({ menu, siteTitle }) {
  const toggleMenu = () => {
    var x = document.getElementById("mainMenu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  const links = menu.map((item, index) => {
    const link = item.node
    const to = "/" + link.slug
    return <Link key={index} to={to} className="menu-item" activeClassName="active">{ link.title }</Link>
  })

  return(
    <div className="topnav" id="mainMenu">
      <Link to="/" className="home-link">{siteTitle}</Link>
      <a className="icon" onClick={() => { toggleMenu(); }}>
        <i className="burger-menu">&equiv;</i>
      </a>
      {links}
  </div>)  
}
