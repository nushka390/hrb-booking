import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema"; // Adjust if needed
import "dotenv/config"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!
});

const db = drizzle(pool, { schema });

export default db;


