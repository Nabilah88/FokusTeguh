import React from 'react'
import './Location.css'
import shah_alam from '../../assets/shah_alam.jpg'
import arrow from '../../assets/arrow.png'

const Location = () => {
  return (
    <section className="home-office prel">
         <div className='home-office'>
                  <img src={shah_alam} alt='engineers'/>
                </div>
                <div className = 'office-text'>
                  <h1>Shah Alam</h1>
                  <p>Our office is located in Shah Alam, the capital city of Selangor state. </p>
                  <div className="animated-line-container">
              <div className="animated-line">
              </div>
              </div>
        <div className="offices-cta anim-block">
          <a href="/locations/shah_alam" className="btn-link anim-elem done">
            Meet our team
            <img
              aria-hidden="true"
              src={arrow}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location