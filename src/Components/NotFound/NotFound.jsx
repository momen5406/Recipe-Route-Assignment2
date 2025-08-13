import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h2 className='font-headings text-5xl uppercase bg-linear-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent'>404 Error</h2>
      <p className='text-3xl my-10'>Page not Found</p>
      <Link to='/' className='bg-secondary text-white px-4 py-2 border-x inline-block rounded-xl'>Return to Home</Link>
    </div>
  )
}

export default NotFound