import React from 'react';
import './Certificate.css';
import cidb from '../../assets/cidb.png';
import mof from '../../assets/mof.png';
import suruhanjaya from '../../assets/Suruhanjaya-Tenaga.png';
import stars from '../../assets/3_stars.png';

const Certificate = () => {
  return (
    <div className='certificate'>
      <div className='certificates'>
        <h1>Certifications and Credentials</h1>
        <p>"Recognized by leading authorities in Malaysia"</p>
        <div className="row">
          <div className='col-md-3'>
            <img src={cidb} alt="CIDB Logo" />
            <p>CIDB G7</p>
          </div>
          <div className='col-md-3'>
            <img src={mof} alt="MOF Logo" />
            <p>MOF Bumiputera Certified</p>
          </div>
          <div className='col-md-3'>
            <img src={suruhanjaya} alt="Suruhanjaya Tenaga Logo" />
            <p>Suruhanjaya Tenaga Approved</p>
          </div>
          <div className='col-md-3'>
            <img src={stars} alt="3-Star Rating" />
            <p>CIDB SCORE</p>
            <p>(3-Star Rating)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
