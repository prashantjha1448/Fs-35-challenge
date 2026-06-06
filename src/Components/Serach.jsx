import React from 'react'
import { useNavigate } from 'react-router'
import { Search} from "lucide-react";

const Serach = () => {

  const Navigate = useNavigate()
  return  <button 
          onClick={()=>Navigate('/home/search')}
          className="w-12 h-12 rounded-full bg-[#091225] border border-white/10 flex items-center justify-center hover:border-orange-500 transition">
            <Search 
            
             size={20} className="text-gray-300" />
          </button>
}
export default Serach