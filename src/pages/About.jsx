import React from 'react'
import Navbar from '../components/Navbar'
import 'animate.css'

const About = () => {
  return (
    <div className='lg:h-screen md:h-screen bg-gradient-to-r from-cyan-500 to-blue-500 pt-7'>
      <Navbar />
      <h1 className='text-white text-center font-asap text-6xl pt-7 animate__animated animate__bounceIn'>ABOUT ME</h1>
      <h1 className='text-white text-center text-4xl pt-7'>Hey I'm<span className='text-red-500 text-6xl font-nanum animate__animated animate__fadeIn'> Kennis Joseph</span>,</h1>
      <p className='text-white font-asap text-xl pt-7 mx-20 max-[700px]:mx-10'>I am a second-year computer science student with a strong interest in software development. Although I am still in the early stages of my education and career, I am eager to learn and grow as a developer. I have experience working with MERN Stack web apps, core Java, Docker, DevOps and familiar with a variety of other technologies, frameworks and libraries. I am always looking for opportunities to gain practical experience and to learn from more experienced developers. I am an active participant in coding competitions, hackathons and open-source projects. In my free time, I enjoy reading about new technologies, experimenting with new programming languages, and staying active by playing badminton and volleyball. You can find some of my projects on my GitHub profile, and feel free to reach out to me if you have any questions or if you think I could help with your project.
      Thanks for stopping by!</p>
      <p className='font-asap text-3xl text-center py-7 text-red-500'>Connect With me:</p>
      <div className='flex gap-5 text-white justify-center pb-10'>
        <div className='bg-black px-6 py-3 border-2 border-white cursor-pointer hover:bg-white hover:border-black hover:text-black'><a href='https://github.com/kennisjoseph'>GitHub</a></div>
        <div className='bg-cyan-500 px-6 py-3 border-2 border-white cursor-pointer hover:bg-white hover:border-cyan-500 hover:text-cyan-500'><a href='https://twitter.com/kennisjpeg'>Twitter</a></div>
        <div className='bg-cyan-600 px-6 py-3 border-2 border-white cursor-pointer hover:bg-white hover:border-cyan-600 hover:text-cyan-600'><a href='https://linkedin.com/in/kennis-joseph-a519571a1/'>LinkedIn</a></div>
      </div>
      
    </div>
  )
}

export default About
