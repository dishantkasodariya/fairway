import { Router } from "express";
import authRoutes from "./auth.routes.js";
import companiesRoutes from "./companies.routes.js";
import contactsRoutes from "./contacts.routes.js";
import activitiesRoutes from "./activities.routes.js";
import tasksRoutes from "./tasks.routes.js";
import pipelineRoutes from "./pipeline.routes.js";
import dashboardRoutes from "./dashboard.routes.js";

const router = Router();

// Health check endpoint
router.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Module routes
router.use("/auth", authRoutes);
router.use("/companies", companiesRoutes);
router.use("/contacts", contactsRoutes);
router.use("/activities", activitiesRoutes);
router.use("/tasks", tasksRoutes);
router.use("/pipeline", pipelineRoutes);
router.use("/dashboard", dashboardRoutes);

export default router;
