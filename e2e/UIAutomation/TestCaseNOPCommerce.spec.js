const { test, expect } = require("@playwright/test");

test("Asssertion test", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
  await expect(page).toHaveTitle("nopCommerce demo store. Register");
});
