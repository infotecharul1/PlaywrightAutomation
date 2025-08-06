## Install playwright using terminal

npm init playwright@latest

package.json -- node project management file.
playwright.config.js -- playwright configuration
tests/e2e folder -- we can have the playwright tests.

npm playwright -v -- return installed version of playwright.

Install playwright extension in VS code -- Playwright Test for VSCode.

## Playwright suggests run commands during installaion:

npx playwright test
Runs the end-to-end tests.

npx playwright test --ui
Starts the interactive UI mode.

npx playwright test --project=chromium
Runs the tests only on Desktop Chrome.

npx playwright test example
Runs the tests in a specific file.

npx playwright test --debug
Runs the tests in debug mode.

npx playwright codegen
Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

## Git run commands

To check the Git version - In terminal = git -v
Basic git commends:
https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html

## Locators

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

page.locator('CSS')

## HTML

Tags - input/div/a/th/td/li/html/body/table/ Attributes - type, name, value, placeholder, id, class Values - text, email, E-Mail Address,

## CSS

If you are aware about classname in the html structure then the css selector would be - .classname - In case if there is space in the name of class please replace with '.'
If you are aware about id in the html structure then the css selector would be - #id - #input-email
If you are aware about attribute and value - [attribute='value'] = [id="input-email"]
If you are aware about tag, attribute and value - tag[attribute='value'] =input[id="input-email"]
Assertion - https://playwright.dev/docs/test-assertions

## Assignments:

1. Write a program to identify the value before decimal and after decimal are even or odd. eg. 3948.432943 --> Two Parts --> 3948 and 432943 --> Then you will apply remainder by.

Handle RadioButton and Checkboxes -

https://www.dummyticket.com/dummy-ticket-for-visa-application/

Handle Dropdown and Auto Suggestion Dropdown

https://www.dummyticket.com/dummy-ticket-for-visa-application/

Handle below 3 Dropdown -

Purpose of dummy ticket (optional) Country State
