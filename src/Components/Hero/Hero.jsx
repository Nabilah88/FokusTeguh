import React from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'
import arrow_down from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1>Fokus Teguh Dinamik Sdn. Bhd.</h1>
            <h3>"Delivering Excellence in Construction, Engineering & Maintenance  in Malaysia"</h3>
            <p>Trusted Since 2002 - CIDB G7 Certified | 100% Bumiputera Company</p>
          

        </div>

    <div className="hero-buttons">
    <button className='btn'><Link to="/Gallery">
      View Our Projects</Link>
      <img src={arrow_down} alt=""/>
    </button>
    <button className='btn'><Link to="/GetAquote">
      Get a Quote</Link>
      <img src={arrow_down} alt=""/>
    </button>
  </div>

    </div>
  )
}

export default Hero