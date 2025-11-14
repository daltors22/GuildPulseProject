import blizzardService from './blizzardService.js';
import Realms from '../models/Realms.js';
import logger from '../utils/appLogger.js';

class RealmsImportService {
  async importRealmsFromRegion(region) {
    try {
      logger.info(`Starting import for region: ${region}`);
      
      const realms = await blizzardService.getRealms(region);
      const imported = [];
      const skipped = [];
      const errors = [];

      for (const realm of realms) {
        try {
          // Vérifier si le royaume existe déjà
          const existing = await Realms.getByNameAndRegion(realm.name, region);
          
          if (existing) {
            skipped.push(realm.name);
            continue;
          }

          // Récupérer les détails du royaume pour obtenir le type
          const details = await blizzardService.getRealmDetails(region, realm.slug);
          
          const realmData = {
            name: realm.name,
            region: region,
            type: blizzardService.mapRealmType(details.type?.type || 'PVE')
          };

          await Realms.create(realmData);
          imported.push(realm.name);
          logger.info(`Imported realm: ${realm.name} (${region})`);
          
          // Pause pour éviter de surcharger l'API
          await this.sleep(100);
        } catch (error) {
          logger.error(`Error importing realm ${realm.name}:`, error);
          errors.push({ realm: realm.name, error: error.message });
        }
      }

      return {
        region,
        total: realms.length,
        imported: imported.length,
        skipped: skipped.length,
        errors: errors.length,
        importedRealms: imported,
        skippedRealms: skipped,
        errorDetails: errors
      };
    } catch (error) {
      logger.error(`Error importing realms for region ${region}:`, error);
      throw error;
    }
  }

  async importAllRegions() {
    const regions = ['eu', 'us', 'kr', 'tw'];
    const results = [];

    for (const region of regions) {
      try {
        const result = await this.importRealmsFromRegion(region);
        results.push(result);
      } catch (error) {
        logger.error(`Failed to import region ${region}:`, error);
        results.push({
          region,
          error: error.message
        });
      }
    }

    return results;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new RealmsImportService();