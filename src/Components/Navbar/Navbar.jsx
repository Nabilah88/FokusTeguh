import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Fokus_teguh.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />

      <div className="burger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </div>

      <ul className={isMobileMenuOpen ? 'nav-links active' : 'nav-links'}>
      <li><Link to="/">Home</Link></li>

        {/* About Dropdown */}
        <li
          className="dropdown"
          onClick={() => setAboutDropdownOpen(!isAboutDropdownOpen)}
        >
          About Us ▾
          {isAboutDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/vision">Vision & Mission</Link></li>
              <li><Link to="/team">Our Team / Key Personnel</Link></li>
              <li><Link to="/certification">Certifications & Accreditations</Link></li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onClick={() => {
          setServicesDropdownOpen(!isServicesDropdownOpen);
          setAboutDropdownOpen(false);
          setProjectsDropdownOpen(false);
  }}
>
          Services ▾
          {isServicesDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/Construction">Construction</Link></li>
              <li><Link to="/Maintenance">Maintenance Services</Link></li>
              <li><Link to="/Project">Project Management (Renewables)</Link></li>
            </ul>
          )}
        </li>

             <li
               className="dropdown"
               onClick={() => {
               setProjectsDropdownOpen(!isProjectsDropdownOpen);
               setAboutDropdownOpen(false);
              setServicesDropdownOpen(false);
               }}
              >
          Projects ▾
          {isProjectsDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/Gallery">Project Gallery</Link></li>
              <li><Link to="/Featured">Featured Projects</Link></li>
              <li><Link to="/Client">Project Clients</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/Contact"><button className='btn'>
                Contact Us
            </button></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
