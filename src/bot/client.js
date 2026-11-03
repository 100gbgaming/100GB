
import { Client, GatewayIntentBits } from 'discord.js';
import { logger } from '../core/logger.js';

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once('clientReady', (readyClient) => {
  logger.info(
    `Guardian is online as ${readyClient.user.tag}`
  );
});

client.on('error', (error) => {
  logger.error({ error }, 'Discord client error');
});
