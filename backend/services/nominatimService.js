import axios from "axios";

export async function fetchCoordinates(query) {
  if (!query) throw new Error("Missing query");

  const response = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: query,
        format: "json",
        limit: 1,
      },
      headers: {
        "User-Agent": "CafeFinderApp/1.0",
      },
    }
  );

  if (!response.data.length) {
    throw new Error("Location not found");
  }

  const { lat, lon } = response.data[0];
  return { lat: parseFloat(lat), lon: parseFloat(lon) };
}
