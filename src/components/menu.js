import React from "react"
import { Link } from "gatsby";

export default function Menu({ menu }) {
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
    return <Link key={index} to={to} activeClassName="active">{ link.title }</Link>
  })

  return(
    <div className="topnav" id="mainMenu">
      <a className="icon" onClick={() => { toggleMenu(); }}>
        <i className="burger-menu">&equiv;</i>
      </a>
      {links}
  </div>)  
}
