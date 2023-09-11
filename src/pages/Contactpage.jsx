import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import PortionHeading from '../components/PortionHeading'
import {FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Image from '../components/Image'
import map from '../assets/map.png'
import { useSelector } from 'react-redux'


const Contactpage = () => {
  const breadcrumbName = useSelector((state)=>state.breadcrumb.previousname)
  return (
    <Container className="mb-36">
         <SubHeading text="Contacts" className="text-49 mt-32"/>
         <Flex className="items-center">
          <Link to={breadcrumbName == "Home" ? "/":`/${breadcrumbName.toLowerCase()}`}>
            <p className='font-dm font-normal text-xs text-6d'>{breadcrumbName}</p>
          </Link>
            <FaAngleRight className='text-6d text-xs mx-1'/>
            <p className='first-letter:uppercase font-dm font-normal text-xs text-6d'>{window.location.pathname.replace("/","").replace("-"," ")}</p>

         </Flex>
          
         <SubHeading text="Fill up a Form" className="mb-10 mt-14"/>
         <div>
        <PortionHeading text="Name" className="mb-2.5"/>
        <input type="text" placeholder='Youe Name' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div className='my-6'>
        <PortionHeading text="Email" className="mb-2.5"/>
        <input type="text" placeholder='Your email here' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        <div>
        <PortionHeading text="message" className="mb-2.5"/>
        <input type="text" placeholder='Your message here' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        <div className='w-507 h-px bg-ash0 mt-16'></div>
        <Button text="Post" className="mb-40 mt-8"/>
        <Image src={map}/>
    </Container>
  )
}

export default Contactpage