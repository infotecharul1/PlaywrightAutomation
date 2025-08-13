import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Admin" }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "Job" })
    .locator("i")
    .click();
  await page.getByRole("menuitem", { name: "Job Titles" }).click();
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByRole("textbox").nth(1).fill("Demo");
  await page
    .getByRole("textbox", { name: "Type description here" })
    .fill("DemoQA");
  await page.getByRole("textbox", { name: "Add note" }).fill("DemoQANotes");
  await page.waitForSelector('[class="oxd-file-button"]');
  //   await page.getByText("Browse").setInputFiles("e2e/uploadFiles/error-context.md");
  await page
    .locator('input[type="file"]')
    .setInputFiles("C:/Users/infot/Downloads/RPS_Candidate SM.docx");
  await page.waitForTimeout(10000); // Wait for the file to be uploaded
});
