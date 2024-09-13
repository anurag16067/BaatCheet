import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import { connect } from "mongoose";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
 // root route http://localhost:5000/
app.use(express.json()); // to parse the incoming requests with json payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});

