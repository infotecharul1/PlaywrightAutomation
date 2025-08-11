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
});

test.afterEach(async ({ page }) => {
  console.log("Running after each test");
});

let baseUrl = "https://testautomationpractice.blogspot.com/";

// Grouped tests

test.describe("Grouping test", () => {
  test("Grouped Test 1", async ({ page }) => {
    console.log("This is grouped test 1");
    await page.goto(baseUrl);
    const checkbox = page.locator('input[id="sunday"]');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  });

  test("Grouped Test 2", async ({ page }) => {
    console.log("This is grouped test 2");
    await page.waitForTimeout(5000); // Simulate some delay
    await page.goto(baseUrl);
    const checkbox = page.locator('input[id="monday"]');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  });
});
