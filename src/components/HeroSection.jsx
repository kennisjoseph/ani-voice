import React from 'react'
import Card from './Card'
import 'animate.css'
import Button from './Button'
import Onichaan from './Onichaan'

const HeroSection = () => {
  return (
    <div>
      <h1 className='font-archivo text-6xl text-center pt-14 text-white animate__animated animate__jello'>Welcome to <span className='text-red-500'> Ani-Voice</span></h1>


      <div className='flex justify-center gap-10 mt-12 max-[980px]:h-80 max-[700px]:h-1/2'>
        <div className='max-[700px]:mx-5  max-[980px]:mx-10 max-[980px]:w-full w-1/2 font-archivo text-white text-xl animate__animated animate__fadeIn'>
        Ani-voice is an exciting and interactive project that brings your favorite anime characters to life. With just a click, you can listen to the voices of your favorite characters from various anime shows. Ani-voice is a fun and engaging platform that caters to anime fans of all ages and allows them to relive some of their favorite moments in a new and exciting way. Whether you're a fan of classic anime or the latest anime series, Ani-voice is the perfect place to immerse yourself in the world of anime entertainment. Get ready to click, listen, and enjoy the magic of Ani-voice!
        </div>
        <div className=''>
          <Onichaan />
        </div>
      </div>

      <div className='flex justify-center mt-6'>
        {/* work on this for mobile device */}
            <Button title="Get-Started ->" loc="/character"/>
      </div>
      
    </div>
  )
}

export default HeroSection
