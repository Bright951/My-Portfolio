import React from 'react'
import { links } from '../constants'
import { FaFacebookSquare } from "react-icons/fa";
import {motion} from 'framer-motion'

const NavBar = () => {

  const variants ={
    initial:{
      x:20,
    },
    final:(i)=>({
      x:0,
      transition:{
        duration: i * 1,
        type:'spring',
        stiffness: 100,
      }
    })
  }
  return (
    <div className='wrapper'>
      {
        links.map((link, i)=>(
          <motion.a 
            href={`#${link}`} 
            key={i} 
            custom={i} 
            variants={variants} 
            initial='initial'
            whileInView='final'
          >
            {link}
          </motion.a>
        ))
      }
    </div>
  )
}

export default NavBar