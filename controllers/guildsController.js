import Guilds from '../models/Guilds.js';
import logger from '../utils/appLogger.js';

export const getAllGuilds = async (req, res, next) => {
  try {
    const { realm_id, faction_id } = req.query;

    let guilds;
    if (realm_id) {
      guilds = await Guilds.getByRealm(realm_id);
    } else if (faction_id) {
      guilds = await Guilds.getByFaction(faction_id);
    } else {
      guilds = await Guilds.getAll();
    }

    res.json(guilds);
  } catch (error) {
    logger.error('Error fetching guilds:', error);
    next(error);
  }
};

export const getGuildById = async (req, res, next) => {
  try {
    const guild = await Guilds.getById(req.params.id);
    if (!guild) {
      return res.status(404).json({ message: 'Guild not found' });
    }
    res.json(guild);
  } catch (error) {
    logger.error(`Error fetching guild ${req.params.id}:`, error);
    next(error);
  }
};

export const createGuild = async (req, res, next) => {
  try {
    const { name, tag, faction_id, realm_id } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Guild name is required' });
    }

    // Vérifier si la guilde existe déjà
    const existing = await Guilds.getByName(name);
    if (existing) {
      return res.status(409).json({ message: 'Guild with this name already exists' });
    }

    const guildId = await Guilds.create(req.body);
    const newGuild = await Guilds.getById(guildId);

    res.status(201).json(newGuild);
  } catch (error) {
    logger.error('Error creating guild:', error);
    next(error);
  }
};

export const updateGuild = async (req, res, next) => {
  try {
    const guild = await Guilds.getById(req.params.id);
    if (!guild) {
      return res.status(404).json({ message: 'Guild not found' });
    }

    const updates = {};
    const allowedFields = [
      'name', 'tag', 'faction_id', 'realm_id', 'level', 'members', 
      'max_members', 'leader', 'description', 'banner', 'achievements', 
      'rating', 'recruitment', 'focus'
    ];

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }

    // Vérifier si le nouveau nom existe déjà (si le nom est changé)
    if (updates.name && updates.name !== guild.name) {
      const existing = await Guilds.getByName(updates.name);
      if (existing) {
        return res.status(409).json({ message: 'Guild name already exists' });
      }
    }

    await Guilds.update(req.params.id, updates);
    const updatedGuild = await Guilds.getById(req.params.id);

    res.json(updatedGuild);
  } catch (error) {
    logger.error(`Error updating guild ${req.params.id}:`, error);
    next(error);
  }
};

export const deleteGuild = async (req, res, next) => {
  try {
    const guild = await Guilds.getById(req.params.id);
    if (!guild) {
      return res.status(404).json({ message: 'Guild not found' });
    }

    await Guilds.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    logger.error(`Error deleting guild ${req.params.id}:`, error);
    next(error);
  }
};