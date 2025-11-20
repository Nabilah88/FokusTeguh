import React from 'react'
import Hero from './Hero'
import Content from './Content'
import Projects from './Projects'
import Reasons from './Reasons'
import Call from './Call'


const Maintenance = () => {
  return (
    <div>
    <Hero/>
   <div className='container'><Content/></div> 
   <div className='container'><Projects/></div>
   <Reasons/>
   <div className='container'><Call/></div>

    </div>
  )
}

export default Maintenance