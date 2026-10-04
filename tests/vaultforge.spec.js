const { test, expect } = require("@playwright/test");

test("loads the VaultForge security lab", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/VaultForge/);
  await expect(page.getByRole("heading", { name: /password security lab/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /generate/i })).toBeVisible();
});

test("generates a new credential and updates strength telemetry", async ({ page }) => {
  await page.goto("/");
  const password = page.locator("#password");
  const before = await password.inputValue();
  await page.getByRole("button", { name: /generate/i }).click();
  const after = await password.inputValue();
  expect(after).toBeTruthy();
  expect(after).not.toBe(before);
  await expect(page.locator("#entropy")).not.toHaveText("");
});

test("copy action reports success without leaving the page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /copy/i }).click();
  await expect(page.locator("body")).toContainText(/copied/i);
});
