import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'postgres',
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

export default db;

