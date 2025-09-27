export default function CafeList({ cafes, onSelectCafe }) {
  return (
    <div className="space-y-4">
      {cafes.map((cafe) => (
        <div
          key={cafe.id}
          onClick={() => onSelectCafe(cafe)}
          className="p-4 bg-white hover:shadow-lg hover:scale-[1.02] transition rounded-2xl cursor-pointer border border-gray-200 relative"
        >
          <div className="absolute top-3 right-3 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {cafe.distance.toFixed(2)} km
          </div>
          <h3 className="font-semibold text-lg text-gray-800">{cafe.name}</h3>
          <p className="text-gray-600 text-sm flex items-center mt-1">
            📍 {cafe.address}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Lat: {cafe.lat.toFixed(4)} | Lon: {cafe.lon.toFixed(4)}
          </p>
        </div>
      ))}
    </div>
  );
}
