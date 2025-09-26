import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { defaultIcon, highlightedIcon } from "../assets/markers";
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
      </MapContainer>
    </div>
  );
}
