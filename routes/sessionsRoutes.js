
import express from "express";
import {
  getAllSessions,getSessionsById,createSessions,updateSessions,deleteSessions
} from "../controllers/sessionsController.js";
const router = express.Router();
router.get("/",getAllSessions);
router.get("/:id",getSessionsById);
router.post("/",createSessions);
router.put("/:id",updateSessions);
router.delete("/:id",deleteSessions);
export default router;
