
import express from "express";
import {
  getAllEventParticipants,getEventParticipantsById,createEventParticipants,updateEventParticipants,deleteEventParticipants
} from "../controllers/event_participantsController.js";
const router = express.Router();
router.get("/",getAllEventParticipants);
router.get("/:id",getEventParticipantsById);
router.post("/",createEventParticipants);
router.put("/:id",updateEventParticipants);
router.delete("/:id",deleteEventParticipants);
export default router;
