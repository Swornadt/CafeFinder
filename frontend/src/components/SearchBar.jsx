import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  return (
    <div className="bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-700 flex shadow-lg rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition">
      
      {/* Icon */}
      <span className="px-4 flex items-center text-gray-400">📍</span>

      {/* Input */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search for a location or city..."
        className="flex-1 px-3 py-3 bg-gray-800 text-gray-100 placeholder-gray-400 outline-none"
      />

      {/* Button */}
      <button
        onClick={() => onSearch(location)}
        className="px-6 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
}
