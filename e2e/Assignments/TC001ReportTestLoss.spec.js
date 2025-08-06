import { test, expect } from "@playwright/test";

let baseUrl =
  "https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.17164&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false";

test("Report the test loss value in console", async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByText("Test loss").click();
  await expect(page.getByText("Test loss")).toHaveText("Test loss: 0.00");
});

test("Change dataset to exclusive test", async ({ page }) => {
  await page.goto(baseUrl);
  await page
    .getByTitle("Circle")
    .locator("canvas")
    .click({
      position: {
        x: 11,
        y: 18,
      },
    });
});

test("Change noise to 5 percent test", async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole("slider", { name: "Noise:" }).fill("20");
});
