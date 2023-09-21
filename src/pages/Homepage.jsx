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

const Homepage = () => {
  return (
   <>
              {/* banner section */}
  <section className='pb-140'>
      <div className='bg-bannerBG'>
        <Image src={banner} className="mx-auto"/>
      </div>
      <Facilities className=" py-5 border-y border-solid border-ash0"/>
  </section>

              {/* add section start*/}

  <section className='pb-32'>
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
  </section>
               {/* add section end*/}

               {/* New arrival section start*/}

  <section className='pb-32'>
    <Container>
      <SubHeading className="mb-12" text="New Arrivals"/>
      <Slid/>

    </Container>
  </section>

                {/* New arrival section end*/}


                {/* Bestsellers section start*/}

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
  <Container className="pb-32">
    <Image src={secAdd}/>
  </Container>              
                {/* add section end*/}

                
                {/* Bestsellers section start*/}

  <section className='pb-36'>
    <Container>
      <SubHeading className="mb-12" text="Special Offers"/>
        <Flex>
          <Product src={glass} productName="Basic Crew Neck Tee"/>
          <Product src={table} productName="Basic Crew Neck Tee"/>
          <Product src={cap} productName="Basic Crew Neck Tee"/>
          <Product src={headphone} productName="Basic Crew Neck Tee"/>
        </Flex>
    </Container>
    </section>              
                {/* Bestsellers section end*/}















               
    
   </>
  )
}

export default Homepage