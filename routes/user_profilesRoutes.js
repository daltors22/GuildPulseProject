
import express from "express";
import {
  getAllUser_profiles,getUser_profilesById,createUser_profiles,updateUser_profiles,deleteUser_profiles
} from "../controllers/user_profilesController.js";
const router = express.Router();
router.get("/",getAllUser_profiles);
router.get("/:id",getUser_profilesById);
router.post("/",createUser_profiles);
router.put("/:id",updateUser_profiles);
router.delete("/:id",deleteUser_profiles);
export default router;
