import { test, expect } from "@playwright/test";

// generate the auth token and store it in a variable
// request url https://restful-booker.herokuapp.com/auth

test("Generate API auth token", async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
      },
    }
  );

  // Check if the response status is 200 Ok
  expect(response.status()).toBe(200);

  // Parse the JSON response body
  const responseBody = await response.json();
  const authToken = responseBody.token;
  expect(authToken).toBeDefined();
});

// get all booking ids
test("Get all booking IDs", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );

  // Check if the response status is 200 Ok
  expect(response.status()).toBe(200);

  // Parse the JSON response body
  const bookingIds = await response.json();

  // Log the booking IDs to the console
  bookingIds.forEach((booking) => {
    console.log("bookingid:", booking.bookingid);
  });
});
