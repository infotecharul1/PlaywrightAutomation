const { test, expect } = require("@playwright/test");

test("SauceDemo E2E Purchase Flow", async ({ page }) => {
  // 1. Navigate to the website
  await page.goto("https://www.saucedemo.com/");

  // 2. Login with valid credentials
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  // 3. Validate login by checking for inventory page
  await expect(page).toHaveURL(/.*inventory/);
  await expect(page.locator(".title")).toHaveText("Products");

  // 4. Add first item to cart
  const firstItem = page.locator(".inventory_item").first();
  const productName = await firstItem
    .locator(".inventory_item_name")
    .innerText();
  const productPrice = await firstItem
    .locator(".inventory_item_price")
    .innerText();
  await firstItem.locator('button:has-text("Add to cart")').click();

  // 5. Go to cart and validate item
  await page.click(".shopping_cart_link");
  await expect(page).toHaveURL(/.*cart/);
  const cartItem = page.locator(".cart_item");
  await expect(cartItem.locator(".inventory_item_name")).toHaveText(
    productName
  );
  await expect(cartItem.locator(".inventory_item_price")).toHaveText(
    productPrice
  );

  // 6. Checkout
  await page.click('button:has-text("Checkout")');
  await expect(page).toHaveURL(/.*checkout-step-one/);
  await page.fill("#first-name", "John");
  await page.fill("#last-name", "Doe");
  await page.fill("#postal-code", "12345");
  await page.click('input[type="submit"]');

  // 7. Validate product and price on overview page
  await expect(page).toHaveURL(/.*checkout-step-two/);
  const overviewItem = page.locator(".cart_item");
  await expect(overviewItem.locator(".inventory_item_name")).toHaveText(
    productName
  );
  await expect(overviewItem.locator(".inventory_item_price")).toHaveText(
    productPrice
  );

  // 8. Finish purchase
  await page.click('button:has-text("Finish")');
  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!"
  );
});
