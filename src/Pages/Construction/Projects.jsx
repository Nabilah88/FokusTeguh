import React from 'react'
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Projects.css'

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    { id: 1, src: "src/assets/pavement_maintain.jpg", title: "KLIA Pavement Maintenance" },
    { id: 2, src: "src/assets/PSS-Master-Room-Bed-1200x700.png", title: "AMES Hotel Presidential Suite Construction" },
    { id: 3, src: "src/assets/bank_rakyat.png", title: "Bank Rakyat Branch Renovation" },
    { id: 4, src: "src/assets/biogas_plant.jpg", title: "UNITEN Biogas Plant" },
  ];

  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }} 
    className= "slider-wrapper" style={{ margin: "20px" }}>
      <h2>Featured Construction Projects</h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} style={{ padding: "10px" }} className="image-card">
            <img
              src={image.src}
              alt={image.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              {image.title}
            </p>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Projects;