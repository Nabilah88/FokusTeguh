import React from 'react';
import './CompanyInfo.css';
import phone from '../../assets/phone-call_7403580.png';
import home from '../../assets/home_5657928.png';
import email from '../../assets/forward_5836127.png';
import companyImage from '../../assets/1560.jpg'; 
import { motion } from "framer-motion";

function CompanyInfo() {
  return (
    <section className="company-info-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="company-image"
      >
        <img src={companyImage} alt="Company building" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="contact-details"
      >
        <h2>Contact Us</h2>
        <div className="info-item">
          <img src={phone} alt="Phone icon" />
          <p>+1 234 567 890</p>
        </div>
        <div className="info-item">
          <img src={email} alt="Email icon" />
          <p>info@fokusteguh.com</p>
        </div>
        <div className="info-item">
          <img src={home} alt="Address icon" />
          <p>123 Main Street, Philadelphia</p>
        </div>
      </motion.div>
    </section>
  );
}

export default CompanyInfo;