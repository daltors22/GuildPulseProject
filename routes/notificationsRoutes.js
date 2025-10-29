
import express from "express";
import {
  getAllNotifications,getNotificationsById,createNotifications,updateNotifications,deleteNotifications
} from "../controllers/notificationsController.js";
const router = express.Router();
router.get("/",getAllNotifications);
router.get("/:id",getNotificationsById);
router.post("/",createNotifications);
router.put("/:id",updateNotifications);
router.delete("/:id",deleteNotifications);
export default router;
