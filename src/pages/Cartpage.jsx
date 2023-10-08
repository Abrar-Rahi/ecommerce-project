import React, { useEffect, useState } from 'react'
import Container from "../components/Container"
import SubHeading from "../components/SubHeading"
import PortionHeading from '../components/PortionHeading'
import { useSelector,useDispatch } from 'react-redux'
import Image from '../components/Image'
import {RxCross2} from "react-icons/rx"
import {increase,decrease,remove } from '../slices/cartSlice' 

const Cartpage = () => {

    let dispatch = useDispatch()
    let cart = useSelector(state => state.cart.cartItem)

    let [subTotal,setSubTotal] = useState(0)
    
    useEffect(()=>{
        let total = 0
        cart.map(item =>{
            total += item.price * item.quantity
        })
        setSubTotal(total)

    },[cart])

  return (
    <section className='pb-36 pt-20 '>
        <Container>
           <SubHeading text="Cart" className="text-49 mb-32"/>
           <ul className='flex py-8 px-5 bg-ash'>
            <li className='w-6/12'><PortionHeading text="Product"/></li>
            <li className='w-3/12'><PortionHeading text="Price"/></li>
            <li className='w-3/12'><PortionHeading text="Quantity"/></li>
            <li className='w-3/12'><PortionHeading text="Total"/></li>
           </ul>
           {cart.length > 0 ?
           <>
            {cart.map(item =>(
                <ul className='flex items-center py-8 px-5 border border-solid border-ash0'>
                    <li className='flex items-center w-6/12'>
                        <button><RxCross2 onClick={()=>dispatch(remove(item))}/></button>
                        <Image className="w-100 h-100 ml-10 mr-5" src={item.image}/>
                        <span className='font-dm font-bold text-base text-black '>{item.title}</span>
                    </li>
    
                    <li className='font-dm font-bold text-xl text-black w-3/12 '>{item.price}$</li>
    
                    <li className='font-dm font-normal text-base text-black w-3/12  '>
                        <span className='border border-solid border-ash0 py-1 px-5 '>
                        <button onClick={()=> dispatch(increase(item))} className='mr-4'>+</button>
                        {item.quantity}
                        <button onClick={()=> dispatch(decrease(item))} className='ml-4'>-</button>
                        </span>
                    </li>
    
                    <li className='font-dm font-bold text-xl text-black w-3/12'>{item.price*item.quantity}$</li>
                </ul>
               ))}

            <div className='flex'>
                <div className='w-2/3'></div>
                <div className='text-end mt-12 w-1/3'>
                    <PortionHeading text="Cart Totals" className="text-xl mb-6"/>
                    <ul className='flex justify-between py-4 px-5 border border-solid border-ash0'>
                        <li><PortionHeading text='SubTotal'/></li>
                        <li className='font-dm text-base font-normal'>{subTotal}$</li>
                    </ul>
                    <ul className='flex justify-between py-4 px-5 border border-solid border-ash0'>
                        <li><PortionHeading text='Shiping cost'/></li>
                        <li className='font-dm text-base font-normal'>
                        {subTotal>1000 ?
                         "free"
                           :
                         "10$"    
                        }
                        </li>
                    </ul>
                    <ul className='flex justify-between py-4 px-5 border border-solid border-ash0'>
                        <li><PortionHeading text='Total'/></li>
                        <li className='font-dm text-base font-normal'>
                        {subTotal>1000 ?
                         <span>{subTotal}$</span>
                           :
                        <span>{subTotal+10}$</span>
                        }
                        </li>
                    </ul>
            </div>
            </div>
            </>  
           :
           <SubHeading text="The Cart is Empty Now Please Add To Cart Some Product" className="text-center mt-10"/>
           }
           
        </Container>
    </section>
  )
}

export default Cartpage