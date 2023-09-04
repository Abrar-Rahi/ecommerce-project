import React from 'react'
import Image from '../components/Image'
import Error from '../assets/error.png'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import {BsSearch} from 'react-icons/bs'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
   <section className='mt-20 mb-36'>
     <Container>
        <Image src={Error}/>
        <Paragraph className="max-w-644 leading-8 my-12" text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"/>
        <div className='w-2/5 relative'>
                <input className='py-4 px-5 w-full border border-solid border-ash0' placeholder='Type to search'/>
                <BsSearch className='absolute top-1/2 right-5 -translate-y-1/2 text-2xl'/>
        </div>

        <Link to={"/"}>
            <Button className="mt-16" text="Back to Home"/>
        </Link>

    </Container>
   </section>
  )
}

export default Errorpage