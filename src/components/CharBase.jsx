import React from 'react'
import Button from './Button'
import Card from './Card'
import './Hero.css'

const Hero = () => {
  return (
    <>
    {/* navbar */}
        <div className='grid max-[730px]:grid-cols-1 max-[1600px]:grid-cols-5 max-[1200px]:grid-cols-4 max-[970px]:grid-cols-3'>
            <Card imgsrc="/images/luffy.jpg" sound="/images/voice.png" soundx="/voices/luffy.wav"/>
            <Card imgsrc="/images/brook.jpg" sound="/images/voice.png" soundx="/voices/brook.mp3"/>
            <Card imgsrc="/images/zoro.jpg" sound="/images/voice.png" soundx="/voices/zoro.wav"/>
            <Card imgsrc="/images/franky.jpg" sound="/images/voice.png" soundx="/voices/franky.mp3"/>
            <Card imgsrc="/images/gojo2.jpg" sound="/images/voice.png" soundx="/voices/gojo.wav"/>
            <Card imgsrc="/images/sanji.jpg" sound="/images/voice.png" soundx="/voices/sanji.mp3"/>
            <Card imgsrc="/images/dofy.webp" sound="/images/voice.png" soundx="/voices/dofy.mp3"/>
        </div>
        <div className='flex justify-center mt-6'>
            <Button />
        </div>
    </>
  )
}

export default Hero
