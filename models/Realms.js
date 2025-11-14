import pool from '../config/db.js';

class Realms {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM realms ORDER BY region, name ASC');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM realms WHERE id = ?', [id]);
    return rows[0];
  }

  static async getByName(name) {
    const [rows] = await pool.query('SELECT * FROM realms WHERE name = ?', [name]);
    return rows[0];
  }

  static async getByNameAndRegion(name, region) {
    const [rows] = await pool.query(
      'SELECT * FROM realms WHERE name = ? AND region = ?',
      [name, region]
    );
    return rows[0];
  }

  static async getByRegion(region) {
    const [rows] = await pool.query(
      'SELECT * FROM realms WHERE region = ? ORDER BY name ASC',
      [region]
    );
    return rows;
  }

  static async create(realmData) {
    const { name, region, type } = realmData;
    const [result] = await pool.query(
      'INSERT INTO realms (name, region, type) VALUES (?, ?, ?)',
      [name, region, type || 'pve']
    );
    return result.insertId;
  }

  static async update(id, realmData) {
    const fields = [];
    const values = [];

    if (realmData.name !== undefined) {
      fields.push('name = ?');
      values.push(realmData.name);
    }
    if (realmData.region !== undefined) {
      fields.push('region = ?');
      values.push(realmData.region);
    }
    if (realmData.type !== undefined) {
      fields.push('type = ?');
      values.push(realmData.type);
    }

    if (fields.length === 0) {
      return 0;
    }

    values.push(id);
    const query = `UPDATE realms SET ${fields.join(', ')} WHERE id = ?`;
    
    const [result] = await pool.query(query, values);
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM realms WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

export default Realms;