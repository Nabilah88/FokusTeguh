import React from 'react';
import './Mission.css';
import vision from '../../assets/vision_1464393.png';
import mission from '../../assets/achievement_11176454.png';
import checked from '../../assets/checked.png';


const Mission = () => {
  return (
    <div className="missionz">
      <div className="Mission">
        <div className="about-vision-mission">
          <div className="about-item row">
            <img src={vision} alt="Vision Icon" className="icon" />
            <div>
              <h4>Our Vision</h4>
              <p>To become the leading construction and service provider in Malaysia.</p>
            </div>
          </div>

          <div className="about-item row">
            <img src={mission} alt="Mission Icon" className="icon" />
            <div>
              <h4>Our Mission</h4>
              <p>
                To be recognized as a well-established company in construction, facilities
                management/building maintenance, engineering and consultancy focusing on
                quality, cost, and customer enthusiasm.
              </p>
            </div>
          </div>
        </div>

        <h4 className="key-title">Key Highlights</h4>
        <div className="key-highlights">
          <div className="highlight-item">
            <img src={checked} alt="Check Icon" className="icon" />
            <p>Established in 2002</p>
          </div>
          <div className="highlight-item">
            <img src={checked} alt="Check Icon" className="icon" />
            <p>MOF & SME Corp Registered</p>
          </div>
          <div className="highlight-item">
            <img src={checked} alt="Check Icon" className="icon" />
            <p>G7 CIDB Certified</p>
          </div>
          <div className="highlight-item">
            <img src={checked} alt="Check Icon" className="icon" />
            <p>100% Bumiputera</p>
          </div>
        </div>
      
      </div>
 
    </div>
  );
};

export default Mission;