import React from 'react'
import Image from './Image'
import Badge from './Badge'
import PortionHeading from './PortionHeading'
import Flex from './Flex'
import { AiFillHeart } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';
import { BsFillCartFill } from 'react-icons/bs';
import Container from './Container'
import { addtocart } from '../slices/cartSlice'
import {useDispatch } from 'react-redux';
import { sidecart } from '../slices/cartSlice'

const Product = ({productName,className,src,price,badge}) => {

    let dispatch = useDispatch()
    let handleCart = ()=>{
        dispatch(sidecart(true))
        dispatch(addtocart({
            title : productName,
            price : 44,
            image : src,
            quantity : 1,
        }))  
    }
  return (
  <Container>
     <div className={`relative w-370  ${className}`}>
     <div className=' relative overflow-hidden group'>
           <Image src={`http://localhost:1337${src}`} className="w-full"/>
           <Badge text={badge}/>
        <div className='bg-white p-5 absolute -bottom-32 left-0 w-full group-hover:bottom-0 duration-500'>
                <Flex className='items-center justify-end  gap-x-4'>
                    <p className='font-dm font-regular text-base'>Add to Wish List</p>
                    <AiFillHeart/>
                </Flex>
                <Flex className='items-center justify-end  gap-x-4 my-5'>
                    <p className='font-dm font-regular text-base'>Compare</p>
                    <BiGitCompare/>
                </Flex>
                <div onClick={handleCart} className='flex items-center justify-end  gap-x-4 cursor-pointer'>
                    <p className='font-dm font-regular text-base'>Add to Cart</p>
                    <BsFillCartFill/>
                </div>
        </div>
    </div>
       <div className='w-370'>
                <Flex className="items-center justify-between">
                    <PortionHeading text={productName} className="text-xl"/>
                    <p className='font-dm font-regular text-base text-76'>{price}$</p>
                </Flex>
       </div>
   </div>
  </Container>
  )
}

export default Product