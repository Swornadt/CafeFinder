import { getDistance } from "./getDistance";
import axios from "axios";

export async function fetchNearestCafe(location, userLocation = null, maxResults=10, radius=1) {
  if (!location.trim()) throw new Error("Location cannot be empty");

  //finding coords from text location thru geoencoding
  const geoRes = await axios.get(
    `http://localhost:5000/api/geocode?q=${encodeURIComponent(location)}`
  );
  const { lat: regionLat, lon: regionLon } = geoRes.data;

  //finding cafess in the region
  const cafesRes = await axios.get(
    `http://localhost:5000/api/cafes?lat=${regionLat}&lon=${regionLon}`
  );

  //using user's location else fallback to region
  const baseLat = userLocation?.lat ?? regionLat;
  const baseLon = userLocation?.lon ?? regionLon;

  //computing distance for each cafe
  const cafesWithDistance = cafesRes.data.cafes.map((cafe) => ({
    ...cafe,
    distance: getDistance(baseLat, baseLon, cafe.lat, cafe.lon),
  }));
  //keeping only nearest 10
  const nearestCafes = cafesWithDistance
    .filter((cafe) => cafe.name !== "Unnamed" && cafe.lat && cafe.lon && cafe.distance <= radius)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, maxResults);
  return { nearestCafes, regionCenter: [regionLat, regionLon] };
}
