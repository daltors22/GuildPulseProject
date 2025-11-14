import Factions from '../models/Factions.js';
import logger from '../utils/appLogger.js';

export const getAllFactions = async (req, res, next) => {
  try {
    const factions = await Factions.getAll();
    res.json(factions);
  } catch (error) {
    logger.error('Error fetching factions:', error);
    next(error);
  }
};

export const getFactionById = async (req, res, next) => {
  try {
    const faction = await Factions.getById(req.params.id);
    if (!faction) {
      return res.status(404).json({ message: 'Faction not found' });
    }
    res.json(faction);
  } catch (error) {
    logger.error(`Error fetching faction ${req.params.id}:`, error);
    next(error);
  }
};

export const createFaction = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Faction name is required' });
    }

    // Vérifier si la faction existe déjà
    const existing = await Factions.getByName(name);
    if (existing) {
      return res.status(409).json({ message: 'Faction already exists' });
    }

    const factionId = await Factions.create({ name });
    const newFaction = await Factions.getById(factionId);

    res.status(201).json(newFaction);
  } catch (error) {
    logger.error('Error creating faction:', error);
    next(error);
  }
};

export const updateFaction = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Faction name is required' });
    }

    const faction = await Factions.getById(req.params.id);
    if (!faction) {
      return res.status(404).json({ message: 'Faction not found' });
    }

    // Vérifier si le nouveau nom existe déjà (sauf pour cette faction)
    const existing = await Factions.getByName(name);
    if (existing && existing.id !== parseInt(req.params.id)) {
      return res.status(409).json({ message: 'Faction name already exists' });
    }

    await Factions.update(req.params.id, { name });
    const updatedFaction = await Factions.getById(req.params.id);

    res.json(updatedFaction);
  } catch (error) {
    logger.error(`Error updating faction ${req.params.id}:`, error);
    next(error);
  }
};

export const deleteFaction = async (req, res, next) => {
  try {
    const faction = await Factions.getById(req.params.id);
    if (!faction) {
      return res.status(404).json({ message: 'Faction not found' });
    }

    await Factions.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    logger.error(`Error deleting faction ${req.params.id}:`, error);
    next(error);
  }
};