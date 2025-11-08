/**
* event_types SERVICE
* - C.R.U.D functions -
*/

// * imports
import pool from "../config/db.js";

// - FUNCTIONS -
//getAllEventTypes
const getAllEventTypes = async () => {
  const [rows] = await pool.query(
    'SELECT id, name, description FROM event_types'
  );
  return rows;
};
//getEventTypesById
const getEventTypesById = async (id) => { // ajouter UUID à la logique d'index
  const [rows] = await pool.query(
    'SELECT id, name, description FROM event_types WHERE id = ?',
    [id]
  );
  return rows[0];
};
//createEventTypes
const createEventTypes = async (event_types) => {
  const { name, description } = event_types;
  const [result] = await pool.query(
    'INSERT INTO event_types ( name, description) VALUES (?, ?)',
    [name, description]
  );
  return result.insertId;
};
//updateEventTypes
const updateEventTypes = async (id, event_types) => {
  const { name, description } = event_types;
  await pool.query(
    'UPDATE event_types SET name = ?, description = ? WHERE id = ?',
    [name, description]
  );
};
//deleteEventTypes
const deleteEventTypes = async (id) => {
    await pool.query('DELETE FROM event_types WHERE id = ?', [id]);
};
export default {
  getAllEventTypes,
  getEventTypesById,
  createEventTypes,
  updateEventTypes,
  deleteEventTypes
};
