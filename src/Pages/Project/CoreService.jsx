import React from 'react'
import './CoreService.css'
import {motion} from "framer-motion";
import feasibility from '../../assets/impact_12443296.png';
import engineering from '../../assets/automation_3322996.png';
import construction from '../../assets/project_2192329 (1).png';
import test from '../../assets/wishlist_12922715.png';
import maintenance from '../../assets/adjust_5188639.png';


const CoreService = () => {
  return (
  <motion.div 
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="core-section">
   <motion.div
   initial={{ opacity: 0, x: -50 }}
   whileInView={{ opacity: 1, x: 0 }}
   transition={{ duration: 0.5, ease: 'easeOut' }}
   viewport={{ once: true }} 
   className="core-title">
     <h1>Core Services</h1>
   </motion.div>
   <div className="core-container">
     <motion.div
     initial={{ opacity: 0, x: -50 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5, ease: 'easeOut' }}
     viewport={{ once: true }} 
     className="card-feasibility">
       <div className="icon-circle">
         <img src={feasibility} alt="feasibility icon" />
       </div>
       <h3>Feasibility & Planning</h3>
       <p>Site assessments, budgeting, regulatory approvals.</p>
     </motion.div>
 
    
     <motion.div
     initial={{ opacity: 0, x: -50 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5, ease: 'easeOut' }}
     viewport={{ once: true }} 
     className="card-engineering">
       <div className="icon-circle">
         <img src={engineering} alt="engineering icon" />
       </div>
       <h3>Engineering & Procurement</h3>
       <p>Coordination with suppliers and contractors.</p>
     </motion.div>
 

     <motion.div
     initial={{ opacity: 0, x: -50 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5, ease: 'easeOut' }}
     viewport={{ once: true }} 
     className="card-construction">
       <div className="icon-circle">
         <img src={construction} alt="construction icon" />
       </div>
       <h3>Construction Management</h3>
       <p>Quality control, safety compliance, on-site supervision.</p>
     </motion.div>
 
 
     <motion.div 
     initial={{ opacity: 0, x: -50 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5, ease: 'easeOut' }}
     viewport={{ once: true }}className="card-test">
       <div className="icon-circle">
         <img src={test} alt="test icon" />
       </div>
       <h3>Testing & Commissioning</h3>
       <p>System verification and client handover.</p>
     </motion.div>
 
     
     <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="card-maintenance">
       <div className="icon-circle">
         <img src={maintenance} alt="Civil icon" />
       </div>
       <h3>Maintenance & Monitoring</h3>
       <p>Post-project servicing and performance tracking.</p>
     </motion.div>
   </div>
 </motion.div>
 
   );
}

export default CoreService