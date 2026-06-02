// Register.jsx

import { Link } from "react-router";

import {
  Clapperboard,
  Star,
  Smartphone,
  Gift,
} from "lucide-react";

import { UseAuth } from "../Hooks/useAuth";

const Register = () => {

  const {
    register,
    handleSubmit,
    errors,
    onRegister,
  } = UseAuth();

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
            Join the Cinema <br />
            Community
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed mb-10">
            Create an account and unlock a personalized movie
            experience like no other.
          </p>

          {/* FEATURES */}
          <div className="space-y-8">
            
            <div className="flex gap-4">
              <Star className="text-yellow-400 mt-1" size={30} />

              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Personalized Recommendations
                </h3>

                <p className="text-gray-400">
                  Get movie suggestions based on favorites.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Smartphone className="text-green-400 mt-1" size={30} />

              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Sync Across Devices
                </h3>

                <p className="text-gray-400">
                  Access your watchlist anywhere.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Gift className="text-pink-400 mt-1" size={30} />

              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Exclusive Features
                </h3>

                <p className="text-gray-400">
                  Enjoy curated movie collections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#050B1A] border border-white/10 rounded-[40px] p-10">
          
          <p className="text-orange-400 uppercase tracking-[0.4em] text-center mb-4">
            Get Started
          </p>

          <h2 className="text-5xl font-bold text-center mb-4">
            Create Account
          </h2>

          <p className="text-gray-400 text-center mb-10">
            Join thousands of movie enthusiasts
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onRegister)}
            className="space-y-6"
          >
            
            {/* NAME */}
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your name"

                {...register("name", {
                  required: "Name is required",
                })}

                className="w-full bg-[#091225] border border-white/10 rounded-full px-6 py-4 outline-none focus:border-orange-500"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                placeholder="Create password"

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
              Create Account
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-white/10"></div>

              <span className="text-gray-500 text-sm">
                Already have account?
              </span>

              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>

            {/* LOGIN BUTTON */}
            <Link to="/">
              <button
                type="button"
                className="w-full border border-orange-500 text-orange-400 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
              >
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;