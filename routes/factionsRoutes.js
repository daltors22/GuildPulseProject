
import express from "express";
import {
  getAllFactions,getFactionsById,createFactions,updateFactions,deleteFactions
} from "../controllers/factionsController.js";
const router = express.Router();
router.get("/",getAllFactions);
router.get("/:id",getFactionsById);
router.post("/",createFactions);
router.put("/:id",updateFactions);
router.delete("/:id",deleteFactions);
export default router;
