import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import image3 from '../../assets/egt.jpg';

const About = () => {
  return (
    <motion.div 
       initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
    className="about-container">
      <motion.div 
       initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5}}
        viewport={{ once: true }}
      className="image-section">
        <img 
          src={image3}
          alt="Construction workers with blueprint" 
          className="about-image"
        />
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5}}
      viewport={{ once: true }}
      className="text-section">
        <h1>About Us</h1>
        <p>
          We are committed to becoming the leading construction and service provider in Malaysia,
          focusing on quality, cost, and customer enthusiasm.
        </p>
        <button className="btn"><Link to="/Vision">
              Learn More</Link></button>
      </motion.div>

     
      
    </motion.div>
  );
};

export default About;
