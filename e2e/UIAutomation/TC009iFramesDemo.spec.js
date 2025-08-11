const { test, expect } = require("@playwright/test");

test("iFrames Demo", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // count the number of frames in the page
  const allFrames = await page.frames();
  console.log(`Total number of frames: ${allFrames.length}`);

  // switch to the first iframe
  const frame1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });

  await frame1.fill("[name='mytext1']", "Arulprakash Madhu");
  await page.waitForTimeout(5000); // wait for 5 second

  // switch to the second iframe
  const frame2 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_2.html",
  });
  await frame2.fill("[name='mytext2']", "Agastyan Arulprakash");
  await page.waitForTimeout(5000);
});
