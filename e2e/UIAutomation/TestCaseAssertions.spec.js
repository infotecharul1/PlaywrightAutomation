/* built-in locators.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import { test, expect } from "@playwright/test";
let baseUrl =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
test("Login test", async ({ page }) => {
  await page.goto(baseUrl);

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the login is processed

  await page
    .locator(
      '[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    )
    .toBeVisible();
  await page
    .locator(
      '[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
    )
    .toContainText("Dashboard");

  await expect(page).toHaveTitle("OrangeHRM");

  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );

  //await expect(page.locator('[src="/web/images/orangehrm-logo.png?v=1721393199309"]'))
});

test("test with negative username and password", async ({ page }) => {
  await page.goto(baseURL);
  await page.getByPlaceholder("username").fill("Admin");

  await page.getByPlaceholder("password").fill("admin12");
  await page.locator('button[type="submit"]').click();

  await expect(
    page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
  ).toContainText("Invalid credentials");
  //await expect(page.locator('[src="/web/images/orangehrm-logo.png?v=1721393199309"]'))
});

test.only("Validate the forgot password functionality", async ({ page }) => {
  const chr = "abcdefghijklmnopqrstuvxyz0123456789";

  let username = "";

  for (let i = 0; i < 6; i++) {
    username = username + chr.charAt(Math.random() * chr.length);
  }
  username = username + "@hotmail.com";

  await page.goto(baseURL);

  await page.getByText("Forgot your password?").click();

  await page.getByPlaceholder("Username").fill(username);

  await page.getByRole("button", { name: "Reset Password" }).click();
  //await expect(page.locator('[src="/web/images/orangehrm-logo.png?v=1721393199309"]'))

  await expect(
    page.locator(
      '[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]'
    )
  ).toHaveText("Reset Password link sent successfully");
});
