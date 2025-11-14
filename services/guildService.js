/**
 * GUILD SERVICE
 * - C.R.U.D functions -
 */

// * imports
import pool from "../config/db.js";

// - HELPERS -
const safeNumber = (value, fallback = 0) => {
  const n = Number(value);
  return isNaN(n) ? fallback : n;
};

// - FUNCTIONS -

// Get all guilds
const getAllGuilds = async () => {
  const [rows] = await pool.query(
    `SELECT id, name, tag, faction_id, realm_id, created_at, level, members, max_members AS maxMembers,
            leader, description, banner, achievements, rating, recruitment, focus
     FROM guilds`
  );
  return rows;
};

// Get guild by ID
const getGuildsById = async (id) => {
  const [rows] = await pool.query(
    `SELECT id, name, tag, faction_id, realm_id, created_at, level, members, max_members AS maxMembers,
            leader, description, banner, achievements, rating, recruitment, focus
     FROM guilds WHERE id = ?`,
    [id]
  );
  return rows[0];
};

// Create a new guild
const createGuilds = async (guild) => {
  const {
    name,
    tag,
    faction_id = null,
    realm_id = null,
    level = 1,
    members = 0,
    max_members = 50,
    leader = 'Chef inconnu',
    description = 'Une guilde pleine d’aventure et de camaraderie.',
    banner = '/images/default-banner.png',
    achievements = JSON.stringify([]),
    rating = 0,
    recruitment = 'Ouvert',
    focus = 'Casual',
    created_at = new Date(),
  } = guild;

  const [result] = await pool.query(
    `INSERT INTO guilds 
      (name, tag, faction_id, realm_id, created_at, level, members, max_members, leader, description, banner, achievements, rating, recruitment, focus)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      name,
      tag,
      faction_id,
      realm_id,
      created_at,
      level,
      members,
      max_members,
      leader,
      description,
      banner,
      achievements,
      rating,
      recruitment,
      focus,
    ]
  );
  return result.insertId;
};

// Update a guild
const updateGuilds = async (id, guild) => {
  const {
    name,
    tag,
    faction_id,
    realm_id,
    level,
    members,
    max_members,
    leader,
    description,
    banner,
    achievements,
    rating,
    recruitment,
    focus,
  } = guild;

  await pool.query(
    `UPDATE guilds SET
      name = ?, tag = ?, faction_id = ?, realm_id = ?, level = ?, members = ?, max_members = ?, leader = ?, 
      description = ?, banner = ?, achievements = ?, rating = ?, recruitment = ?, focus = ?
     WHERE id = ?`,
    [
      name,
      tag,
      faction_id,
      realm_id,
      level,
      members,
      max_members,
      leader,
      description,
      banner,
      achievements,
      rating,
      recruitment,
      focus,
      id,
    ]
  );
};

// Delete a guild
const deleteGuild = async (id) => {
  await pool.query('DELETE FROM guilds WHERE id = ?', [id]);
};

export default {
  getAllGuilds,
  getGuildsById,
  createGuilds,
  updateGuilds,
  deleteGuild,
};
