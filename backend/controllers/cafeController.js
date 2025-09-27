import { fetchCafesFromOverpass } from "../services/overpassService.js";

export async function getCafes(req, res) {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({
      error: "Latitude or Longitude missing!",
    });
  }

  try {
    const cafes = await fetchCafesFromOverpass(lat, lon);
    res.json({ cafes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}
