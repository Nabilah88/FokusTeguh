import React from 'react';
import './Vission.css';
import { motion } from "framer-motion";
import buildingImage from '../assets/building.jpg'; 

const Vision = () => {
  return (
    <section className="about-company">
      <motion.div 
       initial={{ opacity: 0, x: -50 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      className="image-container">
        <img src={buildingImage} alt="Skyscrapers" />
      </motion.div>

      <motion.div 
       initial={{ opacity: 0, x: -50 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, ease: 'easeOut' }}
       viewport={{ once: true }}
      className="content">
        <h1>About Our Company</h1>
        <h3>Who We Are & What We Do</h3>
        <p>
        "At Fokus Teguh Dinamik, our vision and mission guide our work ethic, decision-making, and dedication to delivering quality construction and engineering services. These principles refllect who we are going, and how we serve our clients"
        </p>
        <p className="quote">– Fokus Teguh Dinamik Sdn. Bhd.</p>
      </motion.div>
    </section>
    
    
    
  );
};

export default Vision;
