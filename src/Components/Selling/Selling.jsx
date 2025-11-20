import React from "react";
import experience from '../../assets/experience_team.png'
import safety from '../../assets/safety_focus.png'
import govt from '../../assets/govt_approve.png'
import certificate from '../../assets/certificate_7440644.png'
import clients_trust from '../../assets/relationship_12376990.png'

const features = [
  {
    icon: experience,
    title: "Experience & Qualified Team",
    description: "Our team brings years of expertise and professional qualifications to deliver trusted and efficient solutions.",
    bgColor: "#06b6d4", 
  },
  {
    icon: safety,
    title: "Quality & Safety Focused",
    description: "Committed to delivering excellence with strict attention to safety and quality.",
    bgColor: "#06b6d4", 
  },
  {
    icon: govt,
    title: "Government & Private Sector Approve",
    description: "Trusted by both government and private sectors for quality and compliance.",
    bgColor: "#06b6d4", // purple
  },
   {
    icon: certificate,
    title: "Wide Range of Certifications",
    description: "Fokus Teguh Dinamik Sdn. Bhd. is backed by diverse certifications, ensuring quality, safety, and industry compliance.",
    bgColor: "#06b6d4", // purple
  },
     {
    icon: clients_trust,
    title: "Trusted by Clients like Gas Malaysia, Bank Rakyat, and KLIA",
    description: "Proven track record with top-tier clients across key industries.",
    bgColor: "#06b6d4", // purple
  },
];

export default function Selling() {
  return (
    <div className="why-container">
      <div className="left-section">
        <h2><span>WHY</span> CHOOSE US</h2>
        <p>Fokus Teguh Dinamik: The smart choice for quality, commitment, and results.</p>
      </div>
      <div className="right-section">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="icon" style={{ backgroundColor: feature.bgColor }}>
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
            </div>
            <div className="text">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}
