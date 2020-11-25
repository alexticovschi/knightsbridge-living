import React from "react"

import "./errorBanner.scss"

const ErrorBanner = ({ title, children }) => {
  return (
    <div className="grid-container">
      <div className="error-banner">
        <h1 className="error-banner__title">{title}</h1>
        <div className="error-banner__buttons">{children}</div>
      </div>
    </div>
  )
}

export default ErrorBanner
