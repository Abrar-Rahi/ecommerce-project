import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Paragraph from '../components/Paragraph'
import Flex from '../components/Flex'
import PortionHeading from '../components/PortionHeading'
import {FaAngleRight} from 'react-icons/fa'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Login = () => {
    let breadcrumbName = useSelector((state)=>state.breadcrumb.previousname)
  return (
    <Container>
        <SubHeading text="Login" className="text-49 mt-32"/>
        <Flex className="items-center">
        <Link to={breadcrumbName == "Home" ? "/" : breadcrumbName == "Sign up" ? "/sign-up" : `/${breadcrumbName.toLowerCase()}`}>
            <p className='font-dm font-normal text-xs text-6d'>{breadcrumbName}</p>
          </Link>
            <FaAngleRight className='text-6d text-xs mx-1'/>
             <p className='first-letter:uppercase font-dm font-normal text-xs text-6d'>{window.location.pathname.replace("/","")}</p>
        </Flex>
         

         <Paragraph className="max-w-644 mt-32  text-76" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>


         <SubHeading text="Your Personal Details" className="mb-10 mt-14"/>
         <Flex className="gap-x-10 mt-6">
        <div>
        <PortionHeading text="Email address" className="mb-2.5"/>
        <input type="text" placeholder='company@domain.com' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
        <PortionHeading text="Password" className="mb-2.5"/>
        <input type="text" placeholder='........' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-5xl placeholder:text-67 pb-4'/>
        </div>
       </Flex>
        <Button text="Log in" className="mt-8"/>
       <div className='w-full h-px bg-ash0 mt-16'></div>

       <SubHeading text="New Customer" className="mb-10 mt-14"/>
       <Paragraph className="max-w-644 mb-14  text-76" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
       <Button text="Log in" className="mb-40"/>

    </Container>
  )
}

export default Login