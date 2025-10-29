
import express from "express";
import {
  getAllApi_keys,getApi_keysById,createApi_keys,updateApi_keys,deleteApi_keys
} from "../controllers/api_keysController.js";
const router = express.Router();
router.get("/",getAllApi_keys);
router.get("/:id",getApi_keysById);
router.post("/",createApi_keys);
router.put("/:id",updateApi_keys);
router.delete("/:id",deleteApi_keys);
export default router;
