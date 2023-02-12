import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-7 bg-pink-500 rounded-md h-12 mx-10 lg:mx-32 font-asap'>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/aboutme">About</Link>
    </div>
  )
}

export default Navbar
