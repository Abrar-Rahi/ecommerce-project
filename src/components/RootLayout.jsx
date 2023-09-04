import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './layout/Footer'

import Navbar from './layout/Navbar'
import Searchbox from './layout/Searchbox'

const RootLayout = () => {
  return (
    <>
    
        
        <Navbar/>
        <Searchbox/>
        <Outlet/>
        <Footer/>
    
    </>
  )
}

export default RootLayout