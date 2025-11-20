import React, { useEffect, useRef, useState }  from 'react'
import './CallToAction.css'
import { Link } from 'react-router-dom';
import windfarm from '../../assets/2149352244.jpg'

const CallToAction = () => {
     const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
     <div className="call-bg">
      <section ref={ref} className={`call-card ${visible ? "visible" : ""}`}>
        <h2 className="call-top-text">
          "Let's Build a Sustainable Future Together"
        </h2>

        <div className="call-content">
          <div className="call-image">
            <img src={windfarm} alt="Wind Turbines" />
          </div>

          <div className="call-text">
            <h1>
              Taking care <br /> of Earth.
            </h1>
            <div className="call-buttons">
              <button className="btn dark"><Link to="/GetAquote">START YOUR PROJECT</Link></button>
              <button className="btn light"><Link to="/Contact">CONTACT US</Link></button>
            </div>
          </div>
        </div>

        <div className="bottom-strip"></div>
      </section>
    </div>
  )
}

export default CallToAction