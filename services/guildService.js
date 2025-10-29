/**
* GUILD SERVICE
* - C.R.U.D functions -
*/

// * imports
import pool from "../config/db.js";

// - FUNCTIONS -
//getAllGuilds
const getAllGuilds = async () => {
  const [rows] = await pool.query(
    'SELECT id, name, tag, realm_id, created_at FROM guilds'
  );
  return rows;
};
//getGuildsById
const getGuildsById = async (id) => { // ajouter UUID à la logique d'index
  const [rows] = await pool.query(
    'SELECT id, name, tag, realm_id, created_at FROM guilds WHERE id = ?',
    [id]
  );
  return rows[0];
};
//createGuilds
const createGuilds = async (guild) => {
  const { name, tag, realm_id, created_at } = guild;
  const [result] = await pool.query(
    'INSERT INTO guilds (name, tag, realm_id, created_at) VALUES (?, ?, ?, ?)',
    [name, tag, realm_id, created_at]
  );
  return result.insertId;
};
//updateGuilds
const updateGuilds = async (id, guild) => {
  const { name, realm_id, tag } = guild;
  await pool.query(
    'UPDATE guilds SET name = ?, realm_id = ?, tag= ? WHERE id = ?',
    [name, realm_id, tag]
  );
};
//deleteGuilds
const deleteGuilds = async (id) => {
    await pool.query('DELETE FROM guilds WHERE id = ?', [id]);
};
export default {
  getAllGuilds,
  getGuildsById,
  createGuilds,
  updateGuilds,
  deleteGuilds
};
