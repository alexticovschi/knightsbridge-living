import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const LivingWithUsStyledHero = ({ img, className, children, home }) => {
  return (
    <>
      <BackgroundImage className={className} fluid={img} home={home}>
        {children}
      </BackgroundImage>
    </>
  )
}

export default styled(LivingWithUsStyledHero)`
  height: calc(82rem - 66px);
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

  @media only screen and (min-device-width: 600px) and (max-device-width: 960px) and (orientation: portrait) {
    height: 50rem;
  }

  @media only screen and (min-device-width: 600px) and (max-device-width: 960px) and (orientation: landscape) {
    height: 70rem;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    height: 70rem;
  }
  @media only screen and (device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    height: 70rem;
  }

  @media screen and (max-width: 600px) {
    height: 55rem;
  }
`
