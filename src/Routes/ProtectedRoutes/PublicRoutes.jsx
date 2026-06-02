import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoutes = () => {

  const {isAuthenticate }= useSelector((store)=>store.Auth)

  if (isAuthenticate){
    return <Navigate to={'/home'} replace/>
  }
  return <Outlet/>
}

export default PublicRoutes