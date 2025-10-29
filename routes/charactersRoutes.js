
import express from "express";
import {
  getAllCharacters,getCharactersById,createCharacters,updateCharacters,deleteCharacters
} from "../controllers/charactersController.js";
const router = express.Router();
router.get("/",getAllCharacters);
router.get("/:id",getCharactersById);
router.post("/",createCharacters);
router.put("/:id",updateCharacters);
router.delete("/:id",deleteCharacters);
export default router;
