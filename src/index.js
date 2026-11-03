
import 'dotenv/config';

import { config } from './core/config.js';
import { logger } from './core/logger.js';
import { initializeDatabase } from './core/database.js';
import { client } from './bot/client.js';

async function startBot() {
  try {
    logger.info('Starting Guardian Discord Bot...');

    await initializeDatabase();
    logger.info('Database connected successfully.');

    await client.login(config.DISCORD_TOKEN);
  } catch (error) {
    logger.error({ error }, 'Failed to start Guardian.');
    process.exitCode = 1;
  }
}

startBot();
