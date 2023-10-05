import React, { useEffect, useState } from 'react'
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
import { increase,decrease,remove,sidecart } from '../../slices/cartSlice'


const Searchbox = () => {

  // let [openCart,setOpenCart] = useState(false)
  let [subTotal,setSubTotal] = useState(0)

  let dispatch =useDispatch()
  let handleBreadCrumb = (name)=>{
    dispatch(pagename(name))
    
  }

  let cart = useSelector(state=> state.cart.cartItem)
  let popupcart = useSelector(state=>state.cart.addsidecart)
  
 
  let handleIncrease = (item)=>{
      dispatch(increase(item)) 
  }
  let handledecrease = (item)=>{
      dispatch(decrease(item)) 
  }
  let handleremove = (item)=>{
      dispatch(remove(item)) 
  }

 useEffect(()=>{
   let total = 0
  cart.map(item =>{
    total += item.price * item.quantity
  })
  setSubTotal(total)
 },[cart])

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
              <Link className='flex items-center gap-x-1' to={"/cart"}>
                 <FaShoppingCart className='cursor-pointer' onClick={()=>dispatch(sidecart(true))}/>
                ({cart.length})
              </Link>
            </Flex>
         </Flex>

    { popupcart &&
      <div className='w-1/3 h-screen bg-red-300 absolute top-32 right-0 z-10'>
            <RxCross2 className='text-5xl cursor-pointer' onClick={()=> dispatch(sidecart(false))}/>
            <ul className='flex justify-between px-1 py-2 bg-76 text-xl'>
              <li>action</li>
              <li>Title</li>
              <li>price</li>
              <li>quantity</li>
              <li>total</li>
            </ul>
          {cart.length > 0 ?
            cart.map(item=>(
            
            <ul className='flex justify-between px-1 py-2 bg-white mb-1 text-lg'>
              <li className='border border-solid border-red-700 rounded-full bg-red-500 p-1'><RxCross2 onClick={ ()=> handleremove(item)}/></li>
              <li>{item.title}</li>
              <li>{item.price}</li>
              <li className='flex gap-x-1 border border-solid px-2 font-bold border-ash cursor-pointer'>
                <p onClick={ ()=> handleIncrease(item)}>+</p>
                {item.quantity}
                <p onClick={ ()=> handledecrease(item)}>-</p>
                
              </li>
              <li>{item.price * item.quantity}</li>
            </ul>
              ))
          :
          <h1 className='text-center font-pop font-bold text-xl'>Cart is empty</h1>
        }
          <h1 className='text-end mt-10 mr-2'>subTotal: {subTotal}</h1> 
      </div>
    }
      </Container>
    </section>
  )
}

export default Searchbox