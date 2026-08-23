import { Router } from "express";
import { getPipeline } from "../controllers/pipeline.controller.js";

const router = Router();

router.get("/", getPipeline);

export default router;