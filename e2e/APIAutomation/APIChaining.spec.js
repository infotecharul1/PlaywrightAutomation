import { test, expect } from "@playwright/test";

let authToken = "";
let booking = {};
test("Generate Auth Token", async ({ request }) => {
  const response = await request.post("/auth/generate", {
    data: {
      username: "user",
      password: "pass",
    },
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty("token");
});

test("Create a new booking", async ({ request }) => {
  const response = await request.get("/user/details", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty("id");
  expect(responseBody).toHaveProperty("username");
});
