import React from 'react'
import Flex from './Flex'
import PortionHeading from './PortionHeading'
import List from './List'
import Image from './Image'
import logo from "../assets/logo.png"
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoLinkedin} from "react-icons/bi"
import {BiLogoInstagram} from "react-icons/bi"
import Paragraph from './Paragraph'

const Footer = () => {
  return (
    <footer>
        <Flex className="gap-x-36 mb-16" >
            <div>
              <PortionHeading text="MENU" className="mb-4"/>
              <List text="Home" className="mb-1.5"/>
              <List text="Shop" className="mb-1.5"/>
              <List text="About" className="mb-1.5"/>
              <List text="Contact" className="mb-1.5"/>
              <List text="Journal" />
            </div>
            <div>
              <PortionHeading text="SHOP" className="mb-4"/>
              <List text="Category 1" className="mb-1.5"/>
              <List text="Category 2" className="mb-1.5"/>
              <List text="Category 3" className="mb-1.5"/>
              <List text="Category 4" className="mb-1.5"/>
              <List text="Category 5" />
            </div>
            <div>
              <PortionHeading text="HELP" className="mb-4"/>
              <List text="Privacy Policy" className="mb-1.5"/>
              <List text="Terms & Conditions" className="mb-1.5"/>
              <List text="Special E-shop" className="mb-1.5"/>
              <List text="Shipping" className="mb-1.5"/>
              <List text="Secure Payments" />
            </div>
            <div>
                <PortionHeading text="(052) 611-5711" className=""/>
                <PortionHeading text="company@domain.com" className="mb-4"/>
                <Paragraph text="575 Crescent Ave. Quakertown, PA 18951" className="text-sm"/>
            </div>
            <div>
                <Image src={logo} alt="alt" className="ml-24" />
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
    </footer>
  )
}

export default Footer