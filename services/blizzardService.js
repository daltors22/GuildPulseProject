import logger from '../utils/appLogger.js';

class BlizzardService {
  constructor() {
    this.clientId = process.env.BLIZZARD_CLIENT_ID;
    this.clientSecret = process.env.BLIZZARD_CLIENT_SECRET;
    this.accessToken = null;
    this.tokenExpiry = null;
  }

  async getAccessToken() {
    // Vérifier si le token est encore valide
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      const credentials = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');
      
      const response = await fetch('https://oauth.battle.net/token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
      });

      if (!response.ok) {
        throw new Error(`Failed to get access token: ${response.statusText}`);
      }

      const data = await response.json();
      this.accessToken = data.access_token;
      this.tokenExpiry = Date.now() + (data.expires_in * 1000) - 60000; // 1 minute de marge
      
      return this.accessToken;
    } catch (error) {
      logger.error('Error getting Blizzard access token:', error);
      throw error;
    }
  }

  async getRealms(region = 'eu') {
    try {
      const token = await this.getAccessToken();
      const namespace = `dynamic-${region}`;
      const locale = region === 'eu' ? 'fr_FR' : 'en_US';
      
      const url = `https://${region}.api.blizzard.com/data/wow/realm/index?namespace=${namespace}&locale=${locale}`;
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch realms: ${response.statusText}`);
      }

      const data = await response.json();
      return data.realms || [];
    } catch (error) {
      logger.error(`Error fetching realms for region ${region}:`, error);
      throw error;
    }
  }

  async getRealmDetails(region, realmSlug) {
    try {
      const token = await this.getAccessToken();
      const namespace = `dynamic-${region}`;
      const locale = region === 'eu' ? 'fr_FR' : 'en_US';
      
      const url = `https://${region}.api.blizzard.com/data/wow/realm/${realmSlug}?namespace=${namespace}&locale=${locale}`;
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch realm details: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      logger.error(`Error fetching realm details for ${realmSlug}:`, error);
      throw error;
    }
  }

  mapRealmType(blizzardType) {
    const typeMap = {
      'PVE': 'pve',
      'PVP': 'pvp',
      'RP': 'rp',
      'RPPVP': 'rppvp'
    };
    return typeMap[blizzardType] || 'pve';
  }
}

export default new BlizzardService();