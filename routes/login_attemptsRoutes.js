
import express from "express";
import {
  getAllLogin_attempts,getLogin_attemptsById,createLogin_attempts,updateLogin_attempts,deleteLogin_attempts
} from "../controllers/login_attemptsController.js";
const router = express.Router();
router.get("/",getAllLogin_attempts);
router.get("/:id",getLogin_attemptsById);
router.post("/",createLogin_attempts);
router.put("/:id",updateLogin_attempts);
router.delete("/:id",deleteLogin_attempts);
export default router;
