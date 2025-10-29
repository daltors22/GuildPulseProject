
import express from "express";
import {
  getAllUser_role_map,getUser_role_mapById,createUser_role_map,updateUser_role_map,deleteUser_role_map
} from "../controllers/user_role_mapController.js";
const router = express.Router();
router.get("/",getAllUser_role_map);
router.get("/:id",getUser_role_mapById);
router.post("/",createUser_role_map);
router.put("/:id",updateUser_role_map);
router.delete("/:id",deleteUser_role_map);
export default router;
