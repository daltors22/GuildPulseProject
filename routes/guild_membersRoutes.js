
import express from "express";
import {
  getAllGuild_members,getGuild_membersById,createGuild_members,updateGuild_members,deleteGuild_members
} from "../controllers/guild_membersController.js";
const router = express.Router();
router.get("/",getAllGuild_members);
router.get("/:id",getGuild_membersById);
router.post("/",createGuild_members);
router.put("/:id",updateGuild_members);
router.delete("/:id",deleteGuild_members);
export default router;
