import React from 'react'
import Hero from './Hero'
import Introsect from './Introsect'
import CoreService from './CoreService'
import Gallery from './Gallery'
import Promote from './Promote'
import CallToAction from './CallToAction'


const Management = () => {
  return (
    <div>
    <Hero/>
    <div className="container"><Introsect/></div>
    <CoreService/>
    <Gallery/>
    <Promote/>
    <CallToAction/>

   

    </div>
  )
}

export default Management