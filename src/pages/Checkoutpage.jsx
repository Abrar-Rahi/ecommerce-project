import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import {FaAngleRight} from "react-icons/fa"
import Flex from '../components/Flex'
import Paragraph from '../components/Paragraph'
import PortionHeading from '../components/PortionHeading'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Checkoutpage = () => {
    const breadcrumbName = useSelector((state)=>state.breadcrumb.previousname)

    let [world,setWorld] = useState([])

    useEffect(()=>{
        async function country(){
            let countryName = await axios.get("https://restcountries.com/v3.1/all")
            setWorld(countryName.data);
        }
        country()

    },[])

  return (
    <Container className="mt-32 mb-36">
        <SubHeading text="Checkout" className="text-49 "/>

        <Flex className="items-center">
        <Link to={breadcrumbName == "Home" ? "/" : breadcrumbName == "Sign up" ? "/sign-up" : `/${breadcrumbName.toLowerCase()}`}>
            <p className='font-dm font-normal text-xs text-6d'>{breadcrumbName}</p>
        </Link>
        <FaAngleRight className='text-6d text-xs mx-1'/>
        <p className='first-letter:uppercase font-dm font-normal text-xs text-6d'>{window.location.pathname.replace("/","")}</p>
        </Flex>

       <Flex className="my-32">
            <Paragraph className="text-76" text="Have a Cupon?"/>
            <Link>Click here to enter your code</Link>
       </Flex>

       <SubHeading text="Billing Details" className="mb-10"/>
       <Flex className="gap-x-10">
        <div>
            <PortionHeading text="First Name *" className="mb-2.5"/>
            <input type="text" placeholder='First Name' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
            </div>
            
            <div>
            <PortionHeading text="Last Name *" className="mb-2.5"/>
            <input type="text" placeholder='Last Name' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
            </div>
       </Flex>

          <Flex className="flex-col gap-y-6 mt-6">
          <div>
            <PortionHeading text="Companye Name (optional)" className="mb-2.5"/>
            <input type="text" placeholder='Company Name' className='border-b border-solid border-ash0 w-1055 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
            </div> <div>

            <PortionHeading text="Country *" className="mb-2.5"/>
            
            <select className='w-1055 border-b border-solid border-ash0 pb-4' >
                <option >
                   select your country
                </option>
                
                    {world.map(item=>(
                      <option>{item.name.common}</option>  
                    ))}
                
            </select>

            </div> <div>
            <PortionHeading text="Street Address *" className="mb-2.5"/>
            <input type="text" placeholder='House number and street name' className='border-b border-solid border-ash0 w-1055 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
            <input type="text" placeholder='Apartment, suite, unit etc. (optional)' className='border-b border-solid border-ash0 w-1055 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4 mt-6'/>
            </div> <div>
            <PortionHeading text="Town/City *" className="mb-2.5"/>
            <input type="text" placeholder='Town/City' className='border-b border-solid border-ash0 w-1055 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
            </div> <div>
            <PortionHeading text="County (optional)" className="mb-2.5"/>
            <input type="text" placeholder='County' className='border-b border-solid border-ash0 w-1055 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
            </div> <div>
            <PortionHeading text="Post Code *" className="mb-2.5"/>
            <input type="text" placeholder='Post Code' className='border-b border-solid border-ash0 w-1055 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
            </div> <div>
            <PortionHeading text="Phone *" className="mb-2.5"/>
            <input type="text" placeholder='Phone' className='border-b border-solid border-ash0 w-1055 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
            </div> <div>
            <PortionHeading text="Email Address *" className="mb-2.5"/>
            <input type="text" placeholder='Email' className='border-b border-solid border-ash0 w-1055 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
            </div>
          </Flex>

          <SubHeading text="Billing Details" className="mb-10 mt-32"/>
          <div>
            <PortionHeading text="Other Notes (optional)" className="mb-2.5"/>
            <input type="text" placeholder='Notes about your order, e.g. special notes for delivery.' className='border-b border-solid border-ash0 w-1055 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-20'/>
         </div>

         <SubHeading text="Your Order" className="mb-10 mt-32"/>

         <table className='border-collapse border border-red-500 w-644 mb-15'>
            <thead className='text-left '>
                <tr >
                    <th  className="border border-solid border-ash0  py-3 pl-5">Product</th>
                    <th  className="border border-solid border-ash0 font-dm font-regular text-base text-76  py-3 pl-5">Total</th>
                </tr>
            </thead>
            <tbody >
                <tr >
                    <td className="font-dm font-bold text-base text-blk26 border border-solid border-ash0 pl-5 py-3">Product name x 1</td>
                    <td className="border border-solid border-ash0 font-dm font-regular text-base text-76 pl-5 py-3">389.99 $</td>
                   
                </tr>
                <tr >
                    <td className="border border-solid border-ash0 font-dm font-bold text-base text-blk26 pl-5 py-3">Subtotal</td>
                    <td className="border border-solid border-ash0 font-dm font-regular text-base text-76 pl-5 py-3">389.99 $</td>
                    
                </tr>
                <tr >
                    <td className="border border-solid border-ash0 font-dm font-bold text-base text-blk26 pl-5 py-3">Total</td>
                    <td className="border border-solid border-ash0 font-dm font-regular text-base text-76 pl-5 py-3">389.99 $</td>
                    
                </tr>
                
            </tbody>
         </table>


    
    </Container>
  )
}

export default Checkoutpage