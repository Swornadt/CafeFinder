import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CafeList from "./components/CafeList";
import MapView from "./components/MapView";

import { getUserLocation } from "./utils/getUserLocation";
import { fetchNearestCafe } from "./utils/fetchCafes";

export default function App() {
  const [cafes, setCafes] = useState([]);
  const [center, setCenter] = useState([27.7172, 85.324]);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  //getting user location
  useEffect(() => {
    getUserLocation()
      .then(([lat, lon]) => {
        setCenter({ lat, lon });
        setUserLocation({ lat, lon });
      })
      .catch((error) => {
        console.warn("Geolocation failed, using default:", error);
      });
  }, []);

  const handleSearch = async (location) => {
    setLoading(true);
    try {
      const {nearestCafes, regionCenter} = await fetchNearestCafe(location, userLocation, 10);
      setCafes(nearestCafes);
      setCenter(regionCenter);  
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to fetch cafes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header of App */}
      <header className="bg-white shadow-md py-4 px-8 text-2xl font-bold text-gray-800">
        ☕ Cafe Finder
      </header>

      {/* Search */}
      <div className="max-w-2xl mx-auto mt-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 px-8 mt-8">
        {/* Cafe List */}
        <div className="md:w-1/3 bg-white shadow-lg rounded-2xl p-4 overflow-y-auto max-h-[80vh]">
          {loading ? (
            <p className="text-center text-gray-500">Loading cafes...</p>
          ) : cafes.length === 0 ? (
            <p className="text-center text-gray-400">
              No cafes found yet. Try searching!
            </p>
          ) : (
            <CafeList cafes={cafes} onSelectCafe={setSelectedCafe} />
          )}
        </div>

        {/* Map */}
        <div className="md:w-2/3 rounded-2xl overflow-hidden shadow-lg">
          <MapView
            cafes={cafes}
            center={userLocation || center}
            selectedCafe={selectedCafe || userLocation}
            userLocation={userLocation}
          />
        </div>
      </div>
    </div>
  );
}
