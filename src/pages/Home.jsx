import React from 'react'
import Hero from '../components/Hero'
// import Hover from '../components/Hover'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='lg:h-screen md:h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
      <Navbar />
      <Hero />
      {/* <Hover /> */}
    </div>
  )
}

export default Home