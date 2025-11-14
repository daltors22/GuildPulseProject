import express from 'express';
import {
  getAllFactions,
  getFactionById,
  createFaction,
  updateFaction,
  deleteFaction
} from '../controllers/factionsController.js';

const router = express.Router();

router.get('/', getAllFactions);
router.get('/:id', getFactionById);
router.post('/', createFaction);
router.put('/:id', updateFaction);
router.delete('/:id', deleteFaction);

export default router;