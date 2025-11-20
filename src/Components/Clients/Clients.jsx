import React from 'react'
import './Clients.css'
import gas_malaysia from '../../assets/gas_malaysia.png'
import uem from '../../assets/390823-UEM-Group.jpg'
import mmu from '../../assets/MMU.jpg'
import Bank_rakyat from '../../assets/Bank Rakyat 01.png'
import malaysia_airport from '../../assets/malaysia_airport.jpg'

const Clients = () => {
  return (
<div className="klien">
  <div className="clients">
    <h3>Our Clients</h3>
    
    <div className="row">
      <img src={gas_malaysia} alt="Gas Malaysia" />
      <img src={uem} alt="UEM Group" />
      <img src={mmu} alt="MMU" />
      <img src={Bank_rakyat} alt="Bank Rakyat" />
      <img src={malaysia_airport} alt="Malaysia Airport" />
    </div>
  </div>
</div>

  )
}

export default Clients