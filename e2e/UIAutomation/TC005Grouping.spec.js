// Hooks
import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log("Running before all tests");
});

test.afterAll(async () => {
  console.log("Running after all tests");
});

test.beforeEach(async ({ page }) => {
  console.log("Running before each test");
  await page.goto("https://testautomationpractice.blogspot.com/");
});

test.afterEach(async ({ page }) => {
  console.log("Running after each test");
});

test.describe("Grouping test", async ({ page }) => {
  console.log("Executing grouped test suite");
  await page.goto("https://testautomationpractice.blogspot.com/");
});

// Grouped tests

test("Grouped Test 1", async () => {
  console.log("This is grouped test 1");
  const checkbox = page.locator('input[id="sunday"]');
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
});

test("Grouped Test 2", async () => {
  console.log("This is grouped test 2");
  const checkbox = page.locator('input[id="monday"]');
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
});
