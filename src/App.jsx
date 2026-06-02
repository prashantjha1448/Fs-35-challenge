import React from 'react'
import {api }from "./config/AxiosInstance"


const App = () => {

  const apifnct = async()=>{
    const res =  await api.get('/movies/popular')
    console.log(res);
    
    return res
  }

  apifnct()
 
  return (
    <div>App</div>
  )
}

export default App