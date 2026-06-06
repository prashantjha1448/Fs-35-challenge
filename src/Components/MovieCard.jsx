import { Heart, Play, Star, Calendar } from "lucide-react";

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="group bg-white border border-gray-200 rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* HEART */}
        <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-red-500 hover:text-white transition">
          <Heart size={18} />
        </button>

        {/* PLAY */}
        <button className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-110 transition">
          <Play size={22} fill="white" />
        </button>

        {/* RATING */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/70 px-3 py-1 rounded-full backdrop-blur">
          <Star
            size={14}
            fill="gold"
            className="text-yellow-400"
          />
          <span className="text-white text-sm font-medium">
            {Number(movie.vote_average).toFixed(1)}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-900 line-clamp-1">
          {movie.title}
        </h2>

        <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
          <Calendar size={14} />
          <span>{movie.release_date}</span>
        </div>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
          {movie.overview}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600">
            ID #{movie.id}
          </span>

          <span className="text-xs text-gray-500">
            {movie.vote_count} votes
          </span>
        </div>

        <button className="w-full mt-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium hover:opacity-90 transition">
          View Details
        </button>

      </div>
    </div>
  );
};

export default MovieCard;