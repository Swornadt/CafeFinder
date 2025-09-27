import { fetchCoordinates } from "../services/nominatimService.js";

export async function geocodeLocation(req, res) {
  //console.log("Query params:", req.query);
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Missing query parameter 'q'" });
  }

  try {
    const coords = await fetchCoordinates(q);
    res.json(coords);
  } catch (error) {
    console.error("Geocoding error:", error.message);
    res.status(500).json({ error: "Geocoding failed" });
  }
}
