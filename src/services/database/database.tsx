import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT || '26257'),
  ssl: {
    rejectUnauthorized: false,
  },
});

client
  .connect()
  .then(() => console.log('Connected to CockroachDB'))
  .catch((err) => console.error('Connection error', err.stack));

export default client;
