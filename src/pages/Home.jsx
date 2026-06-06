import {
  Clapperboard,
  Play,
} from "lucide-react";
import movie from '../utils/Movies.Json'
import MovieCard from "../Components/MovieCard";




const Home = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white">


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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movie.slice(0, 4).map((data) => (
            <MovieCard
              key={data.id}
              movie={data}
            />
          ))}
        </div>
      </section>

      {/* =======================Action & Theallier================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
         <div className="flex items-end justify-between mb-10">

          <div>
            <h2 className="text-5xl font-bold mb-3">
              Actions This Week
            </h2>

            <p className="text-gray-400 text-lg">
              Browse the movies people are watching around the india.
            </p>
          </div>

          <p className="text-gray-500">
            Updated daily
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movie.slice(5, 9).map((data) => (
            <MovieCard
              key={data.id}
              movie={data}
            />
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