import express from "express";
import cors from "cors";
import flowers from "./flowers.json";

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.get("/flowers", (req, res) => {
  res.json(flowers);
});

app.get("/flowers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const flower = flowers.find((flower) => flower.id === id);
  res.json(flower);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});