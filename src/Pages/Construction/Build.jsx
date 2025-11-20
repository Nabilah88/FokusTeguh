import React from 'react'
import './Build.css'


const Build = () => {
  return (
  <div className="build-section">
  <div className="column">
    <h2 className="title">What We Build</h2>
    <ul>
      <li><span className="bullet">Buildings</span> <p className="description">Offices, hotels, schools, government facilities</p></li>
      <li><span className="bullet">Infrastructure</span> <p className="description">Roadworks, pavement rehabilitation, drainage systems</p></li>
      <li><span className="bullet">Industrial facilities</span> <p className="description">Warehouses, plants–biogas and solar systems</p></li>
      <li><span className="bullet">Interior & Fit-Outworks</span> <p className="description">Refurbishment, interior construction, F&B outlets</p></li>
    </ul>
  </div>
  <div className="column">
    <h2 className="title">Our Services</h2>
    <ul>
      <li className="bullet">Site Preparation & Earthworks</li>
      <li className="bullet">Formwork, Rebar, Concrete work</li>
      <li className="bullet">Steel & Roofing</li>
      <li className="bullet">M&E Coordination</li>
      <li className="bullet">Interior Fit-Out & Finishing</li>
      <li className="bullet">Handover & Final Inspection</li>
    </ul>
  </div>
</div>
  )
}

export default Build