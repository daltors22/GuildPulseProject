
import express from "express";
import {
  getAllPassword_resets,getPassword_resetsById,createPassword_resets,updatePassword_resets,deletePassword_resets
} from "../controllers/password_resetsController.js";
const router = express.Router();
router.get("/",getAllPassword_resets);
router.get("/:id",getPassword_resetsById);
router.post("/",createPassword_resets);
router.put("/:id",updatePassword_resets);
router.delete("/:id",deletePassword_resets);
export default router;
