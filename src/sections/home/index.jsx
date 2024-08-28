import React from 'react'
import './index.scss'
import { motion } from 'framer-motion'

const Home = () => {

  const variants ={
    initial:{
      opacity:0,
      transition:{
        duration:2,
      }
    },
    final:{
      opacity:1,
      transition:{
        duration:2,
      }
    }
  }

  return (
    <div className="main-container">
      <div className="write-up-container">
        <motion.div className="write-up" variants={variants} initial="initial" whileInView="final">
          <h1><span>Hi</span> there, I am Bethel</h1>
          <p>Your</p>
          <ul>
                <li>FullStack Web developer</li>
                <li>Web designer</li>
                <li>Ui/Ux designer</li>
                <li>Mobile Application Developer</li>
              </ul>
            <a href='#Contact'>
              <button className='contact-button'>Contact Me</button>
            </a>
            <a href='#Projects'>
              <button className='projects-button'>View My Projects</button>
            </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Home