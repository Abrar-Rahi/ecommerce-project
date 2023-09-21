import React, { useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Paragraph from '../components/Paragraph'
import PortionHeading from '../components/PortionHeading'
import Button from '../components/Button'
import Flex from '../components/Flex';
import {FaAngleRight} from "react-icons/fa"
import { Link } from 'react-router-dom';
import division from '../division/division'
import { useSelector,useDispatch } from 'react-redux'
import {pagename} from "../slices/breadcrumbSlice"

const Signuppage = () => {
  
    const breadcrumbName = useSelector((state)=>state.breadcrumb.previousname)
    let dispatch = useDispatch()
    let handleBreadCrumb = (name)=>{
        dispatch(pagename(name))
        console.log(name);
    }

    let [divisionName,setDivisionName] = useState(division)
    let [distric,setDistric] = useState("")
    let handleDivision = (e)=>{
      setDistric(e.target.value);
    }
    
  return (
    
        <Container>
         <SubHeading text="Sign up" className="text-49 mt-32"/>
         <Flex className="items-center">
          <Link onClick={()=>handleBreadCrumb(breadcrumbName)} to={breadcrumbName == "Home" ? "/" : breadcrumbName == "Sign up" ? "/sign-up" : `/${breadcrumbName.toLowerCase()}`}>
            <p className='font-dm font-normal text-xs text-6d'>{breadcrumbName}</p>
          </Link>
            <FaAngleRight className='text-6d text-xs mx-1'/>
            <p className='first-letter:uppercase font-dm font-normal text-xs text-6d'>{window.location.pathname.replace("/","").replace("-"," ")}</p>

         </Flex>

        
        <Paragraph className="max-w-644 mt-32  text-76" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
        <div className='w-full h-px bg-ash0 mt-16'></div>
        
       <SubHeading text="Your Personal Details" className="mb-10 mt-14"/>
       <Flex className="gap-x-10 ">
        <div>
        <PortionHeading text="First Name" className="mb-2.5"/>
        <input type="text" placeholder='First Name' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
        <PortionHeading text="Last Name" className="mb-2.5"/>
        <input type="text" placeholder='Last Name' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
       </Flex>

       <Flex className="gap-x-10 mt-6">
        <div>
        <PortionHeading text="Email address" className="mb-2.5"/>
        <input type="text" placeholder='company@domain.com' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
        <PortionHeading text="Telephone" className="mb-2.5"/>
        <input type="text" placeholder='Your phone number' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
       </Flex>
       <div className='w-full h-px bg-ash0 mt-16'></div>


       <SubHeading text="New Customer" className="mb-10 mt-14"/>
       <Flex className="gap-x-10 ">
        <div>
        <PortionHeading text="Address 1" className="mb-2.5"/>
        <input type="text" placeholder='4279 Zboncak Port Suite 6212' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
        <PortionHeading text="Address 2" className="mb-2.5"/>
        <input type="text" placeholder='—' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
       </Flex>

       <Flex className="gap-x-10 mt-6">
        <div>
        <PortionHeading text="City" className="mb-2.5"/>
        <input type="text" placeholder='Your city' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
        <PortionHeading text="Post Code" className="mb-2.5"/>
        <input type="text" placeholder='05228' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
       </Flex>

       <Flex className="gap-x-10 mt-6">
        <div>
        <PortionHeading text="Division" className="mb-2.5"/>
        <select onChange={handleDivision} className='border-b border-solid border-ash0 w-507 pb-4'>
          <option>Select Division</option>
            {divisionName.map(item =>(
              <option>{item.name}</option>
            ))}
        </select>
        </div>
        <div>
        <PortionHeading text="Distric" className="mb-2.5"/>
        <select className='border-b border-solid border-ash0 w-507 pb-4'>
          <option>Select Distric</option>
          {distric=="Select Division" && <option>Please select a Division</option>}
            {divisionName.map(item =>(
              item.name == distric &&
              item.district.map(ite=>(
                <option>{ite.name}</option>
              ))
            ))}
        </select>
        </div>
        
        
       </Flex>
       <div className='w-full h-px bg-ash0 mt-16'></div>

       <SubHeading text="Your Password" className="mb-10 mt-14"/>
       <Flex className="gap-x-10 mt-6">
        <div>
        <PortionHeading text="Password" className="mb-2.5"/>
        <input type="text" placeholder='Password' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
        
        <div>
        <PortionHeading text="Repeat Password" className="mb-2.5"/>
        <input type="text" placeholder='Repeat Password' className='border-b border-solid border-ash0 w-507 placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-67 pb-4'/>
        </div>
       </Flex>
       <div className='w-full h-px bg-ash0 mt-16'></div>
        


     <div className='mt-16 mb-36'>
     <div className='my-5'>
        <input id='test' type="checkbox" className='peer/test hidden' />
         <label for='test' className='font-dm font-normal text-xs text-76 ml-5 relative after:absolute after:w-3 after:h-3 after:-left-5 after:top-0.5  after:border after:border-solid after:border-76 after:content[""]   before:absolute before:w-1.5 before:h-2 before:-left-18 before:top-1 before:peer-checked/test:bg-76 ' >
          I have read and agree to the Privacy Policy
          </label>
        </div>
        <div>
        <label className='font-dm font-normal text-xs text-76 mr-8'>Subscribe Newsletter</label>
        
        <input id='yes' type="checkbox" className='peer/yes hidden mr-10 '/>
        <label  for='yes' className='font-dm font-normal text-xs text-76  relative after:absolute after:w-3 after:h-3 after:-left-5 after:top-0.5  after:border after:border-solid after:border-76 after:content[""]   before:absolute before:w-1.5 before:h-2 before:-left-17 before:top-1 before:peer-checked/yes:bg-76 '>Yes</label>

        <input id='no' type="checkbox" className='peer/no hidden  '/>
        <label  for='no' className='font-dm font-normal text-xs text-76 ml-20 relative after:absolute after:w-3 after:h-3 after:-left-6 after:top-0.5  after:border after:border-solid after:border-76 after:content[""]   before:absolute before:w-1.5 before:h-2 before:-left-21 before:top-1 before:peer-checked/no:bg-76 '>No</label>
        
        </div>
        <Button text="Log in" className="mt-6"/>
     </div>

        </Container>
    
  )
}

export default Signuppage