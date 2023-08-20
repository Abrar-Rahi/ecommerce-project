import React from 'react'
import { AiFillCar } from 'react-icons/ai';
import { PiNumberTwo } from 'react-icons/pi';
import { FaShippingFast } from 'react-icons/fa';
import ReturnIcon from './icons/ReturnIcon';
import Flex from "../components/Flex"

const Facilities = () => {
  return (
    <div>
        <Flex className="items-center gap-x-4">
        <PiNumberTwo />
        <p className='font-dm font-regular text-base'>Two years warranty</p>
        </Flex>

        <div className='flex items-center gap-x-4 '>
        <AiFillCar/>
        <p>Free shipping</p>
        </div>

        <div className='flex items-center gap-x-4 '>
        <ReturnIcon />
        <p>Return policy in 30 days</p>
        </div>
    </div>
  )
}

export default Facilities