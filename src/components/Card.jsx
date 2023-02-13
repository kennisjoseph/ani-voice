import React from 'react'

const Card = (props) => {
  function play(){
    new Audio(props.soundx).play()
  }
  return (
    <div>
        <div onClick={play} className='group relative h-56 w-56 mx-auto mt-10'>
          <img className='transition ease-in-out duration-200 object-cover rounded-3xl group-hover:blur-sm hover:z-0 cursor-pointer' src={props.imgsrc}></img>
          <img className='transition ease-in-out duration-300 opacity-0 top-14 left-14 absolute group-hover:opacity-100 cursor-pointer' src={props.sound} />
        </div>
    </div>
  )
  }

export default Card
