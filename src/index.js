
import 'dotenv/config';

console.log('================================');
console.log('       GUARDIAN DISCORD BOT');
console.log('================================');

console.log('Starting application...');

if (!process.env.DISCORD_TOKEN) {
  console.error('ERROR: DISCORD_TOKEN is missing!');
  process.exit(1);
}

console.log('Configuration loaded successfully.');
console.log('Bot foundation is ready!');
