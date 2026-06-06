import React from 'react'
import {  NavLink, } from "react-router";

const NabLinks = () => {
  return (
      <div className="hidden lg:flex items-center gap-10 text-[17px] font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "text-gray-300 hover:text-orange-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/home/movies"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "text-gray-300 hover:text-orange-400 transition"
            }
          >
            Movies
          </NavLink>

          <NavLink
            to="/home/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "text-gray-300 hover:text-orange-400 transition"
            }
          >
            Favorites
          </NavLink>

        </div>
  )
}

export default NabLinks