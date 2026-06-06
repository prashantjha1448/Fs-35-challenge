import React from 'react'
// import { Outlet } from 'react-router'
import MovieCard from '../Components/MovieCard'
import  movie from '../utils/Movies.Json'

const Movies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6  min-h-screen bg-[#020817] text-white">
      {
        movie.map((data)=><MovieCard movie={data} key={data.id}/>)
      }
      {/* <Outlet/> */}
    </div>
  )
 
}

export default Movies