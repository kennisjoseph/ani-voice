import React from 'react'
import Hero from '../components/CharBase'
import Navbar from '../components/Navbar'

const Character = () => {
  return (
    <div className='lg:h-screen md:h-screen bg-gradient-to-r from-cyan-500 to-blue-500  pt-7'>
      <Navbar />  
      <Hero />
    </div>
  )
}

export default Character
