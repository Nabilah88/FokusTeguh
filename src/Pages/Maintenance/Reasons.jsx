import React from "react";
import './Reasons.css';
import {motion} from "framer-motion"
import budget from '../../assets/budget_9817200.png';
import long from '../../assets/life-insurance_1962581.png';
import compliance from '../../assets/regulatory-compliance_17053517.png';
import contract from '../../assets/contract-document_18647291.png';

const reasons = [
  {
    icon: budget,
    title: "Budget-Friendly",
    description: "Prevents costly breakdowns",
    bgColor: "#06b6d4",
  },
  {
    icon: long,
    title: "Long Lasting",
    description: "Extends lifespan of facilities",
    bgColor: "#06b6d4",
  },
  {
    icon: compliance,
    title: "Compliance & Standards",
    description: "Ensures compliance with safety standards",
    bgColor: "#06b6d4",
  },
  {
    icon: contract,
    title: "Customized Contracts",
    description: "Customized contracts (scheduled, preventive, corrective maintenance).",
    bgColor: "#06b6d4",
  },
];

export default function Reasons() {
  return (
    <div className="why-container">
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="left-section">
        <h2><span>Why</span> Our Maintenance Services Matter</h2>
        <p>Fokus Teguh Dinamik: The smart choice for quality, commitment, and results.</p>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="right-section">
        {reasons.map((item, index) => (
          <div key={index} className="reasons">
            <div className="icon" style={{ backgroundColor: item.bgColor }}>
              <img src={item.icon} alt={item.title} className="reasons-icon" />
            </div>
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}