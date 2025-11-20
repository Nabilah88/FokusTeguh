import React from 'react'
import './Content.css'
import {motion} from "framer-motion";
import building from '../../assets/office_15419224.png';
import gear from '../../assets/options_1179131.png';
import facility from '../../assets/digital-asset-management_10841365.png';
import management from '../../assets/realtor_13089580.png';
import civil from '../../assets/house_18495028.png';
import specialized from '../../assets/adoption_8759492.png';

const Content = () => {
  return (
    <div className="content-section">
  <motion.div
  initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }} 
  className="content-title">
    <h1>Types of Maintenance We Provide</h1>
  </motion.div>

  
  <div className="content-container">
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="card-building">
      <div className="icon-circle">
        <img src={building} alt="Building icon" />
      </div>
      <h3>Building Maintenance</h3>
      <p>Repairs, renovations and upkeep of government and corporate facilities.</p>
    </motion.div>

  
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="card-mechanical">
      <div className="icon-circle">
        <img src={gear} alt="Mechanical icon" />
      </div>
      <h3>Mechanical & Electrical (M&E) Maintenance</h3>
      <p>HVAC, plumbing, wiring, lighting, generators, pumps, elevators.</p>
    </motion.div>

  
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="card-facility">
      <div className="icon-circle">
        <img src={facility} alt="Facility icon" />
      </div>
      <h3>Facility Management</h3>
      <p>Daily operations, inspections, cleaning, minor works.</p>
    </motion.div>

    
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }} 
    className="card-facilitymgt">
      <div className="icon-circle">
        <img src={management} alt="Management icon" />
      </div>
      <h3>Values</h3>
      <p>Commitment, reliability, efficiency in service delivery.</p>
    </motion.div>

  
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }} 
    className="card-civil">
      <div className="icon-circle">
        <img src={civil} alt="Civil icon" />
      </div>
      <h3>Civil & Structural Maintenance</h3>
      <p>Pavement, roofing, drainage, waterproofing, and infrastructure upkeep.</p>
    </motion.div>

    
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="card-specialized">
      <div className="icon-circle">
        <img src={specialized} alt="Specialized icon" />
      </div>
      <h3>Specialized Maintenance</h3>
      <p>Fire & life safety systems, renewable energy systems (solar, biogas), high-volatage substattions.</p>
    </motion.div>
  </div>
</div>

  );
};

export default Content;
