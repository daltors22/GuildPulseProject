
import express from "express";
import {
  getAllUser_roles,getUser_rolesById,createUser_roles,updateUser_roles,deleteUser_roles
} from "../controllers/user_rolesController.js";
const router = express.Router();
router.get("/",getAllUser_roles);
router.get("/:id",getUser_rolesById);
router.post("/",createUser_roles);
router.put("/:id",updateUser_roles);
router.delete("/:id",deleteUser_roles);
export default router;
