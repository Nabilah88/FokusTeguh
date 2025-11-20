import React from 'react'
import './ContactUs.css'
import { motion } from "framer-motion";


function ContactUs() {
  return (
    <section id="contact-form" className="contact-form-section">
  <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
               className="contact-content">
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </motion.div>
</section>


  )
}

export default ContactUs