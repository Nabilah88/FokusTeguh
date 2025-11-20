import React, { useState } from 'react';
import {motion} from "framer-motion";
import CustomModal from './Modal'; 
import './ProjectGallery.css';


import solar1 from '../../assets/solar.jpg';
import solar2 from '../../assets/solar_school.jpg';
import solar3 from '../../assets/GreenSabah_18.jpg';
import biogas1 from '../../assets/img-03-1.jpg';
import biogas2 from '../../assets/biogas_plant.jpg';
import biogas3 from '../../assets/19369.jpg';
import hybrid1 from '../../assets/67978.jpg';
import hybrid2 from '../../assets/14.jpg';

const projects = [
  {
    id: 1,
    title: 'Solar Hybrid System (MOE Rural Schools)',
    category: 'Solar',
    description: 'Installation of hybrid solar systems for rural schools to ensure reliable and sustainable energy supply in remote areas.',
    images: [
      { src: solar1, caption: 'Installation phase – connecting panels to inverter' },
      { src: solar2, caption: 'Completed hybrid solar system at rural school' },
      { src: solar3, caption: 'System inspection and testing' },
    ],
    client: 'Ministry of Education',
    year: '2023',
    location: 'Sabah, Malaysia',
  },
  {
    id: 2,
    title: 'Biogas Energy Facility',
    category: 'Biogas',
    description: 'Biogas plant designed to convert organic waste into renewable energy, reducing carbon footprint and promoting green initiatives.',
    images: [
      { src: biogas1, caption: 'Fermentation tanks during installation' },
      { src: biogas2, caption: 'Fully operational biogas facility' },
      { src: biogas3, caption: 'Biogas production from farm animal waste' },
    ],
    client: 'Private Sector',
    year: '2022',
    location: 'Perak, Malaysia',
  },
  {
    id: 3,
    title: 'Hybrid Renewable System',
    category: 'Hybrid',
    description: 'Combined solar and wind system to provide consistent power for remote communities.',
    images: [
      { src: hybrid1, caption: 'Hybrid microgrid for remote island community' },
      { src: hybrid2, caption: 'Combines solar, wind, and energy storage for factory' },
    ],
    client: 'NGO',
    year: '2023',
    location: 'Terengganu, Malaysia',
  },
];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  const nextImage = () => {
    setCurrentImgIndex((prev) => 
      (prev + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => 
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
    className="project-gallery container">
      <div className="filter-buttons text-center mb-4">
        {['All', 'Solar', 'Biogas', 'Hybrid'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="gallery-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="gallery-item"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImgIndex(0);
              setShow(true);
            }}
          >
            <img src={project.images[0].src} alt={project.title} />
            <div className="overlay">
              <h5>{project.title}</h5>
            </div>
          </div>
        ))}
      </div>

    
      <CustomModal show={show} onClose={() => setShow(false)}>
        {selectedProject && (
          <div className="modal-content-custom">
            <h2>{selectedProject.title}</h2>
            <div className="carousel-container">
              <button className="nav-btn prev" onClick={prevImage}>‹</button>
              <div className="carousel-image">
                <img
                  src={selectedProject.images[currentImgIndex].src}
                  alt={selectedProject.title}
                />
                <p className="caption">{selectedProject.images[currentImgIndex].caption}</p>
              </div>
              <button className="nav-btn next" onClick={nextImage}>›</button>
            </div>

            <div className="project-info">
              <p><strong>Client:</strong> {selectedProject.client}</p>
              <p><strong>Location:</strong> {selectedProject.location}</p>
              <p><strong>Year:</strong> {selectedProject.year}</p>
              <p className="description">{selectedProject.description}</p>
            </div>
          </div>
        )}
      </CustomModal>
    </motion.div>
  );
};

export default ProjectGallery;
