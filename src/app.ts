import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

// Application routes
import userRoutes from "./app/modules/user/user.route";

//middle wares
app.use(cors());
app.use(express.json()); // Data Parser
app.use(express.urlencoded({ extended: true }));

// Printing
app.use("/api/v1/user", userRoutes);

export default app;
