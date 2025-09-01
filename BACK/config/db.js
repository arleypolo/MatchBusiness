// Import the 'pg' package for PostgreSQL database interaction
import pkg from 'pg';
// Import 'dotenv' to load environment variables from a .env file
import dotenv from 'dotenv';

// Load environment variables into process.env
dotenv.config();

// Destructure Pool from the 'pg' package
const { Pool } = pkg;

// Create a new PostgreSQL connection pool using environment variables
const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

// Export the database pool for use in other modules
export default db;
