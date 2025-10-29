
import express from "express";
import {
  getAllClasses,getClassesById,createClasses,updateClasses,deleteClasses
} from "../controllers/classesController.js";
const router = express.Router();
router.get("/",getAllClasses);
router.get("/:id",getClassesById);
router.post("/",createClasses);
router.put("/:id",updateClasses);
router.delete("/:id",deleteClasses);
export default router;
