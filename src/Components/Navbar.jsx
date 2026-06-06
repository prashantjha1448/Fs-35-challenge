
import { Link, } from "react-router";

import {
  Menu,
  Sun,
  Moon,
} from "lucide-react";
import UseTheme from "../Hooks/UseTheme";
import NabLinks from "./NabLinks";
import Logo from "./Logo";
import Serach from "./Serach"
import Profile from "./Profile";


const Navbar = () => {

  const {darkMode , toggleTheme} = UseTheme()

  return (
    <nav className="w-full border-b border-white/10 bg-[#020817]/90 backdrop-blur-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Logo/>

        <NabLinks/>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

   
          <Serach/>
          {/* FAVORITE */}
          <div 
          onClick={()=>toggleTheme}
          className="w-12 h-12 rounded-full bg-[#091225] border border-white/10 flex items-center justify-center hover:border-orange-500 transition">

            {
              darkMode ?(<Sun size={20} className="text-gray-300" /> ) :
              (<Moon size={20} className="text-gray-300" />)
            }
          </div>

          <Profile/>

          <button className="lg:hidden w-12 h-12 rounded-full bg-[#091225] border border-white/10 flex items-center justify-center">

            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
