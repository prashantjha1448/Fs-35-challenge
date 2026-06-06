

import { Link } from "react-router";
import { Clapperboard } from "lucide-react";

import { UseAuth } from "../Hooks/useAuth";

const Login = () => {
const { register,  onLoging , handleSubmit , errors } = UseAuth()
  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-6 text-white">
      
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-8">
            
            <Clapperboard size={18} />

            <span className="uppercase tracking-[0.3em] text-sm">
              Cineview
            </span>
          </div>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Welcome to Your <br />
            Cinema Hub
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
            Discover blockbuster trailers, save your favorite
            movies, and build your ultimate watchlist.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#050B1A] border border-white/10 rounded-[40px] p-10">
          
          <p className="text-orange-400 uppercase tracking-[0.4em] text-center mb-4">
            Welcome Back
          </p>

          <h2 className="text-5xl font-bold text-center mb-4">
            Sign In
          </h2>

          <p className="text-gray-400 text-center mb-10">
            Access your personalized cinema experience
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onLoging)}
            className="space-y-6"
          >
            
            {/* EMAIL */}
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                
                {...register("email", {
                  required: "Email is required",
                })}

                className="w-full bg-[#091225] border border-white/10 rounded-full px-6 py-4 outline-none focus:border-orange-500"
              />

              {/* ERROR */}
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"

                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}

                className="w-full bg-[#091225] border border-white/10 rounded-full px-6 py-4 outline-none focus:border-orange-500"
              />

              {/* ERROR */}
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 py-4 rounded-full font-semibold text-lg hover:scale-[1.02] transition"
            >
              Sign In
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-white/10"></div>

              <span className="text-gray-500 text-sm">
                New to CINEVIEW?
              </span>

              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>

            {/* REGISTER BUTTON */}
            <Link to="/register">
              <button
                type="button"
                className="w-full border border-orange-500 text-orange-400 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
              >
                Create Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;