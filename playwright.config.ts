import { defineConfig } from "@playwright/test";

export default defineConfig({
	webServer: {
		command: "npm run build && npm run preview",
		port: 4173,
	},

	testDir: "e2e",
	projects: [
		{
			name: "setup clerk",
			testMatch: /global\.setup\.ts/,
		},
		{
			name: "main test",
			testMatch: /.*\.test.ts/,
			dependencies: ["setup clerk"],
		},
	],
});
