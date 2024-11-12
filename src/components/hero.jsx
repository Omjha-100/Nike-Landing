import React from 'react'

function Hero(props) {
  return (
    <hero>
        <div className='hero-left'>
            <h1 className='hero-heading'>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p className='p-hero'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className='hero-left-btn'>
            <button className='btn-red'>SHOP NOW</button>
            <button className='btn-category'>Category</button>
        </div>
        </div>
        <div className='hero-right'>
          <img className='shoe-img' src={props.image} alt="NIKE SHOE" />
        </div>
    </hero>
  )
}

export default Hero
