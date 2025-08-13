import { test, expect } from "@playwright/test";

test("Test for Job Titles", async ({ page }) => {
  // Go to login page and login
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "admin123");
  await page.click('button[type="submit"]');

  // Wait for the dashboard to load
  await page.waitForSelector("nav >> text=Admin");

  // Navigate to Admin > Job > Job Titles
  await page.click("nav >> text=Admin");
  await page.click("text=Job");
  await page.click("text=Job Titles");
  await page.waitForLoadState("networkidle");

  // Click on the "Add" button
  await page.click('button:has-text("Add")');

  // Fill in Job Title and Description
  await page.getByRole("textbox").nth(1).fill("QA Lead");

  // Optional: Fill in Note
  await page.getByRole("textbox", { name: "Add note" }).fill("QA Notes");

  // Save the form
  await page.click('button:has-text("Save")');

  // Wait and close
  await page.waitForTimeout(10000);
});
