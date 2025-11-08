/**
* EVENT PARTICIPANTS SERVICE
* - C.R.U.D functions -
*/

// * imports
import pool from "../config/db.js";

// - FUNCTIONS -
//getAllEventParticipants
const getAllEventParticipants = async () => {
  const [rows] = await pool.query(
    'SELECT event_id, character_id, status FROM event_participants'
  );
  return rows;
};
//getEventParticipantsById
const getEventParticipantsById = async (id) => { // ajouter UUID à la logique d'index
  const [rows] = await pool.query(
    'SELECT event_id, character_id, status FROM event_participants WHERE id = ?',
    [id]
  );
  return rows[0];
};
//createEventParticipants
const createEventParticipants = async (participant) => {
  const { event_id, character_id, status } = participant;
  const [result] = await pool.query(
    'INSERT INTO event_participants (event_id, character_id, status) VALUES (?, ?, ?)',
    [event_id, character_id, status]
  );
  return result.insertId;
};
//updateEventParticipants
const updateEventParticipants = async (id, participant) => {
  const { event_id, character_id, status } = participant;
  await pool.query(
    'UPDATE event_participants SET event_id = ?, character_id = ?, status = ? WHERE id = ?',
    [event_id, character_id, status]
  );
};
//deleteEventParticipants
const deleteEventParticipants = async (id) => {
    await pool.query('DELETE FROM event_participants WHERE id = ?', [id]);
};
export default {
  getAllEventParticipants,
  getEventParticipantsById,
  createEventParticipants,
  updateEventParticipants,
  deleteEventParticipants
};
