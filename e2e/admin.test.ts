import { test, expect } from "@playwright/test";
import { clerk } from "@clerk/testing/playwright";

test.describe("admin test", () => {
	test("goto admin", async ({ page }) => {
		await page.goto("/");
		await clerk.signOut({ page });
		await clerk.signIn({
			page,
			signInParams: {
				strategy: "password",
				identifier: process.env.E2E_CLERK_ADMIN_USERNAME!,
				password: process.env.E2E_CLERK_ADMIN_PASSWORD!,
			},
		});

		await page.goto("/admin");

		// admin の文字列が表示される
		await expect(page.getByText("admin", { exact: true })).toBeVisible();
	});
});

test.describe("member test", () => {
	test("goto admin", async ({ page }) => {
		await page.goto("/");
		await clerk.signOut({ page });
		await clerk.signIn({
			page,
			signInParams: {
				strategy: "password",
				identifier: process.env.E2E_CLERK_MEMBER_USERNAME!,
				password: process.env.E2E_CLERK_MEMBER_PASSWORD!,
			},
		});

		await page.goto("/admin");

		// home の文字列が表示される(リダイレクト)
		await expect(page.getByText("home", { exact: true })).toBeVisible();
	});
});
