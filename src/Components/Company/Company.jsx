import React from 'react'
import './Company.css'
import { motion } from "framer-motion";
import arrow_down from '../../assets/arrow_down.png'
import { Link } from 'react-router-dom';



const Company = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    className= 'company container'>
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5}}
      viewport={{ once: true }}
        className="company-text">
            <h2>Fokus Teguh Dinamik has been involved some of the largest infrastructure construction across the country</h2>
            <p>Together we have the expertise and resources to deliver projects, everytime</p>
            
        </motion.div>
      
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} 
          className="company-btn">
          <button className='btn'>
            <Link to="/Gallery">
            Learn More</Link>
            <img src={arrow_down} alt=""/>
          </button>
        </motion.div>
    </motion.div>
  )
}

export default Company