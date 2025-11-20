import React from 'react'
import Hero from './Hero'
import Build from './Build'
import Projects from'./Projects'


const Construction = () => {
  return (
    <div>
        <Hero/>
        <div className = "container"><Build/></div>
        <Projects/>
    </div>
  )
}

export default Construction