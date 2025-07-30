import { test, expect } from "@playwright/test";

let baseUrl =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

test("Login test", async ({ page }) => {
  await page.goto(baseUrl);

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the login is processed
});
