
import express from "express";
import {
  getAllEvent_participants,getEvent_participantsById,createEvent_participants,updateEvent_participants,deleteEvent_participants
} from "../controllers/event_participantsController.js";
const router = express.Router();
router.get("/",getAllEvent_participants);
router.get("/:id",getEvent_participantsById);
router.post("/",createEvent_participants);
router.put("/:id",updateEvent_participants);
router.delete("/:id",deleteEvent_participants);
export default router;
