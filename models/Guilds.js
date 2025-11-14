import pool from '../config/db.js';

class Guilds {
  static async getAll() {
    const [rows] = await pool.query(
      `SELECT 
        g.id,
        g.name,
        g.tag,
        g.faction_id,
        f.name AS faction_name,
        g.realm_id,
        r.name AS realm_name,
        r.region AS realm_region,
        g.created_at,
        g.level,
        g.members,
        g.max_members,
        g.leader,
        g.description,
        g.banner,
        g.achievements,
        g.rating,
        g.recruitment,
        g.focus
      FROM guilds g
      LEFT JOIN factions f ON g.faction_id = f.id
      LEFT JOIN realms r ON g.realm_id = r.id
      ORDER BY g.name ASC`
    );
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query(
      `SELECT 
        g.id,
        g.name,
        g.tag,
        g.faction_id,
        f.name AS faction_name,
        g.realm_id,
        r.name AS realm_name,
        r.region AS realm_region,
        r.type AS realm_type,
        g.created_at,
        g.level,
        g.members,
        g.max_members,
        g.leader,
        g.description,
        g.banner,
        g.achievements,
        g.rating,
        g.recruitment,
        g.focus
      FROM guilds g
      LEFT JOIN factions f ON g.faction_id = f.id
      LEFT JOIN realms r ON g.realm_id = r.id
      WHERE g.id = ?`,
      [id]
    );
    return rows[0];
  }

  static async getByName(name) {
    const [rows] = await pool.query(
      `SELECT 
        g.id,
        g.name,
        g.tag,
        g.faction_id,
        f.name AS faction_name,
        g.realm_id,
        r.name AS realm_name,
        r.region AS realm_region,
        g.created_at,
        g.level,
        g.members,
        g.max_members,
        g.leader,
        g.description,
        g.banner,
        g.achievements,
        g.rating,
        g.recruitment,
        g.focus
      FROM guilds g
      LEFT JOIN factions f ON g.faction_id = f.id
      LEFT JOIN realms r ON g.realm_id = r.id
      WHERE g.name = ?`,
      [name]
    );
    return rows[0];
  }

  static async getByRealm(realmId) {
    const [rows] = await pool.query(
      `SELECT 
        g.id,
        g.name,
        g.tag,
        g.faction_id,
        f.name AS faction_name,
        g.realm_id,
        r.name AS realm_name,
        r.region AS realm_region,
        g.created_at,
        g.level,
        g.members,
        g.max_members,
        g.leader,
        g.description,
        g.banner,
        g.achievements,
        g.rating,
        g.recruitment,
        g.focus
      FROM guilds g
      LEFT JOIN factions f ON g.faction_id = f.id
      LEFT JOIN realms r ON g.realm_id = r.id
      WHERE g.realm_id = ?
      ORDER BY g.name ASC`,
      [realmId]
    );
    return rows;
  }

  static async getByFaction(factionId) {
    const [rows] = await pool.query(
      `SELECT 
        g.id,
        g.name,
        g.tag,
        g.faction_id,
        f.name AS faction_name,
        g.realm_id,
        r.name AS realm_name,
        r.region AS realm_region,
        g.created_at,
        g.level,
        g.members,
        g.max_members,
        g.leader,
        g.description,
        g.banner,
        g.achievements,
        g.rating,
        g.recruitment,
        g.focus
      FROM guilds g
      LEFT JOIN factions f ON g.faction_id = f.id
      LEFT JOIN realms r ON g.realm_id = r.id
      WHERE g.faction_id = ?
      ORDER BY g.name ASC`,
      [factionId]
    );
    return rows;
  }

  static async create(guildData) {
    const {
      name,
      tag,
      faction_id = null,
      realm_id = null,
      level = 1,
      members = 0,
      max_members = 50,
      leader = 'Chef inconnu',
      description = 'Une guilde pleine d\'aventure et de camaraderie.',
      banner = '/images/default-banner.png',
      achievements = JSON.stringify([]),
      rating = 0,
      recruitment = 'Ouvert',
      focus = 'Casual'
    } = guildData;

    const [result] = await pool.query(
      `INSERT INTO guilds 
        (name, tag, faction_id, realm_id, level, members, max_members, leader, 
         description, banner, achievements, rating, recruitment, focus)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        focus
      ]
    );
    return result.insertId;
  }

  static async update(id, guildData) {
    const fields = [];
    const values = [];

    if (guildData.name !== undefined) {
      fields.push('name = ?');
      values.push(guildData.name);
    }
    if (guildData.tag !== undefined) {
      fields.push('tag = ?');
      values.push(guildData.tag);
    }
    if (guildData.faction_id !== undefined) {
      fields.push('faction_id = ?');
      values.push(guildData.faction_id);
    }
    if (guildData.realm_id !== undefined) {
      fields.push('realm_id = ?');
      values.push(guildData.realm_id);
    }
    if (guildData.level !== undefined) {
      fields.push('level = ?');
      values.push(guildData.level);
    }
    if (guildData.members !== undefined) {
      fields.push('members = ?');
      values.push(guildData.members);
    }
    if (guildData.max_members !== undefined) {
      fields.push('max_members = ?');
      values.push(guildData.max_members);
    }
    if (guildData.leader !== undefined) {
      fields.push('leader = ?');
      values.push(guildData.leader);
    }
    if (guildData.description !== undefined) {
      fields.push('description = ?');
      values.push(guildData.description);
    }
    if (guildData.banner !== undefined) {
      fields.push('banner = ?');
      values.push(guildData.banner);
    }
    if (guildData.achievements !== undefined) {
      fields.push('achievements = ?');
      values.push(guildData.achievements);
    }
    if (guildData.rating !== undefined) {
      fields.push('rating = ?');
      values.push(guildData.rating);
    }
    if (guildData.recruitment !== undefined) {
      fields.push('recruitment = ?');
      values.push(guildData.recruitment);
    }
    if (guildData.focus !== undefined) {
      fields.push('focus = ?');
      values.push(guildData.focus);
    }

    if (fields.length === 0) {
      return 0;
    }

    values.push(id);
    const query = `UPDATE guilds SET ${fields.join(', ')} WHERE id = ?`;
    
    const [result] = await pool.query(query, values);
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM guilds WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

export default Guilds;