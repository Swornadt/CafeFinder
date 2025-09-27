// components/SearchBar.jsx
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  return (
    <div className="flex shadow-lg rounded-full overflow-hidden border border-gray-200 bg-white focus-within:ring-2 focus-within:ring-blue-500 transition">
      <span className="px-4 flex items-center text-gray-400">📍</span>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search for a location or city..."
        className="flex-1 px-2 py-3 text-gray-700 outline-none"
      />
      <button
        onClick={() => onSearch(location)}
        className="px-6 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
}
