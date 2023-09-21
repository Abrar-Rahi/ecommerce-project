import React from 'react'
import { AiFillCar } from 'react-icons/ai';
import { PiNumberTwo } from 'react-icons/pi';
import { FaShippingFast } from 'react-icons/fa';
import ReturnIcon from './icons/ReturnIcon';
import Flex from "../components/Flex"

import Container from './Container';

const Facilities = ({className}) => {
  return (
    
       <div className={className}>
        <Container>
        <Flex className="justify-between">
       <Flex className="items-center gap-x-4">
          <PiNumberTwo  className='text-2xl'/>
          <p className='font-dm font-regular text-base'>Two years warranty</p>
        </Flex>

        <Flex className='flex items-center gap-x-4 '>
          <AiFillCar/>
          <p>Free shipping</p>
        </Flex>

        <Flex className='flex items-center gap-x-4 '>
          <ReturnIcon />
          <p>Return policy in 30 days</p>
        </Flex>
       </Flex>
        </Container>
       </div>
        
    
  )
}

export default Facilities