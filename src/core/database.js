
import knex from 'knex';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { config } from './config.js';

// Create the database folder if it doesn't exist.
mkdirSync(dirname(config.DATABASE_PATH), {
  recursive: true
});

// Configure SQLite through Knex.
export const db = knex({
  client: 'better-sqlite3',
  connection: {
    filename: config.DATABASE_PATH
  },
  useNullAsDefault: true
});

// Prepare SQLite when the application starts.
export async function initializeDatabase() {
  await db.raw('PRAGMA foreign_keys = ON');
  await db.raw('PRAGMA journal_mode = WAL');
}
