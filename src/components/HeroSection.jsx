import React from 'react'
import Card from './Card'
import 'animate.css'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className=''>

      <h1 className='font-archivo text-6xl text-center pt-28 text-white animate__animated animate__jackInTheBox'>Welcome to <span className='text-red-500'> Ani-Voice</span></h1>
      <div className='flex justify-around'>
        <div className='h-96 max-[1600px]:w-1/2 max-[730px]:w-screen max-[730px]:mx-10 pt-9 font-archivo text-white text-xl animate__animated animate__fadeIn'>
        Ani-voice is an exciting and interactive project that brings your favorite anime characters to life. With just a click, you can listen to the voices of your favorite characters from various anime shows. Ani-voice is a fun and engaging platform that caters to anime fans of all ages and allows them to relive some of their favorite moments in a new and exciting way. Whether you're a fan of classic anime or the latest anime series, Ani-voice is the perfect place to immerse yourself in the world of anime entertainment. Get ready to click, listen, and enjoy the magic of Ani-voice!
        </div>
        <div>
          {/* image */}
        </div>
      </div>
      <div className='flex justify-center'>
            <Button title="Get-Started ->" loc="/character"/>
        </div>
    </div>
  )
}

export default HeroSection
