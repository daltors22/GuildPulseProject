import pool from "../models/Users.js";

const getAllUsers = async () => {
  const [rows] = await pool.query(
    'SELECT id, username, email, created_at, status, last_login FROM users'
  );
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await pool.query(
    'SELECT id, username, email, created_at, status, last_login FROM users WHERE id = ?',
    [id]
  );
  return rows[0];
};

const createUser = async (user) => {
  const { username, email, password_hash, salt, status } = user;
  const [result] = await pool.query(
    'INSERT INTO users (username, email, password_hash, salt, status) VALUES (?, ?, ?, ?, ?)',
    [username, email, password_hash, salt, status || 'active']
  );
  return result.insertId;
};

const updateUser = async (id, user) => {
  const { username, email, status } = user;
  await pool.query(
    'UPDATE users SET username = ?, email = ?, status = ? WHERE id = ?',
    [username, email, status, id]
  );
};

const deleteUser = async (id) => {
  await pool.query('DELETE FROM users WHERE id = ?', [id]);
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
