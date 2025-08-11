const { test, expect } = require("@playwright/test");

test("Locating Multiple Elements Test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  //   const links = page.$$("a");
  const links = await page.locator("a").all(); // Use locator to find all anchor elements
  const linkTexts = await Promise.all(
    links.map(async (link) => {
      // resolve and reject promises
      return await link.textContent();
    })
  );
  console.log(linkTexts);
  expect(linkTexts.length).toBeGreaterThan(0); // Check if there are any links
  expect(linkTexts).toContain("Contact"); // Check If 'Contact' link text is present

  console.log("-------------------List of href links---------------");
  for (const link of links) {
    const href = await link.getAttribute("href");
    console.log(href);

    expect(href).toBeDefined(); // Ensure href is defined
  }

  console.log("---------------LIST of PRODUCT NAMES---------------");

  // Locate multiple elements using XPath
  // Note: Ensure that the XPath expression is correct for your page structure
  await page.waitForSelector('//div[@id="tbodyid"]//h4//a'); // Wait for the product elements to be present
  const productName = await page.$$('//div[@id="tbodyid"]//h4//a');

  for (const product of productName) {
    const name = await product.textContent();
    console.log(name);
  }
});
