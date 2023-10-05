import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Product from '../components/Product'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import banner from '../assets/banner.webp'
import add3 from '../assets/add3.webp'
import add2 from '../assets/add2.webp'
import add1 from '../assets/add1.webp'
import bag from '../assets/bag.webp'
import bag2 from '../assets/bag2.webp'
import bati from '../assets/bati.webp'
import cap from '../assets/cap.webp'
import table from '../assets/table.webp'
import glass from '../assets/glass.webp'
import headphone from '../assets/headphone.webp'
import secAdd from '../assets/2ndAdd.webp'
import flowerTop from '../assets/flowerTop.webp'
import Facilities from '../components/Facilities'
import Slid from '../components/Slid'
import {FaShoppingCart} from 'react-icons/fa'

const Homepage = () => {
  return (
   <>
              {/* banner section */}
  {/* <section className='pb-140'>
      <div className='bg-bannerBG'>
        <Image src={banner} className="mx-auto"/>
      </div>
      <Facilities className=" py-5 border-y border-solid border-ash0"/>
  </section> */}

              {/* add section start*/}

  {/* <section className='pb-32'>
    <Container>
    <Flex className="gap-x-10">
      <div className='w-1/2'>
          <Image src={add3}/>
      </div>
      <div className='w-1/2 flex flex-col gap-y-10'>
          <Image src={add2}/>
          <Image src={add1}/>
      </div>
    </Flex>
    </Container>
  </section> */}
               {/* add section end*/}

               {/* New arrival section start*/}

  {/* <section className='pb-32'>
    <Container>
      <SubHeading className="mb-12" text="New Arrivals"/>
      <Slid/>
    </Container>
  </section> */}

                {/* New arrival section end*/}


                {/* Bestsellers section start*/}

  <div className='w-16 h-16 bg-ash0 fixed right-0 top-1/2 rounded-full  '>
    <FaShoppingCart className='text-2xl absolute top-24% left-29% '/>
    <p className='absolute bottom-0 left-[36%] w-5 h-5  rounded-full'> <span className='ml-1.5'>0</span></p>
  </div>

  <section className='pb-32'>
    <Container>
      <SubHeading className="mb-12" text="Our Bestsellers"/>
        <Flex>
          <Product src={bag} productName="product 1"/>
          <Product src={bati} productName="product 2"/>
          <Product src={bag2} productName="product 3"/>
          <Product src={flowerTop} productName="product 4"/>
        </Flex>
    </Container>
    </section>              
                {/* Bestsellers section end*/}

                
                {/* add section start*/}
  {/* <Container className="pb-32">
    <Image src={secAdd}/>
  </Container>               */}
                {/* add section end*/}

                
                {/* Special Offers section start*/}

  <section className='pb-36'>
    <Container>
      <SubHeading className="mb-12" text="Special Offers"/>
        <Flex>
          <Product src={glass} productName="Sun Glass"/>
          <Product src={table} productName="Tea Table"/>
          <Product src={cap} productName="Head Cap"/>
          <Product src={headphone} productName="Headphone"/>
        </Flex>
    </Container>
    </section>              
                {/* Special Offers section end*/}















               
    
   </>
  )
}

export default Homepage