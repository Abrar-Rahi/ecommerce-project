import React from 'react'
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import PrevArrows from "./PrevArrows"
import NextArrows from "./NextArrows"
import Product from "./Product"

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
          <Product/>
          </div>
     
          <div>
          <Product/>
          </div>
          <div>
          <Product/>
          </div>
          <div>
          <Product/>
          </div>
          <div>
          <Product/>
          </div>
          <div>
          <Product/>
          </div>
      </Slider>
    </Container>
  )
}

export default Slid