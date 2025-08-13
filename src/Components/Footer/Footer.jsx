import React from 'react'
import Logo from "../../assets/logo.png";


const Footer = () => {
  return (
    <div className='relative z-50 bg-white md:px-[100px] p-5'>
      <div className="flex items-center justify-between">
        <div className='flex items-center'>
          <img className='w-10' src={Logo} alt="Recipe" />
          <h2 className='text-2xl ml-5 font-black'>Recipe</h2>
        </div>
        <h2 className='text-2xl font-black text-[#2554DA]'>Route</h2>
      </div>
      <hr className='border-neutral-300 my-5' />
      <p className='text-center text-neutral-600'>@2025 Momen Hussein. All Rights Reserved.</p>
    </div>
  )
}

export default Footer