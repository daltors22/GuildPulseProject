
import express from "express";
import {
  getAllGuilds,getGuildsById,createGuilds,updateGuilds,deleteGuilds
} from "../controllers/guildsController.js";
const router = express.Router();
router.get("/",getAllGuilds);
router.get("/:id",getGuildsById);
router.post("/",createGuilds);
router.put("/:id",updateGuilds);
router.delete("/:id",deleteGuilds);
export default router;
