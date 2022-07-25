import express from "express";
import morgan from "morgan";
// Routes
import languageRoutes from "./routes/language.routes";

const app = express();

// Settings
app.set("port", 3306);

// Middlewares funciones intermedias entre peticiones
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/languages", languageRoutes);

export default app;