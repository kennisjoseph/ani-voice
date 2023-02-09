import React from 'react'

const Card = ({name}) => {
  return (
    <div>
        <div className='sm:h-52 sm:w-44 md:h-52 md:w-44 lg:h-80 lg:w-64 bg-slate-900 rounded-lg border-2'>
            {name}
        </div>
    </div>
  )
}

export default Card
