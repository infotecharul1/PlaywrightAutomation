import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Username" }).press("Tab");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Admin" }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "User Management" })
    .locator("i")
    .click();
  await page
    .getByRole("listitem")
    .filter({ hasText: /^Users$/ })
    .click();
  await page.getByRole("button", { name: " Add" }).click();
  await page.getByText("-- Select --").first().click();
  await page.getByRole("option", { name: "ESS" }).click();
  await page.getByRole("textbox", { name: "Type for hints..." }).click();
  await page.getByRole("textbox", { name: "Type for hints..." }).fill("t");
  await page.getByRole("option", { name: "Arey Accept" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^-- Select --$/ })
    .nth(2)
    .click();
  await page.getByRole("option", { name: "Enabled" }).click();
  await page.getByRole("textbox").nth(2).click();
  await page.getByRole("textbox").nth(2).fill("Test2");
  await page.getByRole("textbox").nth(2).press("Tab");
  await page.getByRole("textbox").nth(3).fill("test123");
  await page.getByRole("textbox").nth(3).press("Tab");
  await page.getByRole("textbox").nth(4).fill("test123");
  await page.getByRole("button", { name: "Save" }).click();
});
