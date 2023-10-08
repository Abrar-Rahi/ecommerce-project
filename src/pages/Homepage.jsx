import React, { useEffect, useState } from 'react'
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
import axios from 'axios'

const Homepage = () => {

  let [productData,setProductData] = useState([])
  let [bannerimg,setBannerimg] = useState([])
  let [addimg,setAddimg] = useState([])

 useEffect(()=>{
  async function myProduct(){
    let data = await axios.get("http://localhost:1337/api/products?populate=*")
    setProductData(data.data.data)
    
    let bannerData = await axios.get("http://localhost:1337/api/banners?populate=*")
       setBannerimg(bannerData.data.data[0].attributes.slider_Images.data)

    let addData = await axios.get("http://localhost:1337/api/adds?populate=*")
    setAddimg(addData.data.data[0].attributes.add_imeges.data)
    console.log(addimg[0].attributes.url);


  }
  myProduct()

 },[])

  


  return (
   <>
              {/* banner section */}
  <section className='pb-140'>
      <div className='bg-bannerBG'>
        {bannerimg.map(item=>(
         <>
         <Image src={`http://localhost:1337${item.attributes.url}`} className="mx-auto"/>
         {/* <h1>{item.attributes.slider_Images.data.attributes}</h1> */}
         
         </> 
       
        ))}
      </div>
      <Facilities className=" py-5 border-y border-solid border-ash0"/>
  </section>

              {/* add section start*/}

  <section className='pb-32'>
    <Container>
    <Flex className="gap-x-10">
      <div className='w-1/2'>
        {addimg.map(item=>(

          <Image src={`http://localhost:1337${item.attributes.url}`}/>
        ))}
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

  {/* <section className='pb-32'>
    <Container>
      <SubHeading className="mb-12" text="New Arrivals"/>
      <Slid/>
    </Container>
  </section> */}

                {/* New arrival section end*/}


                {/* Bestsellers section start*/}

  {/* <div className='w-16 h-16 bg-ash0 fixed right-0 top-1/2 rounded-full  '>
    <FaShoppingCart className='text-2xl absolute top-24% left-29% '/>
    <p className='absolute bottom-0 left-[36%] w-5 h-5  rounded-full'> <span className='ml-1.5'>0</span></p>
  </div> */}

  <section className='pb-32'>
    <Container>
      <SubHeading className="mb-12" text="Our Bestsellers"/>
        <Flex className="gap-x-10">
          {productData.map((item,index)=>(

           <div key={index}>
             <Product src={item.attributes.image.data.attributes.url} 
              productName={item.attributes.title} 
              price={item.attributes.price} 
              badge={item.attributes.badge}/>
             
           </div>


            

          ))}
          {/* <Product src={bati} productName="product 2"/>
          <Product src={bag2} productName="product 3"/>
          <Product src={flowerTop} productName="product 4"/> */}
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

  {/* <section className='pb-36'>
    <Container>
      <SubHeading className="mb-12" text="Special Offers"/>
        <Flex>
          <Product src={glass} productName="Sun Glass"/>
          <Product src={table} productName="Tea Table"/>
          <Product src={cap} productName="Head Cap"/>
          <Product src={headphone} productName="Headphone"/>
        </Flex>
    </Container>
    </section>               */}
                {/* Special Offers section end*/}















               
    
   </>
  )
}

export default Homepage