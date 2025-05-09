// db.js
import { Client } from 'pg';

let client; // Cache client for reuse
let isShutdownHookRegistered = false;

export async function getDB() {
  if (!client) {
    const {
      POSTGRES_USER,
      POSTGRES_PASSWORD,
      POSTGRES_HOST,
      POSTGRES_PORT = 5432,
      POSTGRES_DATABASE
    } = process.env;

    const postgresUrl = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?sslmode=require`;

    if (process.env.NODE_ENV !== 'production') {
      console.log('Connecting to PostgreSQL with:', postgresUrl);
    }

    client = new Client({
      connectionString: postgresUrl,
      ssl: { rejectUnauthorized: false },
    });

    try {
      await client.connect();
    } catch (error) {
      console.error('Error connecting to the database:', error.message);
      throw new Error('Database connection failed.');
    }

    if (!isShutdownHookRegistered) {
      process.on('SIGINT', async () => {
        await client.end();
        console.log('Disconnected from database.');
        process.exit(0);
      });
      isShutdownHookRegistered = true;
    }
  }

  return client;
}

export async function query(sql, params = []) {
  const db = await getDB();
  if (process.env.NODE_ENV !== 'production') {
    console.log('Executing query:', sql, params);
  }
  return db.query(sql, params);
}