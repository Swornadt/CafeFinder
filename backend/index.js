import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.send("Test Pass")
})
app.get("/api/cafes", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({
      error: "Latitude or Longitude missing!",
    });
  }

  try {

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

    const cafes = response.data.elements.map((place) => ({
      id: place.id,
      name: place.tags?.name || "Unnamed",
      lat: place.lat,
      lon: place.lon,
      adress: place.tags?.["addr:street"] || "No address",
    }));

    res.json({ cafes });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

app.get("/api/geocode", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Missing query parameter 'q'" });
  }

  try {
    const geoResponse = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q,
          format: "json",
          limit: 1,
        },
        headers: {
          "User-Agent": "CafeFinderApp/1.0", // required by OSM
        },
      }
    );

    if (geoResponse.data.length === 0) {
      return res.status(404).json({ error: "Location not found" });
    }

    const { lat, lon } = geoResponse.data[0];
    res.json({ lat: parseFloat(lat), lon: parseFloat(lon) });
  } catch (error) {
    console.error("Geocoding error:", error.message);
    res.status(500).json({ error: "Geocoding failed" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
