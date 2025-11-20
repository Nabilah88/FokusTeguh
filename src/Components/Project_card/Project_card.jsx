import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import './Project_card.css'; 

import { Navigation, Pagination } from 'swiper/modules';

const projects = [
  { title: 'Refurbishment of Board Room', image: 'src/assets/boardrooom.png' },
  { title: '250kW Biogas Plant Installation', image: 'src/assets/biogas_plant.jpg' },
  { title: 'Solar Hybrid System Maintenance for rural Schools', image: 'src/assets/solar_school.jpg' },
  { title: 'Refurbishment of Presidential Suite - AMES Hotel, Melaka', image: 'src/assets/PSS-Master-Room-Bed-1200x700.png' },
];

const ProjectSwiper = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }} 
    className="swipe-back">
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="swiper-wrapper-container">
      <h2 className="swiper-title">Our Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="slide-card">
              <img src={project.image} alt={project.title} className="slide-image" />
              <div className="slide-title">{project.title}</div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
    </motion.div>
  );
};

export default ProjectSwiper;
