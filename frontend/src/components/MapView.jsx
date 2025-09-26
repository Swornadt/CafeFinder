import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { defaultIcon, highlightedIcon, userIcon } from "../assets/markers";
import MapFlyTo from "../hooks/MapFlyTo";

export default function MapView({ cafes, center, selectedCafe, userLocation }) {
  return (
    <div className="w-full h-[80vh] rounded-2xl overflow-hidden">
      <MapContainer
        center={center}
        zoom={25}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapFlyTo cafe={selectedCafe || userLocation} />
        
        {/* Cafe Marker */}
        {cafes.map((cafe) => (
          <Marker
            key={cafe.id}
            position={[cafe.lat, cafe.lon]}
            icon={selectedCafe?.id === cafe.id ? highlightedIcon : defaultIcon}
          >
            <Popup>
              <strong>{cafe.name}</strong>
              <br />
              {cafe.address}
            </Popup>
          </Marker>
        ))}

        {/* User location marker */}
        {userLocation?.lat && userLocation?.lon && (
          <Marker position={[userLocation.lat, userLocation.lon]} icon={userIcon}>
            <Popup>📍 You are here</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
