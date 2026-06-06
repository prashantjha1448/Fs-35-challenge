// ProductCard.jsx

import {
  Star,
  Heart,
  Play,
} from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-[#050B1A] border border-white/10 rounded-[30px] overflow-hidden hover:border-orange-500/40 transition duration-300">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        {/* FAVORITE */}
        <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 transition">
          
          <Heart size={18} />
        </button>

        {/* PLAY BUTTON */}
        <button className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center hover:scale-110 transition">
          
          <Play
            size={22}
            fill="white"
          />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        
        {/* TITLE + RATING */}
        <div className="flex items-center justify-between mb-3">
          
          <h2 className="text-2xl font-bold">
            {product.title}
          </h2>

          <div className="flex items-center gap-1 text-yellow-400">
            
            <Star
              size={18}
              fill="currentColor"
            />

            <span>{product.rating}</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 leading-relaxed mb-5">
          {product.description}
        </p>

        {/* FOOTER */}
        <div className="flex items-center justify-between">
          
          <span className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm">
            {product.genre}
          </span>

          <span className="text-gray-500">
            {product.year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;