import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		globals: true, // テスト環境でグローバル変数（例：describe, it, expect）を有効にします。これにより、各テストファイルでこれらの関数をインポートせずに使用できます。
		environment: "jsdom", // テストを実行する環境を jsdom に設定しています。
		setupFiles: "./src/setupTests.ts",
		testTimeout: 10000,
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	resolve: process.env.VITEST
		? {
				conditions: ["browser"],
			}
		: undefined,
});
