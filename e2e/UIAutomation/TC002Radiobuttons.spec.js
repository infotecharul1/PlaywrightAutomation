import { test, expect } from "@playwright/test";

let baseUrl = "https://www.dummyticket.com/dummy-ticket-for-visa-application/";

test("Radio button test", async ({ page }) => {
  await page.goto(baseUrl);

  await page.locator("#product_549").check();
  await page.locator("#product_550").check();
  await page.getByText('"Dummy return ticket" added').click();
  await page.locator("#product_551").check();
  await page.getByText('"Dummy hotel booking" added').click();
  await page.locator("#product_3186").check();
  await page.getByText('"Dummy hotel booking" added').click();
  await page.getByText('"Past dated ticket" added to').click();
});
