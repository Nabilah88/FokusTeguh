import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <h1>FOKUS TEGUH DINAMIK</h1>
              </a>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Home</h2>
              <ul className="footer-menu-list">
                <li><Link to="/">Landing</Link></li>
                <li><Link to="/vision">Our Company</Link></li>
                <li><Link to="/Construction">Our Expertise</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> About Us</h2>
              <ul className="footer-menu-list">
                <li><Link to="/vision">Vision and Mission</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/certification">Certified Company</Link></li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Services</h2>
              <ul className="footer-menu-list">
                <li><Link to="/Construction">Construction</Link></li>
                <li><Link to="/Maintenance">Maintenance Services</Link></li>
                <li><Link to="/Project">Project Renewables</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Quick Links</h2>
              <ul className="footer-menu-list">
                <li><Link to="/Contact">Contact Us</Link></li>
                <li><Link to="/Construction">Services</Link></li>
                <li><Link to="/Client">Customers</Link></li>
                <li><Link to="/Client">Reviews</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Let's work together</h2>
              <p className="footer-call-to-action-description"> Have a support question?</p>
              <Link to="/GetAquote">Submit a quotation </Link>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> You Call Us</h2>
              <p className="footer-call-to-action-link-wrapper">
                <a className="footer-call-to-action-link" href="tel:0124-64XXXX">0124-64XXXX</a>
              </p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <a class="footer-copyright-link" href="#" target="_self"> ©2025. | Designed By: Nur Zailani. | All rights reserved. </a>
          </p>
        </div>
      </div>
      </footer>
    </div>
  );
};

export default Footer;
