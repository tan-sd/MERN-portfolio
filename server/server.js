import express from "express";
import cors from "cors";
import data from "./api/data.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/data", data);
app.use("*", (req, res) => res.status(404).json({ error: "Not found." }));

export default app