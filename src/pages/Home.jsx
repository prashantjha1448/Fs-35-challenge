// Home.jsx

import {
  Clapperboard,
  Search,
  Play,
  Heart,
  Star,
} from "lucide-react";

import { Link } from "react-router";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    rating: "8.9",
  },
  {
    id: 2,
    title: "Dark Knight",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
    rating: "9.1",
  },
  {
    id: 3,
    title: "Avatar",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop",
    rating: "8.5",
  },
  {
    id: 4,
    title: "Inception",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop",
    rating: "8.8",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      
      {/* ================= NAVBAR ================= */}
      <nav className="border-b border-white/10 sticky top-0 bg-[#020817]/90 backdrop-blur-lg z-50">
        
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 rounded-full">
            
            <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center font-bold">
              CV
            </div>

            <h1 className="text-2xl font-bold tracking-wider">
              CINEVIEW
            </h1>
          </div>

          {/* NAV LINKS */}
          <ul className="hidden md:flex items-center gap-12 font-medium text-lg">
            
            <li className="hover:text-orange-400 transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-orange-400 transition cursor-pointer">
              Favorites
            </li>

            <li className="hover:text-orange-400 transition cursor-pointer">
              Profile
            </li>
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            
            <button className="w-14 h-14 rounded-full border border-white/10 bg-[#091225] flex items-center justify-center hover:border-orange-500 transition">
              
              <Search size={20} />
            </button>

            <Link to="/login">
              <button className="px-8 py-3 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white transition">
                Sign in
              </button>
            </Link>

            <Link to="/register">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 font-semibold hover:scale-105 transition">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-14">
        
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#050B1A] p-16">
          
          {/* GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            
            {/* TAG */}
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 mb-10">
              
              <span className="tracking-[0.3em] uppercase text-sm">
                Featured
              </span>

              <span className="text-gray-400">
                Top Trending
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-7xl font-black leading-tight max-w-5xl mb-8">
              CINEMATIC STORIES,
              LIVE NOW
            </h1>

            <p className="text-2xl text-gray-400 leading-relaxed max-w-4xl mb-12">
              Explore the latest blockbusters, save favorites,
              and watch trailers in a cinematic experience.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-6">
              
              <button className="flex items-center gap-3 px-8 py-5 rounded-full bg-[#111C31] hover:bg-orange-500 transition text-lg font-semibold">
                
                <Play size={20} />

                Watch Trailer
              </button>

              <button className="px-8 py-5 rounded-full border border-white/10 bg-[#091225] hover:border-orange-500 transition text-lg font-semibold">
                Sign in to save
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRENDING SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="flex items-end justify-between mb-10">
          
          <div>
            <h2 className="text-5xl font-bold mb-3">
              Trending This Week
            </h2>

            <p className="text-gray-400 text-lg">
              Browse the movies people are watching around the globe.
            </p>
          </div>

          <p className="text-gray-500">
            Updated daily
          </p>
        </div>

        {/* MOVIES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group bg-[#050B1A] border border-white/10 rounded-[30px] overflow-hidden hover:border-orange-500/40 transition duration-300"
            >
              
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* HEART */}
                <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 transition">
                  
                  <Heart size={18} />
                </button>

                {/* PLAY */}
                <button className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center hover:scale-110 transition">
                  
                  <Play size={22} fill="white" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                
                <div className="flex items-center justify-between mb-3">
                  
                  <h3 className="text-2xl font-bold">
                    {movie.title}
                  </h3>

                  <div className="flex items-center gap-1 text-yellow-400">
                    
                    <Star size={18} fill="currentColor" />

                    <span>{movie.rating}</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Experience cinematic storytelling with immersive visuals and action.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 mt-10">
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            
            <Clapperboard className="text-orange-400" />

            <h2 className="text-2xl font-bold">
              CINEVIEW
            </h2>
          </div>

          <p className="text-gray-500">
            © 2026 Cineview. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;