import axios from "axios";

export async function fetchCafesFromOverpass(lat, lon) {
  const query = `
      [out:json];
      node["amenity"~"cafe|restaurant"](around:1000,${lat},${lon});
      out;
    `;

  const response = await axios.post(
    "https://overpass-api.de/api/interpreter",
    query,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

  return response.data.elements.map((place) => ({
    id: place.id,
    name: place.tags?.name || "Unnamed",
    lat: place.lat,
    lon: place.lon,
    adress: place.tags?.["addr:street"] || "No address",
  }));
}
