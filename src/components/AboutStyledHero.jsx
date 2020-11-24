import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const AboutStyledHero = ({ img, className, children, buildings }) => {
  return (
    <>
      <BackgroundImage className={className} fluid={img} buildings={buildings}>
        {children}
      </BackgroundImage>
    </>
  )
}

export default styled(AboutStyledHero)`
  min-height: calc(60rem - 66px);
  background: ${props =>
    props.opacity
      ? "linear-gradient(to bottom right,rgb(40, 43, 42), rgba(0, 0, 0, 0.01))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 550px) {
    height: 80rem;
  }

  @media only screen and (min-device-width: 600px) and (max-device-width: 960px) and (orientation: landscape) {
    height: 100%;
  }
  @media only screen and (min-device-width: 600px) and (max-device-width: 960px) and (orientation: portrait) {
    height: 60rem;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    height: 70rem;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    height: 70rem;
  }
`
