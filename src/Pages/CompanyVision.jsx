import React from 'react';
import './CompanyVision.css';
import { motion } from "framer-motion";
import bino from '../assets/binocular.png';
import missionIcon from '../assets/mission_mount.png';
import objective from '../assets/objective.png';
import highvalue from '../assets/highvalue.png';

const CompanyVision = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="company-vision-section">
      <h1>Vision and Mission</h1>
      <p className="subtitle">
      "Our vision, mission, and values guide everything we do, ensuring excellence in construction and service delivery across Malaysia."
      </p>
      <div className="cards-container">
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="kad vision-kad">
          <div className="icon-circle">
            <img src={bino} alt="Vision icon" />
          </div>
          <h3>Vision</h3>
          <p>To become the leading construction and service provider in Malaysia.</p>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="kad mission-kad">
          <div className="icon-circle">
            <img src={missionIcon} alt="Mission icon" />
          </div>
          <h3>Mission</h3>
          <p>To be recognized as a well-established company in construction, facilities management, engineering, and consultancy.</p>
        </motion.div>

        <motion.div 
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, ease: 'easeOut' }}
         viewport={{ once: true }}
         className="kad objectives-kad">
          <div className="icon-circle">
            <img src={objective} alt="Objectives icon" />
          </div>
          <h3>Strategic Objectives</h3>
          <ul>
            <li>To be recognized as a dedicated, reputable, and trusted construction and service provider.</li>
            <li>To enhance the company's operations and services to become a profitable and established business within the next 3 years.</li>
          </ul>
        </motion.div>

        <motion.div
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, ease: 'easeOut' }}
         viewport={{ once: true }}
         className="kad values-kad">
          <div className="icon-circle">
            <img src={highvalue} alt="Values icon" />
          </div>
          <h3>Values</h3>
          <ul>
            <li>Accountability</li>
            <li>Integrity</li>
            <li>Continuous Improvement</li>
            <li>Sustainable Goals</li>
            <li>Teamwork</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyVision;
