import React from "react"
import Slider from "react-slick"
import SliderCard from "../SliderCard/SliderCard"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slider.scss"

const settings = {
  dots: true,
  // arrows: false,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 600,
        dots: true,
      },
    },
  ],
}

const getBenefits = graphql`
  {
    benefits: allContentfulBenefits {
      edges {
        node {
          id
          title
          content {
            content
          }
          icon {
            file {
              url
            }
          }
        }
      }
    }
  }
`

const MySlider = () => {
  const response = useStaticQuery(getBenefits)
  const benefits = response.benefits.edges

  console.log(benefits)

  return (
    <Slider {...settings} className="sldr mt">
      {benefits.map(({ node }) => (
        <SliderCard key={node.id} benefit={node} />
      ))}
    </Slider>
  )
}

export default MySlider
