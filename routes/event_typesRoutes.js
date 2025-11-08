
import express from "express";
import {
  getAllEventTypes,getEventTypesById,createEventTypes,updateEventTypes,deleteEventTypes
} from "../controllers/event_typesController.js";
const router = express.Router();
router.get("/",getAllEventTypes);
router.get("/:id",getEventTypesById);
router.post("/",createEventTypes);
router.put("/:id",updateEventTypes);
router.delete("/:id",deleteEventTypes);
export default router;
