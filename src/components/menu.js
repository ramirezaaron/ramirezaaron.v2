import React from "react"
import { Link } from "gatsby";

export default function Menu({ menu, siteTitle }) {
  const toggleMenu = () => {
    var x = document.getElementById("mainMenu");
    var spanMenu = document.getElementById("menu-trigger")
    if (x.className === "topnav") {
      x.className += " responsive";
      spanMenu.innerHTML = "&times;"
    } else {
      x.className = "topnav";
      spanMenu.innerHTML = "&bull;&bull;&bull;"
    }
  }
  
  const links = menu.map((item, index) => {
    const to = "/" + item.object_slug
    return <Link key={index} to={to} className="menu-item" activeClassName="active">{ item.title }</Link>
  })

  return(
    <div className="topnav" id="mainMenu">
      <Link to="/" className="home-link">{siteTitle}</Link>
      <a className="icon" onClick={() => { toggleMenu(); }}>
        <span id="menu-trigger" className="burger-menu">&bull;&bull;&bull;</span>
      </a>
      {links}
  </div>)  
}
