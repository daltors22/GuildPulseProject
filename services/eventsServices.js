/**
* EVENTS SERVICE
* - C.R.U.D functions -
*/

// * imports
import pool from "../config/db.js";

// - FUNCTIONS -
//getAllEvents
const getAllEvents = async () => {
  const [rows] = await pool.query(
    'SELECT id, guild_id, event_type_id, title, description, location, start_time, end_time, created_by, created_at FROM events'
  );
  return rows;
};
//getEventsById
const getEventsById = async (id) => { // ajouter UUID à la logique d'index
  const [rows] = await pool.query(
    'SELECT id, guild_id, event_type_id, title, description, location, start_time, end_time, created_by, created_at FROM events WHERE id = ?',
    [id]
  );
  return rows[0];
};
//createEvents
const createEvents = async (events) => {
  const { guild_id, event_type_id, title, description, location, start_time, end_time, created_by, created_at } = events;
  const [result] = await pool.query(
    'INSERT INTO events (guild_id, event_type_id, title, description, location, start_time, end_time, created_by, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [guild_id, event_type_id, title, description, location, start_time, end_time, created_by, created_at]
  );
  return result.insertId;
};
//updateEvents
const updateEvents = async (id, events) => {
  const { guild_id, event_type_id, title, description, location, start_time, end_time, created_by, created_at } = events;
  await pool.query(
    'UPDATE events SET guild_id = ?, event_type_id = ?, title = ?, description = ?, location = ?, start_time = ?, end_time = ?, created_by = ?, created_at WHERE id = ?',
    [guild_id, event_type_id, title, description, location, start_time, end_time, created_by, created_at]
  );
};
//deleteEvents
const deleteEvents = async (id) => {
    await pool.query('DELETE FROM events WHERE id = ?', [id]);
};
export default {
  getAllEvents,
  getEventsById,
  createEvents,
  updateEvents,
  deleteEvents
};
