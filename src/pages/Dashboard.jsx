// Dashboard.jsx

import {
  Clapperboard,
  Film,
  Heart,
  Star,
  User,
  Bell,
  TrendingUp,
  PlayCircle,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white flex">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[280px] bg-[#050B1A] border-r border-white/10 p-6 hidden lg:block">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-14">
          
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
            
            <Clapperboard size={26} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              CINEVIEW
            </h1>

            <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
              Dashboard
            </p>
          </div>
        </div>

        {/* MENU */}
        <div className="space-y-4">
          
          <button className="w-full flex items-center gap-4 bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-4 rounded-2xl font-semibold">
            
            <Film />

            Overview
          </button>

          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#091225] hover:bg-[#111C31] transition">
            
            <Heart />

            Favorites
          </button>

          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#091225] hover:bg-[#111C31] transition">
            
            <Star />

            Top Rated
          </button>

          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#091225] hover:bg-[#111C31] transition">
            
            <Bell />

            Notifications
          </button>

          <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#091225] hover:bg-[#111C31] transition">
            
            <User />

            Profile
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-8">
        
        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-10">
          
          <div>
            <h1 className="text-5xl font-bold mb-2">
              Dashboard
            </h1>

            <p className="text-gray-400 text-lg">
              Welcome back, Prashant 👋
            </p>
          </div>

          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-xl font-bold">
            P
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          
          {/* CARD */}
          <div className="bg-[#050B1A] border border-white/10 rounded-3xl p-6">
            
            <div className="flex items-center justify-between mb-5">
              
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                
                <Film size={28} />
              </div>

              <TrendingUp className="text-green-400" />
            </div>

            <h2 className="text-4xl font-bold mb-2">
              120+
            </h2>

            <p className="text-gray-400">
              Movies Watched
            </p>
          </div>

          {/* CARD */}
          <div className="bg-[#050B1A] border border-white/10 rounded-3xl p-6">
            
            <div className="flex items-center justify-between mb-5">
              
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                
                <Heart size={28} />
              </div>

              <TrendingUp className="text-green-400" />
            </div>

            <h2 className="text-4xl font-bold mb-2">
              58
            </h2>

            <p className="text-gray-400">
              Favorites
            </p>
          </div>

          {/* CARD */}
          <div className="bg-[#050B1A] border border-white/10 rounded-3xl p-6">
            
            <div className="flex items-center justify-between mb-5">
              
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                
                <Star size={28} />
              </div>

              <TrendingUp className="text-green-400" />
            </div>

            <h2 className="text-4xl font-bold mb-2">
              4.9
            </h2>

            <p className="text-gray-400">
              Average Rating
            </p>
          </div>

          {/* CARD */}
          <div className="bg-[#050B1A] border border-white/10 rounded-3xl p-6">
            
            <div className="flex items-center justify-between mb-5">
              
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400">
                
                <PlayCircle size={28} />
              </div>

              <TrendingUp className="text-green-400" />
            </div>

            <h2 className="text-4xl font-bold mb-2">
              320h
            </h2>

            <p className="text-gray-400">
              Watch Time
            </p>
          </div>
        </div>

        {/* ================= RECENT MOVIES ================= */}
        <div className="bg-[#050B1A] border border-white/10 rounded-[40px] p-8">
          
          <div className="flex items-center justify-between mb-8">
            
            <div>
              <h2 className="text-4xl font-bold mb-2">
                Recently Watched
              </h2>

              <p className="text-gray-400">
                Your latest movie activity
              </p>
            </div>

            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 font-semibold">
              View All
            </button>
          </div>

          {/* MOVIES */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#091225] rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/40 transition"
              >
                
                <img
                  src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  className="w-full h-[220px] object-cover"
                />

                <div className="p-5">
                  
                  <div className="flex items-center justify-between mb-3">
                    
                    <h3 className="text-2xl font-bold">
                      Interstellar
                    </h3>

                    <span className="text-yellow-400">
                      ⭐ 8.9
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-5">
                    A science fiction masterpiece exploring space and time.
                  </p>

                  <button className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 font-semibold">
                    Watch Again
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;