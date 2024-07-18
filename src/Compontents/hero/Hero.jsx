import React from 'react'
import hero from '../img/hero.jpeg'
import hero2 from '../img/hero2.jpeg'



const Hero = () => {
  return (
    
      
      <header className='w-full h-auto'>
          <img className='w-full h-[850px] hidden md:block' src={hero} alt="" />
          <img className='w-full h-screen md:hidden' src={hero2} alt="" />
      </header>


  )
}

export default Hero
