import { Link, } from "react-router";
import {Clapperboard} from "lucide-react"
import React from 'react'

const Logo = () => {
  return  <Link to="/">
          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">

              <Clapperboard size={22} />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-wider text-white">
                CINEVIEW
              </h1>

              <p className="text-xs tracking-[0.3em] text-orange-400 uppercase">
                Cinema Hub
              </p>
            </div>
          </div>
        </Link>
}

export default Logo