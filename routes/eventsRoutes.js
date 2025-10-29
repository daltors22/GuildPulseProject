
import express from "express";
import {
  getAllEvents,getEventsById,createEvents,updateEvents,deleteEvents
} from "../controllers/eventsController.js";
const router = express.Router();
router.get("/",getAllEvents);
router.get("/:id",getEventsById);
router.post("/",createEvents);
router.put("/:id",updateEvents);
router.delete("/:id",deleteEvents);
export default router;
