import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { mapFlyTo } from "../assets/mapFlyTo";

export default function MapFlyTo({ cafe }) {
  const map = useMap();

  useEffect(() => {
    if (cafe?.lat && cafe?.lon) {
      map.flyTo([cafe.lat, cafe.lon], 18, { duration: 2.5 });
    }
  }, [cafe, map]);

  return null;
}
