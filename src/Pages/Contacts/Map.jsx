import React from 'react'
import './Map.css'
import { motion } from "framer-motion";
function Map() {
  return (
    <motion.section 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="contact-map">
 <h2 className="map-title">Our Location</h2>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18..."
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</motion.section>

  )
}

export default Map