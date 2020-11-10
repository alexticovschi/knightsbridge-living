import React from "react"
import Slider from "react-slick"
import BulidingSliderCard from "../BulidingSliderCard/BulidingSliderCard"
import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"
import "./buildingSlider.scss"

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

const BuildingSlider = ({ reviews, buildingName }) => {
  return (
    <Slider {...settings} className="building-slider mt">
      {reviews.edges.map(({ node }) => (
        <BulidingSliderCard
          key={node.title}
          review={node}
          buildingName={buildingName}
        />
      ))}
    </Slider>
  )
}

export default BuildingSlider
