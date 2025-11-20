import React from 'react'
import {motion} from "framer-motion";
import './Hero.css'

const Hero = () => {
  return (
       <div className="maintain-hero">
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
       className="maintain-text">
        <h1>Maintenance & Services</h1>
        <p>
          Reliable and cost-effective facility maintenance solution 
        </p>
      </motion.div>
    </div>
  )
}

export default Hero