import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const BuildingsStyledHero = ({ img, className, children, buildings }) => {
  return (
    <>
      <BackgroundImage className={className} fluid={img} buildings={buildings}>
        {children}
      </BackgroundImage>
    </>
  )
}

export default styled(BuildingsStyledHero)`
  min-height: ${props => (props.buildings ? "calc(25vh - 66px)" : "80vh")};
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

  @media screen and (max-width: 550px) {
    min-height: 25vh;
  }
`
