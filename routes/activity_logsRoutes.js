
import express from "express";
import {
  getAllActivity_logs,getActivity_logsById,createActivity_logs,updateActivity_logs,deleteActivity_logs
} from "../controllers/activity_logsController.js";
const router = express.Router();
router.get("/",getAllActivity_logs);
router.get("/:id",getActivity_logsById);
router.post("/",createActivity_logs);
router.put("/:id",updateActivity_logs);
router.delete("/:id",deleteActivity_logs);
export default router;
