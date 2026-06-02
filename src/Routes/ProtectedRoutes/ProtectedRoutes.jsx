import React from 'react'
import { Navigate, Outlet } from 'react-router'
import {useSelector} from "react-redux"

const ProtectedRoutes = () => {
  const {isAuthenticate }= useSelector((store)=>store.Auth)

  if(!isAuthenticate) {
    return <Navigate to={'/'} replace/>
  }
  return <Outlet/>
}

export default ProtectedRoutes