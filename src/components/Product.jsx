import React from 'react'
import Image from './Image'
import img from "../assets/img1.webp"
import Badge from './Badge'
import PortionHeading from './PortionHeading'
import Flex from './Flex'
import { AiFillHeart } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import Container from './Container'

const Product = ({text}) => {
  return (
  <Container>
     <div className='mx-10'>
     <div className=' relative overflow-hidden group'>
        <Image src={img} className="w-full"/>
        
          <Badge text="New"/>
        

        <div className='bg-white p-5 absolute -bottom-32 left-0 w-full group-hover:bottom-0 duration-500'>
                <Flex className='items-center justify-end  gap-x-4'>
                    <p className='font-dm font-regular text-base'>Add to Wish List</p>
                    <AiFillHeart/>
                </Flex>
                <Flex className='items-center justify-end  gap-x-4 my-5'>
                    <p className='font-dm font-regular text-base'>Compare</p>
                    <BiGitCompare/>
                </Flex>
                <Flex className=' items-center justify-end  gap-x-4'>
                    <p className='font-dm font-regular text-base'>Add to Cart</p>
                    <BsFillCartFill/>
                </Flex>
        </div>
    </div>
       <div className=''>
                <Flex className="items-center justify-between">
                    <PortionHeading text="Basic Crew Neck Tee" className="text-xl"/>
                    <p>$44.00</p>
                </Flex>
       </div>
   </div>
   
  </Container>
  )
}

export default Product