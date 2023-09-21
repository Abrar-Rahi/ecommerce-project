import React from 'react'
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import PrevArrows from "./PrevArrows"
import NextArrows from "./NextArrows"
import Product from "./Product"
import img from "../assets/img1.webp"
import watch from "../assets/watch.webp"
import tableWatch from "../assets/tableWatch.webp"
import toy from "../assets/toy.webp"
import glass from "../assets/glass.webp"
import cap from "../assets/cap.webp"


import Container from './Container';

const Slid = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrows />,
        prevArrow: <PrevArrows/>
      };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <Product src={img}  className="mx-5" productName="Basic Crew Neck Tee"/>
        </div>
        <div>
          <Product src={watch} className="mx-5" productName="Basic Crew Neck Tee"/>
        </div>
        <div>
          <Product src={tableWatch} className="mx-5" productName="Basic Crew Neck Tee"/>
        </div>
        <div>
          <Product src={toy} className="mx-5" productName="Basic Crew Neck Tee"/>
        </div>
        <div>
          <Product src={glass} className="mx-5" productName="Basic Crew Neck Tee"/>
        </div>
        <div>
          <Product src={cap} className="mx-5" productName="Basic Crew Neck Tee"/>
        </div>
      </Slider>
    </Container>
  )
}

export default Slid