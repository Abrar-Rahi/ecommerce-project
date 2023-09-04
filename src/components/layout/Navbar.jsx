import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'

const Navbar = () => {
  return (
    <nav className='py-8'>
        <Container>
            <Flex>
            <div className='w-1/5'>
                <Image src={logo}/>
            </div>
            <div className='w-4/5'>
                <ul className='flex justify-end gap-x-10'>
                    <List text="Home" />
                    <List text="Shop"/>
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