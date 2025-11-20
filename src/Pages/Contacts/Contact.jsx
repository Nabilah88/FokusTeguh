import React from 'react'
import Hero from './Hero'
import ContactUs from './ContactUs'
import CompanyInfo from './CompanyInfo'
import Map from './Map'
function Contact() {
  return (
    <div> 
    <Hero/>
    <div className='container'><CompanyInfo /></div>
    <ContactUs />
    <Map />
   
    </div>
   
  )
}

export default Contact