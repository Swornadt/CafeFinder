import express from "express";
import cors from "cors";
import cafeRoutes from "./routes/cafeRoutes.js";
import geocodeRoutes from "./routes/geocodeRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.send("Test Pass")
})

app.use("/api/cafes", cafeRoutes);
app.use("/api/geocode", geocodeRoutes);


app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
