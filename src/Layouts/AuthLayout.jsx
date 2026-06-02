import React from 'react'
import Navbar from '../Components/NAvBar'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return <div>
    <Navbar/>
    <Outlet/>
  </div>
}

export default AuthLayout