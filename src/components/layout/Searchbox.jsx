import React from 'react'
import Flex from '../Flex'
import Container from '../Container'
import {BiMenuAltLeft} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {FaUserAlt,FaShoppingCart} from 'react-icons/fa'
import {GoTriangleDown} from 'react-icons/go'
import Paragraph from '../Paragraph'
import { Link } from 'react-router-dom'
import {useDispatch } from 'react-redux';
import { pagename } from '../../slices/breadcrumbSlice'


const Searchbox = () => {
  let dispatch =useDispatch()
  let handleBreadCrumb = (name)=>{
    dispatch(pagename(name))
  }
  return (
    <section className='py-10 bg-ash'>
      <Container>
         <Flex className="items-center">
            <div className='w-1/5'>
              <Flex className="items-center gap-x-2.5">
                <BiMenuAltLeft className='text-2xl'/>
                <Paragraph text="Shop by Category" className="text-sm"/>
              </Flex>
            </div>
            <div className='w-3/5 relative'>
                <input className='py-4 px-5 w-full' placeholder='Search Products'/>
                <BsSearch className='absolute top-1/2 right-5 -translate-y-1/2 text-2xl'/>
            </div>
            <Flex className='w-1/5 gap-x-10 justify-end'>
              <Flex className="gap-x-1">
                <Link to={"/sign-up"} onClick={()=> handleBreadCrumb("Sign up")} >
                   <FaUserAlt/>
                </Link>
                <GoTriangleDown/>
              </Flex>
                <FaShoppingCart/>
            </Flex>
         </Flex>
      </Container>
    </section>
  )
}

export default Searchbox