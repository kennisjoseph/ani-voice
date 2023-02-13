import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='lg:h-screen md:h-screen bg-gradient-to-r from-cyan-500 to-blue-500 pt-7'>
      <Navbar />
      <h1 className='text-white text-center font-asap text-6xl pt-7'>ABOUT ME</h1>
    </div>
  )
}

export default About
