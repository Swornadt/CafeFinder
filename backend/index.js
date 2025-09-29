import express from "express";
import cors from "cors";
import path from "path";
import cafeRoutes from "./routes/cafeRoutes.js";
import geocodeRoutes from "./routes/geocodeRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static frontend
const __dirname = path.resolve();

app.get("/test", (req, res) => {
    res.send("Test Pass")
})

app.use("/api/cafes", cafeRoutes);
app.use("/api/geocode", geocodeRoutes);

// Catch-all to serve index.html for React routes
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
