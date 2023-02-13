import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-7 text-white bg-lime-500 rounded-full h-12 mx-10 lg:mx-32 font-asap'>
        <Link to="/">Home</Link>
        <Link to="/character">Characters</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar
