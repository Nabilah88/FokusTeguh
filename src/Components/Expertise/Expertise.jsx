import React from 'react';
import './Expertise.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import construction_engine from '../../assets/construction_engineering.jpg';
import con_engine from '../../assets/con_engine.png';
import resurface_road from '../../assets/resurface_road.jpg';
import road_icon from '../../assets/road_icon.png';
import solar from '../../assets/solar.jpg';
import renewable_energy from '../../assets/renewable-energy.png';
import arrow from '../../assets/arrow-right.png';

const Expertise = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    className="expertise-section">
      <h1 className="text-center">Our Services</h1>
      <div className="divide-md-40 divide-xs-20"></div>

      <div className="expertise-pair">
        <div className="content-tile">
          <h4 className="widget-title">Constructions, Engineering Works & Services</h4>
          <p>We provide general contractor and supervisory services for construction and engineering works which include Mechanical and Electrical (M&E), Civil, Structure and Architectural (CSA) and Fire & Life Safety Services.</p>
         <Link to="/Construction">Learn more <img src={arrow} alt="" /></Link>
        </div>
        <div className="image-tile">
          <img src={construction_engine} alt="Construction" />
          <div className="thumb-icon">
            <img src={con_engine} width="32" alt="Construction icon" />
          </div>
        </div>
      </div>

      <div className="expertise-pair">
        <div className="content-tile">
          <h4 className="widget-title">Maintenance Works (Road, Buildings, Facilities and Machines)</h4>
          <p>Performing repairs (general and specific) & resurfacing works for roads, buildings, and machines.</p>
          <Link to="/Maintenance">
            Learn more <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="image-tile">
          <img src={resurface_road} alt="Maintenance" />
          <div className="thumb-icon">
            <img src={road_icon} width="32" alt="Road icon" />
          </div>
        </div>
      </div>

      <div className="expertise-pair">
        <div className="content-tile">
          <h4 className="widget-title">Project Management Services</h4>
          <p>Project management services for renewable energy.</p>
           <Link to="/Project">
            Learn more <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="image-tile">
          <img src={solar} alt="Solar Project" />
          <div className="thumb-icon">
            <img src={renewable_energy} width="32" alt="Renewable icon" />
          </div>
        </div>
      </div>
  
    </motion.div>
    
    
  );
};

export default Expertise;
