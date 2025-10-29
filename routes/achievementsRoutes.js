
import express from "express";
import {
  getAllAchievements,getAchievementsById,createAchievements,updateAchievements,deleteAchievements
} from "../controllers/achievementsController.js";
const router = express.Router();
router.get("/",getAllAchievements);
router.get("/:id",getAchievementsById);
router.post("/",createAchievements);
router.put("/:id",updateAchievements);
router.delete("/:id",deleteAchievements);
export default router;
