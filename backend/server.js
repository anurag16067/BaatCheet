import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import { connect } from "mongoose";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
 // root route http://localhost:5000/
app.use(express.json()); // to parse the incoming requests with json payloads (from req.body)

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});

