// ImageCarousel.jsx
import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import photo1 from '../../assets/klia.jpg' 
import photo2 from '../../assets/biogas_plant.jpg'
import photo3 from '../../assets/boardrooom.jpg'
import photo4 from '../../assets/Kl-HeartCare-Smallslider-2.jpg'

const photos = [
  { id: 'p1', title: 'Photo One', url: photo1 },
  { id: 'p2', title: 'Photo Two', url: photo2 },
  { id: 'p3', title: 'Photo Three', url: photo3 },
  { id: 'p4', title: 'Photo Four', url: photo4 },
];

const Slideshow = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % photos.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  const next = () => setCurrentIndex((currentIndex + 1) % photos.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  const goTo = index => setCurrentIndex(index);

  return (
    <section className='carousel-section'>
      <h2>Featured Gallery</h2>
      <div className='carousel'>
        <div
          className='carousel-inner'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map(photo => (
            <div className='carousel-slide' key={photo.id}>
              <img src={photo.url} alt={photo.title} />
              <div className='carousel-caption'>{photo.title}</div>
            </div>
          ))}
        </div>

        <button className='carousel-button prev' onClick={prev} aria-label='Previous Slide'>
          &#10094;
        </button>
        <button className='carousel-button next' onClick={next} aria-label='Next Slide'>
          &#10095;
        </button>

        <div className='carousel-indicators'>
          {photos.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
