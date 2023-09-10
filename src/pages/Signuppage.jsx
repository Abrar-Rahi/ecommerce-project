import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Paragraph from '../components/Paragraph';
import { useSelector,useDispatch } from 'react-redux';

import { increment,decrement } from '../slices/counterSlice';
import Flex from '../components/Flex';
import {FaAngleRight} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Signuppage = () => {

    // const data = useSelector((state)=> state.abrar.value)
    // let dispatch = useDispatch()

    const breadcrumbName = useSelector((state)=>state.breadcrumb.name)
    
  return (
    <div>
        <Container>
         <SubHeading text="Sign up" className="text-49"></SubHeading>
         <Flex className="items-center">
          <Link to={breadcrumbName == "Home" ? "/":`/${breadcrumbName.toLowerCase()}`}>
            <p className='font-dm font-normal text-xs text-6d'>{breadcrumbName}</p>
          </Link>
            <FaAngleRight className='text-6d text-xs mx-1'/>
            <p className='first-letter:uppercase font-dm font-normal text-xs text-6d'>{window.location.pathname.replace("/","").replace("-"," ")}</p>

         </Flex>

          
          {/* <button onClick={()=>dispatch(increment(10))}>+</button>
          <h1>{data}</h1>
          <button onClick={()=>dispatch(decrement(5))}>-</button> */}
        </Container>
    </div>
  )
}

export default Signuppage