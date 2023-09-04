import React from 'react'
import { AiFillCar } from 'react-icons/ai';
import { PiNumberTwo } from 'react-icons/pi';
import { FaShippingFast } from 'react-icons/fa';
import ReturnIcon from './icons/ReturnIcon';
import Flex from "../components/Flex"
import { Link } from 'react-router-dom';
import Container from './Container';

const Facilities = () => {
  return (
    <Container>
        <Flex className="items-center gap-x-4">
        <PiNumberTwo />
        <p className='font-dm font-regular text-base'>Two years warranty</p>
        </Flex>
        <Link to={"/abrar"}>

        <div className='flex items-center gap-x-4 '>
        <AiFillCar/>
        <p>Free shipping</p>
        </div>
        </Link>

        <div className='flex items-center gap-x-4 '>
        <ReturnIcon />
        <p>Return policy in 30 days</p>
        </div>
    </Container>
  )
}

export default Facilities