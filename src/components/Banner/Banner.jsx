import React from "react"

import "./banner.scss"

const Banner = ({ titleFirst, titleSecond, info, children }) => {
  return (
    <div className="grid-container">
      <div className="banner">
        <h1 className="banner__title">
          <span className="banner__title--first">{titleFirst}</span>
          <br />
          <span className="banner__title--second">{titleSecond}</span>
        </h1>
        <p className="banner__info">{info}</p>
        {children}
      </div>
    </div>
  )
}

export default Banner
