import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { UseAuth } from '../Hooks/useAuth';

const Profile = () => {
     const { user, isAuthenticate } = useSelector((store) => store.auth);
     const [showDropdown, setShowDropdown] = useState(false);
     const {onLogout} = UseAuth()
  return <div >{
            isAuthenticate ? (<div 
              onClick={() => setShowDropdown(!showDropdown)}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg" >
              {
                showDropdown && (
              <div className="absolute right-0 top-14 w-72 rounded-2xl bg-[#091225]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">

                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg">
                    {user?.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {user?.email}
                  </p>
                </div>

                <div className="border-t border-white/10 p-3">
                  <button 
                  onClick={onLogout}
                  className="w-full py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition font-medium">
                    Logout
                  </button>
                </div>
                {user?.name}
              </div>
            )
              }
            </div>) : (<button className="hidden md:block px-7 py-3 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white transition font-medium">
            Sign In
          </button>)
 } </div>
}

export default Profile