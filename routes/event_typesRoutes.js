
import express from "express";
import {
  getAllEvent_types,getEvent_typesById,createEvent_types,updateEvent_types,deleteEvent_types
} from "../controllers/event_typesController.js";
const router = express.Router();
router.get("/",getAllEvent_types);
router.get("/:id",getEvent_typesById);
router.post("/",createEvent_types);
router.put("/:id",updateEvent_types);
router.delete("/:id",deleteEvent_types);
export default router;
