import { defineConfig } from "drizzle-kit";
if (!process.env.DATABASE_URL_FOR_KIT)
	throw new Error("DATABASE_URL_FOR_KIT is not set");

export default defineConfig({
	schema: "./src/lib/server/db/schema.ts",

	dbCredentials: {
		url: process.env.DATABASE_URL_FOR_KIT,
	},

	verbose: true,
	strict: true,
	dialect: "mysql",
});
