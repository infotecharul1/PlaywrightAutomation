import { test, expect } from "@playwright/test";

let baseUrl = "https://testautomationpractice.blogspot.com/";

test("Checkbox test", async ({ page }) => {
  await page.goto(baseUrl);

  await page.locator('input[id="sunday"]').check();
  await checkbox.check();
  await expect(checkbox).toBeChecked();

  // Uncheck the checkbox
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();

  const weekDays = [
    "#monday",
    "#tuesday",
    "#wednesday",
    "#thursday",
    "#friday",
    "#saturday",
    "#sunday",
  ];
  for (const day of weekDays) {
    const checkbox = page.locator(day);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  // Uncheck all checkboxes
  for (const day of weekDays) {
    const checkbox = page.locator(day);
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }

  // Radio button test
  const radioButtonMale = page.locator('input[id="male"]');
  const radioButtonFemale = page.locator('input[id="female"]');

  // Check
  await radioButtonMale.check();
  await expect(radioButtonMale).toBeChecked();
  await expect(radioButtonFemale).not.toBeChecked();
  await radioButtonFemale.check();
  await expect(radioButtonFemale).toBeChecked();
  await expect(radioButtonMale).not.toBeChecked();

  // Uncheck
  await radioButtonMale.uncheck();
  await expect(radioButtonMale).not.toBeChecked();
  await expect(radioButtonFemale).not.toBeChecked();
});
