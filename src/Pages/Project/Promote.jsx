import React from 'react'
import './Promote.css'
import {motion}  from "framer-motion";
import experience from '../../assets/customer-experience_12963677 (1).png';
import discipline from '../../assets/time-management_11448968.png';
import commited from '../../assets/innovation_18725435.png'
import endorsed from '../../assets/amendment_17621886.png'


const Promote = () => {
  return (
    <div className='promote-section'>
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='promote-title'>
            <h1>Why Choose Us?</h1>
            </motion.div>
   <motion.div 
       initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="promote-container">
        <div className="card-experience">
          <div className="icon-circle">
            <img src={experience} alt="experience icon" />
          </div>
          <h3>Experience</h3>
          <p>Proven experience in large-scale renewable projects</p>
        </div>
    
       
        <div className="card-discipline">
          <div className="icon-circle">
            <img src={discipline} alt="discipline icon" />
          </div>
          <h3>Discipline</h3>
          <p>Multi-disciplinary project management team</p>
        </div>
    
   
        <div className="card-commited">
          <div className="icon-circle">
            <img src={commited} alt="commited icon" />
          </div>
          <h3>Committed</h3>
          <p>Commitment to sustainability and innovation</p>
        </div>
    
    
        <div className="card-endorsed">
          <div className="icon-circle">
            <img src={endorsed} alt="endorsed icon" />
          </div>
          <h3>Endorsed</h3>
          <p>Government and private sector approvals</p>
        </div>
    
      </motion.div>
    </div>
    
  )
}

export default Promote