import express from 'express';
import {
  getAllGuilds,
  getGuildById,
  createGuild,
  updateGuild,
  deleteGuild
} from '../controllers/guildsController.js';

const router = express.Router();

router.get('/', getAllGuilds);
router.get('/:id', getGuildById);
router.post('/', createGuild);
router.put('/:id', updateGuild);
router.delete('/:id', deleteGuild);

export default router;