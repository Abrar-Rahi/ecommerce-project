import React from 'react'
import Flex from '../../components/Flex'
import PortionHeading from '../../components/PortionHeading'
import List from '../../components/List'
import Image from '../../components/Image'
import logo from "../../assets/logo.png"
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoLinkedin} from "react-icons/bi"
import {BiLogoInstagram} from "react-icons/bi"
import Paragraph from '../../components/Paragraph'
import Container from '../Container'

const Footer = () => {
  return (
    <footer className='bg-ash'>
       <Container className="py-16">
       <Flex className="gap-x-36 mb-16" >
            <div>
              <PortionHeading text="MENU" className="mb-4"/>
              <ul className='flex flex-col gap-y-1.5'>
              <List text="Home" />
              <List text="Shop" />
              <List text="About" />
              <List text="Contact" />
              <List text="Journal" />
              </ul>
            </div>
            <div>
              <PortionHeading text="SHOP" className="mb-4"/>
              <ul className='flex flex-col gap-y-1.5'>
              <List text="Category 1" />
              <List text="Category 2" />
              <List text="Category 3" />
              <List text="Category 4" />
              <List text="Category 5" />
              </ul>
            </div>
            <div>
              <PortionHeading text="HELP" className="mb-4"/>
              <ul className='flex flex-col gap-y-1.5'>
              <List text="Privacy Policy"/>
              <List text="Terms & Conditions"/>
              <List text="Special E-shop"/>
              <List text="Shipping"/>
              <List text="Secure Payments"/>
              </ul>
            </div>
            <div>
                <PortionHeading text="(052) 611-5711" className=""/>
                <PortionHeading text="company@domain.com" className="mb-4"/>
                <Paragraph text="575 Crescent Ave. Quakertown, PA 18951" className="text-sm"/>
            </div>
            <div>
                <Image src={logo} alt="alt" className="ml-36" />
            </div>
        </Flex>

        <Flex className="justify-between">
            <Flex className="gap-x-6">
                <BiLogoFacebook/>
                <BiLogoLinkedin/>
                <BiLogoInstagram/>
            </Flex>
                
            <Paragraph text="2020 Orebi Minimal eCommerce F igma Template by Adveits" className="text-sm"/>
        </Flex>
       </Container>
    </footer>
  )
}

export default Footer