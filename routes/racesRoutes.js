
import express from "express";
import {
  getAllRaces,getRacesById,createRaces,updateRaces,deleteRaces
} from "../controllers/racesController.js";
const router = express.Router();
router.get("/",getAllRaces);
router.get("/:id",getRacesById);
router.post("/",createRaces);
router.put("/:id",updateRaces);
router.delete("/:id",deleteRaces);
export default router;
