import React from 'react'
import logo from "../../../assets/logo.png"
const Logo = () => {
  return (
    <div className='flex items-end font-urbanist'>
      <img className='mb-2' src={logo} alt="" />
      <p className='text-3xl font-extrabold -ml-4 text-white'>DoDo</p>
    </div>
  )
}

export default Logo
