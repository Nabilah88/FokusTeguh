import React from "react";
import {motion} from "framer-motion";
import "./Introsect.css";

export default function Introsect() {
  return (
    <section className="intro-section">
      <div className="intro-overlay"></div>
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }} 
      className="intro-content">
        <h2>Project Management for Renewables</h2>
        <p>
          Fokus Teguh Dinamik specializes in managing renewable energy projects — 
          from solar hybrid systems to energy-efficient facility upgrades. 
          Our experienced team ensures every project meets safety standards, 
          cost targets, and environmental goals.
        </p>
      </motion.div>

      <svg className="wave" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,288L1440,160L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
