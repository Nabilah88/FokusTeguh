import React from 'react';
import { motion } from "framer-motion";
import './Hero.css';

const Hero = () => {
  return (
    <div className='companyhero-section'>
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='team-content'>
        <h1>Meet Our Team</h1>
        <h3>Meet the people driving our vision forward</h3>
        <p>
          At Fokus Teguh Dinamik, our team is made up of experienced professionals with strong backgrounds in engineering, construction, and project management. Their leadership, vision, and technical expertise play a vital role in delivering excellence to our clients across Malaysia.
        </p>
      </motion.div>
      <div className="waving-line">
  <svg viewBox="0 0 500 100" preserveAspectRatio="none">
    <path d="M0,50 C150,150 350,-50 500,50" stroke="#6B8E23" fill="transparent" stroke-width="3"/>
  </svg>
</div>

    </div>
  );
};

export default Hero;