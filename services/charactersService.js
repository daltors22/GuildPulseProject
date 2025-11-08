/**
* CHARACTERS SERVICE
* - C.R.U.D functions -
*/

// * imports
import pool from "../config/db.js";

// - FUNCTIONS -
//getAllCharacters
const getAllCharacters = async () => {
  const [rows] = await pool.query(
    'SELECT id, user_id, name, realm_id, race_id, class_id, level, guild_id, item_level, last_sync, img_url, spec_id FROM characters'
  );
  return rows;
};
//getCharactersById
const getCharactersById = async (id) => { // ajouter UUID à la logique d'index
  const [rows] = await pool.query(
    'SELECT id, user_id, name, realm_id, race_id, class_id, level, guild_id, item_level, last_sync, img_url, spec_id FROM characters WHERE id = ?',
    [id]
  );
  return rows[0];
};
//createCharacters
const createCharacters = async (character) => {
  const { user_id, name, realm_id, race_id, class_id, level, guild_id, item_level, last_sync, img_url, spec_id } = character;
  const [result] = await pool.query(
    'INSERT INTO characters (user_id, name, realm_id, race_id, class_id, level, guild_id, item_level, last_sync, img_url, spec_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [user_id, name, realm_id, race_id, class_id, level, guild_id, item_level, last_sync, img_url, spec_id]
  );
  return result.insertId;
};
//updateCharacters
const updateCharacters = async (id, character) => {
  const { user_id, name, realm_id, race_id, class_id, level, guild_id, item_level, last_sync, img_url, spec_id } = character;
  await pool.query(
    'UPDATE characters SET user_id = ?, name = ?, realm_id = ?, race_id = ?, class_id = ?, level = ?, guild_id = ?, item_level = ?, last_sync = ?, img_url = ?, spec_id = ? WHERE id = ?',
    [user_id, name, realm_id, race_id, class_id, level, guild_id, item_level, last_sync, img_url, spec_id]
  );
};
//deleteCharacters
const deleteCharacters = async (id) => {
    await pool.query('DELETE FROM characters WHERE id = ?', [id]);
};
export default {
  getAllCharacters,
  getCharactersById,
  createCharacters,
  updateCharacters,
  deleteCharacters
};
