import React, { useEffect, useRef, useState } from 'react'; // ✅ Import hooks
import Masonry from 'react-masonry-css';
import './Gallery.css';

import solar from '../../assets/13505.jpg';
import biogas from '../../assets/19366.jpg';
import energy from '../../assets/2149205475.jpg';

const items = [
  { id: 1, imgSrc: solar, caption: 'Solar Hybrid System (MOE Rural Schools)', height: '400px' },
  { id: 2, imgSrc: biogas, caption: 'Biogas System – UNITEN', height: '400px' },
  { id: 3, imgSrc: energy, caption: 'Energy Efficiency Program – MOSTI – Nationwide implementation', height: '400px' },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setVisibleItems(prev => [...new Set([...prev, parseInt(id)])]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% visible
    );

    refs.current.forEach(ref => ref && observer.observe(ref));
  }, []);

  return (
    <div className="container">
      <div className="gallery-title">
        <h1>Featured Renewable Projects</h1>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id} 
            ref={el => (refs.current[index] = el)}
            className={`grid-item ${visibleItems.includes(item.id) ? 'visible' : ''}`}
          >
            {item.imgSrc && (
              <img
                src={item.imgSrc}
                alt={item.caption}
                style={{ height: item.height, objectFit: 'cover', width: '100%', borderRadius: '8px' }}
              />
            )}
            {item.caption && <p>{item.caption}</p>}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
