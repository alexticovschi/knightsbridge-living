import React from "react"
import Slider from "react-slick"
import SliderCard from "../SliderCard/SliderCard"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slider.scss"

const settings = {
  dots: false,
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
        slidesToShow: 1,
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

const getReviews = graphql`
  {
    reviews: allContentfulReviews {
      edges {
        node {
          id
          label
          title
          content {
            content
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const MySlider = () => {
  const response = useStaticQuery(getReviews)
  const reviews = response.reviews.edges

  return (
    <Slider {...settings} className="sldr mt">
      {reviews.map(({ node }) => (
        <SliderCard key={node.title} review={node} />
      ))}
    </Slider>
  )
}

export default MySlider
