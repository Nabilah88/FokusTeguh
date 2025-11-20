import React from "react";
import { motion } from "framer-motion";
import "./ClientPage.css";

import moeLogo from "../../assets/moe.svg";
import tnbLogo from "../../assets/tnb.svg";
import petronasLogo from "../../assets/petronas.svg";
import unimapLogo from "../../assets/unimap.png";

const clients = [
  { id: 1, name: "Ministry of Education (MOE)", logo: moeLogo },
  { id: 2, name: "Tenaga Nasional Berhad (TNB)", logo: tnbLogo },
  { id: 3, name: "PETRONAS", logo: petronasLogo },
  { id: 4, name: "Universiti Malaysia Perlis (UniMAP)", logo: unimapLogo },
];

const testimonials = [
  {
    name: "Mohd Faiz, Project Engineer",
    company: "TNB",
    feedback:
      "Fokus Teguh Dinamik demonstrated professionalism and deep technical knowledge throughout our renewable energy installation project. We were impressed with their commitment and results.",
  },
  {
    name: "Noraini Hassan, Director",
    company: "MOE Infrastructure Division",
    feedback:
      "The team delivered the solar hybrid project for rural schools ahead of schedule and exceeded expectations in quality and reliability.",
  },
  {
    name: "Dr. Zul, Research Coordinator",
    company: "UniMAP",
    feedback:
      "We highly value their collaboration and innovative approach to sustainable energy solutions.",
  },
];

const ClientPage = () => {
  return (
    <div className="pengguna-page">
      
      <section className="pengguna-header">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pengguna-title"
        >
          Our Clients
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="pengguna-intro"
        >
          We take pride in working with a diverse range of partners across the
          public and private sectors — building trust through innovation and
          sustainable solutions.
        </motion.p>
      </section>

    
      <section className="pengguna-logos">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="pengguna-logo-card"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="pengguna-logo-img"
            />
          </motion.div>
        ))}
      </section>

      
      <section className="pengguna-testimonials">
        <h2 className="testimonial-title">What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="testimonial-card"
            >
              <p className="testimonial-feedback">“{item.feedback}”</p>
              <p className="testimonial-name">{item.name}</p>
              <p className="testimonial-company">{item.company}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pengguna-cta">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cta-title"
        >
          Interested in Partnering With Us?
        </motion.h2>
        <p className="cta-text">
          Let’s work together to bring your project to life with innovative,
          sustainable energy solutions.
        </p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default ClientPage;
