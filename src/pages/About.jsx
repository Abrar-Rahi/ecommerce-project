import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ourBrand from '../assets/ourBrand.webp'
import ourStore from '../assets/ourStore.webp'
import SubHeading from '../components/SubHeading'
import PortionHeading from '../components/PortionHeading'
import Paragraph from '../components/Paragraph'
import {FaAngleRight} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {pagename} from "../slices/breadcrumbSlice"
const About = () => {
    const breadcrumbName = useSelector((state)=>state.breadcrumb.previousname)
    let dispatch = useDispatch()
    let handleBreadCrumb = (name)=>{
        dispatch(pagename(name))
        console.log(name);
    }
  return (
    <>
    <Container className="py-32">
    <SubHeading text="About" className="text-49 "/>
        <Flex className="items-center">

        <Link onClick={()=>handleBreadCrumb(breadcrumbName)} to={breadcrumbName == "Home" ? "/" : breadcrumbName == "Sign up" ? "/sign-up" : `/${breadcrumbName.toLowerCase()}`}>
            <p className='font-dm font-normal text-xs text-6d'>{breadcrumbName}</p>
            
        </Link>
            
        <FaAngleRight className='text-6d text-xs mx-1'/>
        <p className='first-letter:uppercase font-dm font-normal text-xs text-6d'>{window.location.pathname.replace("/","")}</p>
        </Flex>


        <Flex className="gap-x-10">
            <Image src={ourBrand}/>
            <Image src={ourStore}/>
        </Flex>
        <SubHeading className="font-normal my-32" text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."/>
        <Flex className="gap-x-10">
            <div>
                <PortionHeading className=" text-25 mb-2.5" text="Our Vision "/>
                <Paragraph className="w-507 leading-7 text-76" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
            </div>
            <div>
                <PortionHeading className=" text-25 mb-2.5" text="Our Story "/>
                <Paragraph className="w-507 leading-7 text-76" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>
            </div>
            <div>
                <PortionHeading className=" text-25 mb-2.5" text="Our Brands "/>
                <Paragraph className="w-507 leading-7 text-76" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
            </div>
        </Flex>
    </Container>
    </>
  )
}

export default About