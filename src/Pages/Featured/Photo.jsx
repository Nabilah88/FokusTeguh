
import "./Photo.css";
import img1 from '../../assets/17.jpg';
import img2 from '../../assets/19366.jpg';
import img3 from '../../assets/2149352233.jpg';
import img4 from '../../assets/Kl-HeartCare-Smallslider-2.jpg';
import img5 from '../../assets/bank_rakyat.jpg';

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const images = [
  { src: img1, caption: "Solar Project #1" },
  { src: img2, caption: "Biogas Project #2" },
  { src: img3, caption: "Hybrid Project #3" },
  { src: img4, caption: "Hospital Renovation Project #4" },
  { src: img5, caption: "Bank Rakyat Renovation #5" }
];



function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="photo-page">
    <section className="image-section">
      <div ref={ref}>
        <img src={image.src} alt={image.caption} className="parallax-img" />
      </div>
      <div className="photo-caption">
      <motion.h2 style={{ y }}>{image.caption}</motion.h2>
      </div>
    </section>
    </div>
  );
}


export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {images.map((img, idx) => (
        <Image key={idx} image={img} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

