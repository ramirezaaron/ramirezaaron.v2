import React from "react"

export default function Footer({ leftContent, centerContent, rightContent }){
  return <div className="footer">
    <div className="left-panel">
      {leftContent}
    </div>
    <div className="center-panel">
      {centerContent}
    </div>
    <div className="right-panel">
      {rightContent}
    </div>
  </div>
}
