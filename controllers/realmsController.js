import Realms from '../models/Realms.js';
import realmsImportService from '../services/realmsImportService.js';
import logger from '../utils/appLogger.js';

export const getAllRealms = async (req, res, next) => {
  try {
    const { region } = req.query;
    
    let realms;
    if (region) {
      realms = await Realms.getByRegion(region);
    } else {
      realms = await Realms.getAll();
    }
    
    res.json(realms);
  } catch (error) {
    logger.error('Error fetching realms:', error);
    next(error);
  }
};

export const getRealmById = async (req, res, next) => {
  try {
    const realm = await Realms.getById(req.params.id);
    if (!realm) {
      return res.status(404).json({ message: 'Realm not found' });
    }
    res.json(realm);
  } catch (error) {
    logger.error(`Error fetching realm ${req.params.id}:`, error);
    next(error);
  }
};

export const createRealm = async (req, res, next) => {
  try {
    const { name, region, type } = req.body;

    if (!name || !region) {
      return res.status(400).json({ message: 'Name and region are required' });
    }

    const existing = await Realms.getByNameAndRegion(name, region);
    if (existing) {
      return res.status(409).json({ message: 'Realm already exists in this region' });
    }

    const realmId = await Realms.create({ name, region, type });
    const newRealm = await Realms.getById(realmId);

    res.status(201).json(newRealm);
  } catch (error) {
    logger.error('Error creating realm:', error);
    next(error);
  }
};

export const updateRealm = async (req, res, next) => {
  try {
    const realm = await Realms.getById(req.params.id);
    if (!realm) {
      return res.status(404).json({ message: 'Realm not found' });
    }

    const updates = {};
    if (req.body.name !== undefined) updates.name = req.body.name;
    if (req.body.region !== undefined) updates.region = req.body.region;
    if (req.body.type !== undefined) updates.type = req.body.type;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }

    await Realms.update(req.params.id, updates);
    const updatedRealm = await Realms.getById(req.params.id);

    res.json(updatedRealm);
  } catch (error) {
    logger.error(`Error updating realm ${req.params.id}:`, error);
    next(error);
  }
};

export const deleteRealm = async (req, res, next) => {
  try {
    const realm = await Realms.getById(req.params.id);
    if (!realm) {
      return res.status(404).json({ message: 'Realm not found' });
    }

    await Realms.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    logger.error(`Error deleting realm ${req.params.id}:`, error);
    next(error);
  }
};

export const importRealms = async (req, res, next) => {
  try {
    const { region } = req.body;

    if (region && !['eu', 'us', 'kr', 'tw'].includes(region)) {
      return res.status(400).json({ message: 'Invalid region. Must be: eu, us, kr, or tw' });
    }

    let results;
    if (region) {
      results = await realmsImportService.importRealmsFromRegion(region);
    } else {
      results = await realmsImportService.importAllRegions();
    }

    res.json({
      success: true,
      message: 'Import completed',
      results
    });
  } catch (error) {
    logger.error('Error importing realms:', error);
    next(error);
  }
};