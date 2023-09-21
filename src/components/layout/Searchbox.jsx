import React, { useState } from 'react'
import Flex from '../Flex'
import Container from '../Container'
import {BiMenuAltLeft} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {FaUserAlt,FaShoppingCart} from 'react-icons/fa'
import {GoTriangleDown} from 'react-icons/go'
import {RxCross2} from 'react-icons/rx'
import Paragraph from '../Paragraph'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import { pagename } from '../../slices/breadcrumbSlice'


const Searchbox = () => {
  
  let [openCart,setOpenCart] = useState(false)

  let dispatch =useDispatch()
  let handleBreadCrumb = (name)=>{
    dispatch(pagename(name))
    console.log(name);
  }

  let cart = useSelector(state=> state.cart.cartItem)
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
                <Link onClick={()=> handleBreadCrumb("Sign up")} to={"/sign-up"}>
                   <FaUserAlt/>
                </Link>
                <GoTriangleDown/>
              </Flex>
                <FaShoppingCart className='cursor-pointer' onClick={()=>setOpenCart(true)}/>{cart.length}
            </Flex>
         </Flex>

         {openCart &&
         <div className='w-1/4 h-screen bg-red-300 absolute top-0 right-0 z-10'>
             <RxCross2 className='text-5xl cursor-pointer' onClick={()=>setOpenCart(false)}/>
            <ul>
            {cart.map(item=>(
               <li>{item.title} - {item.quantity}</li>
               ))}
            </ul>
         </div>
         }
      </Container>
    </section>
  )
}

export default Searchbox