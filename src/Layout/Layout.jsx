import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

const Layout = () => {


  return (
    <>
      <Sidebar />
      <div className='sm:ml-[250px] sm:mt-0 mt-16'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout