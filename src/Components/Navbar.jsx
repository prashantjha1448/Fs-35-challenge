// Navbar.jsx

import { Link, NavLink } from "react-router";

import {
  Clapperboard,
  Search,
  Heart,
  User,
  Menu,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-white/10 bg-[#020817]/90 backdrop-blur-lg sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/">
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

        {/* NAV LINKS */}
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
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "text-gray-300 hover:text-orange-400 transition"
            }
          >
            Movies
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "text-gray-300 hover:text-orange-400 transition"
            }
          >
            Favorites
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "text-gray-300 hover:text-orange-400 transition"
            }
          >
            Profile
          </NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* SEARCH */}
          <button className="w-12 h-12 rounded-full bg-[#091225] border border-white/10 flex items-center justify-center hover:border-orange-500 transition">
            
            <Search size={20} className="text-gray-300" />
          </button>

          {/* FAVORITE */}
          <button className="w-12 h-12 rounded-full bg-[#091225] border border-white/10 flex items-center justify-center hover:border-orange-500 transition">
            
            <Heart size={20} className="text-gray-300" />
          </button>

          {/* PROFILE */}
          <button className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center hover:scale-105 transition">
            
            <User size={20} />
          </button>

          {/* LOGIN */}
          <Link to="/login">
            <button className="hidden md:block px-7 py-3 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white transition font-medium">
              Sign In
            </button>
          </Link>

          {/* MOBILE MENU */}
          <button className="lg:hidden w-12 h-12 rounded-full bg-[#091225] border border-white/10 flex items-center justify-center">
            
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;