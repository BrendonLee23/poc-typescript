import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

interface DatabaseConfig {
    connectionString: string;
}

const configDatabase: DatabaseConfig = {
    connectionString: process.env.DATABASE_URL  
};

const db = new Pool(configDatabase);

export default db;
