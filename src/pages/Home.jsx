import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 h-screen'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home