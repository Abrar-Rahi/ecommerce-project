import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/Logo.png'
import List from '../List'
import { Link } from 'react-router-dom'
import {pagename} from "../../slices/breadcrumbSlice"
import { useDispatch } from 'react-redux'

const Navbar = () => {

  let dispatch = useDispatch()

  let handleBreadCrumb = (name)=>{
    
    dispatch(pagename(name))
    console.log(name);
  }

  

  

  return (
    <nav className='py-8'>
        <Container>
            <Flex>
            <div className='w-1/5'>
                <Image src={logo}/>
            </div>
            <Flex className="gap-x-4">
              <Link onClick={()=>handleBreadCrumb("Login")} to={"/login"}>
                <List text="Login"/>
              </Link>
              <Link onClick={()=>handleBreadCrumb("Checkout")} to={"/checkout"}>
                <List text="Checkout"/>
              </Link>
            </Flex>
            <div className='w-4/5'>
                <ul className='flex justify-end gap-x-10'>
                    <Link onClick={()=>handleBreadCrumb("Home")} to={"/"}>
                      <List text="Home" />
                    </Link>

                    <Link onClick={()=> handleBreadCrumb("Shop")} to={"/shop"}>
                      <List text="Shop"/>
                    </Link>

                    <Link onClick={()=>handleBreadCrumb("About")} to={"/about"}>
                      <List text="About"/>
                    </Link>

                  <Link onClick={()=>handleBreadCrumb("Contacts")} to={"/contacts"}>
                     <List text="Contacts"/>
                  </Link>
                    <List text="Journal"/>
                </ul>
            </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar