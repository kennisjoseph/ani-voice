import React from 'react'
import luffy from '/images/luffy.jpg'

const Card = (props) => {
  
  return (
    <div>
        <div className='h-56 w-56 mx-auto mt-10'>
          <img className='transition ease-in-out duration-200 object-cover rounded-xl hover:blur-sm cursor-pointer' src={props.imgsrc}></img>
          <img className='' src={props.sound} />
        </div>
    </div>
  )
  }

export default Card
