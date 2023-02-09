import React from 'react'
import Button from './Button'
import Card from './Card'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className='h-screen bg-slate-900'>
        <div className='sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row justify-center pt-10 gap-7 bg-slate-600'>
            <Card name={"kennis"}/>
            <Card name={"luffy"}/>
            <Card name={"zoro"}/>
            <Card name={"ussop"}/>
        </div>
        <div className='flex justify-center w-screen mt-6'>
            <Button />
        </div>
        
    </div>
    </>
  )
}

export default Hero
