import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

//Cafe Markers
export const defaultIcon = L.icon({
  iconUrl: markerIconPng,
  iconRetinaUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
  shadowSize: [35, 35],
});

export const highlightedIcon = L.icon({
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
  iconRetinaUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
  iconSize: [35, 50],
  iconAnchor: [17, 50],
  popupAnchor: [1, -34],
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});