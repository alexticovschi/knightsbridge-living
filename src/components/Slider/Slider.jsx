import React from "react"
import Slider from "react-slick"
import SliderCard from "../SliderCard/SliderCard"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
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

const MySlider = ({ data }) => {
  return (
    <Slider {...settings} className="sldr mt">
      {data.map(({ node }) => (
        <SliderCard key={node.title} data={node} />
      ))}
    </Slider>
  )
}

export default MySlider
