import React from 'react'
import HeroSection from '../components/HeroSection'
// import Hover from '../components/Hover'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500 pt-7'>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default Home