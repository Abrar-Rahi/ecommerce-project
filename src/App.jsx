import "./App.css"
import Image from "./components/Image"
import List from "./components/List"
import img from "./assets/img1.webp"
import Facilities from "./components/Facilities"
import SubHeading from "./components/SubHeading"
import PortionHeading from "./components/PortionHeading"
import Button from "./components/Button"
import Product from "./components/Product"
import Flex from "./components/Flex"
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import PrevArrows from "./components/PrevArrows"
import NextArrows from "./components/NextArrows"
import Footer from "./components/Footer"


function App() {
  
  const settings = {
    
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrows />,
    prevArrow: <PrevArrows/>
  };

  return (
    <>
    
    <List text="abrar"/>
      <Image src={img}/>
      <Facilities/>
      <SubHeading text="sub Heading" className="text-49" />
      <PortionHeading text="portion heading"/>
      <Button text="add to cart"/>

      <Flex className="gap-x-5">
      <Product/>
      <Product/>
      </Flex>

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

        <Footer/>
    </>
  )
}

export default App
