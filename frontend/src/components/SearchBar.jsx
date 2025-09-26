// components/SearchBar.jsx
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  return (
    <div className="flex shadow-md rounded-xl overflow-hidden border border-gray-200 bg-white">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search for a location..."
        className="flex-1 px-4 py-3 text-gray-700 outline-none"
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
