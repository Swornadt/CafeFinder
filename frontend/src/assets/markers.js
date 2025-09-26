import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

//Cafe Markers
export const defaultIcon = L.icon({
  iconUrl: markerIconPng,
  iconRetinaUrl: markerIconPng,
  iconSize: [20, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
  shadowSize: [35, 35],
});

export const highlightedIcon = L.icon({
  iconUrl: "/destination.png",
  iconSize: [40, 45],
  iconAnchor: [17, 50],
  popupAnchor: [1, -34],
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

export const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3754/3754313.png", // pick a contrasting pin (e.g., blue)
  iconSize: [40, 50],
  iconAnchor: [16, 32],
});