
import express from "express";
import {
  getAllCharacter_achievements,getCharacter_achievementsById,createCharacter_achievements,updateCharacter_achievements,deleteCharacter_achievements
} from "../controllers/character_achievementsController.js";
const router = express.Router();
router.get("/",getAllCharacter_achievements);
router.get("/:id",getCharacter_achievementsById);
router.post("/",createCharacter_achievements);
router.put("/:id",updateCharacter_achievements);
router.delete("/:id",deleteCharacter_achievements);
export default router;
