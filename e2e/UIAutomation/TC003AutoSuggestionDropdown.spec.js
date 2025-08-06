const { test, expect } = require("@playwright/test");

let baseUrl = "https://www.dummyticket.com/dummy-ticket-for-visa-application/";

test("Purpose of dummy ticket test", async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole("textbox", { name: "Visa application" }).click();
  await page
    .getByRole("combobox")
    .filter({ hasText: /^$/ })
    .fill("Visa Application");
  await page
    .getByRole("option", { name: "Office work place needs it" })
    .click();
});

test("Country Dropdown test", async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole("textbox", { name: "Sweden" }).click();
  await page.getByRole("combobox").filter({ hasText: /^$/ }).fill("swe");
  await page.getByRole("option", { name: "Sweden" }).click();
});
