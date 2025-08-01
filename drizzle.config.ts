import "dotenv/config"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/drizzle/queries/schema.ts",
    out: "./src/drizzle/migrations",
    dbCredentials: {
        url: process.env.Database_URL as string,
    },
    verbose: true,
    strict: true
})