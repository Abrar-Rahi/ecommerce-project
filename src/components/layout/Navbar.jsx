import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/Logo.png'
import List from '../List'
import { Link } from 'react-router-dom'
import {pagename} from "../../slices/breadcrumbSlice"
import { useDispatch,useSelector } from 'react-redux'

const Navbar = () => {

  let dispatch = useDispatch()

  let handleBreadCrumb = (name)=>{
    
    dispatch(pagename(name))
  }

  

  

  return (
    <nav className='py-8'>
        <Container>
            <Flex>
            <div className='w-1/5'>
                <Image src={logo}/>
            </div>
            <div className='w-4/5'>
                <ul className='flex justify-end gap-x-10'>
                    <Link onClick={()=>handleBreadCrumb("Home")} to={"/"}>
                      <List text="Home" />
                    </Link>
                    <Link onClick={()=> handleBreadCrumb("Shop")} to={"/shop"}>
                      <List text="Shop"/>
                    </Link>
                    <List text="About"/>
                    <List text="Contact"/>
                    <List text="Journal"/>
                </ul>
            </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar