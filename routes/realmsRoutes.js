
import express from "express";
import {
  getAllRealms,getRealmsById,createRealms,updateRealms,deleteRealms
} from "../controllers/realmsController.js";
const router = express.Router();
router.get("/",getAllRealms);
router.get("/:id",getRealmsById);
router.post("/",createRealms);
router.put("/:id",updateRealms);
router.delete("/:id",deleteRealms);
export default router;
