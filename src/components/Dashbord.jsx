import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'

function Dashbord() {
  return (
    <div>
        <Navbar2></Navbar2>
        <Outlet></Outlet>
    </div>
  )
}

export default Dashbord