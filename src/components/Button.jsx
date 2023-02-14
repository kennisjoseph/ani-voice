import React, { useState } from 'react'
import './Button.css'
import { Navigate } from 'react-router-dom'

const Button = (props) => {

  const[navigate,setNavigate] = useState(false);
  if(navigate){
    return <Navigate to={props.loc} />
  }
  return (
    <button className='button' onClick={()=>{setNavigate(true)}}> <span>{props.title}</span>
    </button>
  )
}

export default Button
