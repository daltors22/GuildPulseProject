import express from 'express';
import {
  getAllRealms,
  getRealmById,
  createRealm,
  updateRealm,
  deleteRealm,
  importRealms
} from '../controllers/realmsController.js';

const router = express.Router();

router.get('/', getAllRealms);
router.get('/:id', getRealmById);
router.post('/', createRealm);
router.post('/import', importRealms);
router.put('/:id', updateRealm);
router.delete('/:id', deleteRealm);

export default router;