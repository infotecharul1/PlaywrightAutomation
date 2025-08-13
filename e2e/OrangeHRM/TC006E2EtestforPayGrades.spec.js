const { test, expect } = require("@playwright/test");

test("Test for Pay Grades", async ({ page }) => {
  // Go to login page and login
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "admin123");
  await page.click('button[type="submit"]');

  // Wait for the dashboard to load
  await page.waitForSelector("nav >> text=Admin");

  // Navigate to Admin > Job > Pay Grades
  await page.click("nav >> text=Admin");
  await page.click("text=Job");
  await page.click("text=Pay Grades");
  await page.waitForLoadState("networkidle");

  // Click on the "Add" button
  await page.click('button:has-text("Add")');

  // Fill in Name and Description
  await page.locator("form").getByRole("textbox").fill("Test");

  // Save the form
  await page.click('button:has-text("Save")');

  // Wait and close
  await page.waitForTimeout(5000);
});
