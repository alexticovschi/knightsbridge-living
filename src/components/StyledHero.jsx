import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <>
      <BackgroundImage className={className} fluid={img} home={home}>
        {children}
      </BackgroundImage>
    </>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 66px)" : "50vh")};
  background: ${props =>
    props.opacity
      ? "linear-gradient(to bottom right,rgb(40, 43, 42), rgba(0, 0, 0, 0.01))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => (props.marginTop ? "12rem" : 0)};
  top: ${props => (props.top ? "6rem" : 0)};

  @media screen and (min-width: 550px) and (max-width: 670px) {
    min-height: ${props => (props.home ? "120vh" : "80vh")};
  }

  @media screen and (max-width: 550px) {
    min-height: ${props => (props.home ? "80vh" : "80vh")};
  }

  @media only screen and (min-device-width: 600px) and (max-device-width: 960px) and (orientation: landscape) {
    min-height: 60vh;
  }
  @media only screen and (min-device-width: 600px) and (max-device-width: 960px) and (orientation: portrait) {
    min-height: 60vh;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    min-height: 60vh;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    min-height: 60vh;
  }
`
