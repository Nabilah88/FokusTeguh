import React, { useEffect, useRef, useState }  from 'react'
import './CallAction.css'
import { Link } from 'react-router-dom';
import Calling from '../../assets/3453.jpg'

const CallAction = () => {
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
          "Be our Client"
        </h2>

        <div className="call-content">
          <div className="call-image">
            <img src={Calling} alt="Contact" />
          </div>

          <div className="call-text">
            <h1>
              Be the first <br /> to reach out.
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

export default CallAction