import React from 'react';
import './Sijil.css';
import cidb from '../../assets/cidb.png';
import mof from '../../assets/logo-mof.jpg';
import sjaya from '../../assets/sjaya.png';
import stars from '../../assets/3stars.png';

const certificates = [
  {
    title: 'CIDB Malaysia-G7 Grade',
    organization: 'Construction Industry Development Board (CIDB)',
    details: ['Certificate No: 01200 20812-WP073703', 'Valid Until: 20/12/2027'],
    image: cidb,
    alt: 'CIDB Certificate',
  },
  {
    title: 'MOF Bumiputera Certification',
    organization: 'KEMENTERIAN KEWANGAN MALAYSIA (MOF)',
    details: ['Certificate No: 01200 20812-WP073703', 'Valid Until: 20/12/2027'],
    image: mof,
    alt: 'MOF Certificate',
  },
  {
    title: 'Suruhanjaya Tenaga (ST) - Electrical Contractor',
    organization: 'Energy Commission of Malaysia',
    details: ['Class: Class C', 'Licensed for electrical installations and maintenance'],
    image: sjaya,
    alt: 'ST Certificate',
  },
  {
    title: 'SCORE CODB - 3-Star Rating',
    organization: 'CIDB & SME Corp',
    details: ['3 Stars rating (Good Management & Technical Capabilities)', 'Valid Until: 07/12/2026'],
    image: stars,
    alt: 'SCORE CODB Certificate',
  },
];

const Sijil = () => {
  return (
    <div className="sijil-container">
      {certificates.map((cert, index) => (
        <div className="sijil-card" key={index}>
          <div className="sijil-text">
            <h3>{cert.title}</h3>
            <p className="organization">{cert.organization}</p>
            {cert.details.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          <div className="sijil-image">
            <img src={cert.image} alt={cert.alt} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sijil;
