import React, { useState } from 'react'

const SearchPage = () => {

  const [query, setQuery] = useState("");
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-start pt-20">
      <div className="w-full max-w-2xl bg-[#091225] rounded-2xl p-5">
        
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="w-full bg-[#020817] border border-white/10 rounded-xl p-4 text-white"
        />

        <div className="mt-4">
          {/* Results */}
        </div>
      </div>
    </div>
}

export default SearchPage