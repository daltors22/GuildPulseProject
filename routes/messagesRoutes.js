
import express from "express";
import {
  getAllMessages,getMessagesById,createMessages,updateMessages,deleteMessages
} from "../controllers/messagesController.js";
const router = express.Router();
router.get("/",getAllMessages);
router.get("/:id",getMessagesById);
router.post("/",createMessages);
router.put("/:id",updateMessages);
router.delete("/:id",deleteMessages);
export default router;
