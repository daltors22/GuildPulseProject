import pool from '../config/db.js';

class Factions {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM factions ORDER BY name ASC');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM factions WHERE id = ?', [id]);
    return rows[0];
  }

  static async getByName(name) {
    const [rows] = await pool.query('SELECT * FROM factions WHERE name = ?', [name]);
    return rows[0];
  }

  static async create(factionData) {
    const { name } = factionData;
    const [result] = await pool.query(
      'INSERT INTO factions (name) VALUES (?)',
      [name]
    );
    return result.insertId;
  }

  static async update(id, factionData) {
    const { name } = factionData;
    const [result] = await pool.query(
      'UPDATE factions SET name = ? WHERE id = ?',
      [name, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM factions WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

export default Factions;