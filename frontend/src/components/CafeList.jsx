

export default function CafeList({ cafes, onSelectCafe }) {
  return (
    <div className="space-y-4">
      {cafes.map((cafe) => (
        <div
          key={cafe.id}
          onClick={() => onSelectCafe(cafe)}
          className="p-4 bg-gray-100 hover:bg-gray-200 transition rounded-xl shadow-sm cursor-pointer"
        >
          <h3 className="font-semibold text-lg text-gray-800">{cafe.name}</h3>
          <p className="text-gray-600 text-sm">{cafe.address}</p>
          <p className="text-xs text-gray-400 mt-1">
            📍 Lat: {cafe.lat.toFixed(4)}, Lon: {cafe.lon.toFixed(4)}
            📍 {cafe.distance.toFixed(2)} km away
          </p>
        </div>
      ))}
    </div>
  );
}
