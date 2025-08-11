const { test, expect } = require("@playwright/test");

const baseURL = "https://the-internet.herokuapp.com/javascript_alerts";

test("Javascript Alerts Demo", async ({ page }) => {
  await page.goto(baseURL);

  //click on the first button to trigger an alert
  //handle the alert
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("I am a JS Alert");
    await dialog.accept(); // Accept the alert
    console.log("Alert accepted");
  });

  await page.click('button[onclick="jsAlert()"]');
  await expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert"
  ); // // Verify the result
  await page.waitForTimeout(5000); // Wait for the alert to appear
});

test("Javascript Alerts Demo OK and Cancel", async ({ page }) => {
  await page.goto(baseURL);

  // Handle Confirm dialog and click OK
  page.once("dialog", async (dialog) => {
    if (dialog.type() === "confirm") {
      await dialog.accept(); // OK
      console.log("Confirm dialog accepted (OK clicked)");
    }
  });
  await page.click('button[onclick="jsConfirm()"]');
  await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  await page.waitForTimeout(5000); // Wait for the alert to appear

  // Handle Confirm dialog and click Cancel
  page.once("dialog", async (dialog) => {
    if (dialog.type() === "confirm") {
      await dialog.dismiss(); // Cancel
      console.log("Confirm dialog dismissed (Cancel clicked)");
    }
  });
  await page.click('button[onclick="jsConfirm()"]');
  await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
  await page.waitForTimeout(5000); // Wait for the alert to appear
});

test("Javascript Alerts Demo Prompt Type", async ({ page }) => {
  await page.goto(baseURL);

  //click on the first button to trigger an alert
  //handle the alert
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("prompt");
    expect(dialog.message()).toBe("I am a JS prompt");
    expect(dialog.defaultValue()).toBe(""); // Default value is empty
    await dialog.accept("Demo User"); // Accept the alert with a value
    console.log("Alert accepted");
  });

  await page.click('button[onclick="jsPrompt()"]');
  await expect(page.locator("#result")).toHaveText("You entered: Demo User"); // Verify the result after accepting the prompt
  await page.waitForTimeout(5000); // Wait for the alert to appear
});
