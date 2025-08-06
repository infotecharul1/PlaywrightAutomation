const { test, expect } = require("@playwright/test");

test("Dropdown test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#country").selectOption("India");
  await page.locator("#country").selectOption({ label: "India" });
  await page.waitForTimeout(50000); // Wait for 5 seconds
  await page.locator("#country").selectOption({ value: "India" });
  await page.locator("#country").selectOption({ index: 1 });
  //await page.waitForTimeout(10000); // Wait for 10 seconds
  await page.selectOption("#country", "France");
  await page.selectOption("#country", { label: "australia" });

  // To check number of options are visible in the dropdown -- Approach 1
  const optionLength = await page.locator("#country option");
  await expect(optionLength).toHaveCount(10);

  // To check number of options -- Approach 2
  const demoOption = await page.$$("#country option");
  console.log("Number of options in the dropdown: ", demoOption.length);
  expect(demoOption.length).toBe(10);

  // To validate specific option is present in the dropdown
  let status = false;
  for (const demo of demoOption) {
    console.log("Country - ", await demo.textContent());
    let value = await demo.textContent();

    if (value.includes("Nepal")) {
      status = true;
      break;
    }
  }
  expect(status).toBeTruthy();
});
