import React from 'react'
import Button from './Button'
import Card from './Card'
import './Hero.css'

const Hero = () => {
  return (
    <>
    {/* navbar */}
        <div className='grid max-[730px]:grid-cols-1 max-[1600px]:grid-cols-5 max-[1200px]:grid-cols-4 max-[970px]:grid-cols-3 md:mt-5 pt-9'>
            <Card imgsrc="/images/luffy.jpg" sound="/images/sound.png"/>
            <Card imgsrc="/images/brook.jpg" />
            <Card imgsrc="/images/zoro.jpg" />
            <Card imgsrc="/images/franky.jpg"/>
            <Card imgsrc="/images/nami.jpg"/>
            <Card imgsrc="/images/sanji.jpg"/>
        </div>
        <div className='flex justify-center mt-6'>
            <Button />
        </div>
    </>
  )
}

export default Hero
