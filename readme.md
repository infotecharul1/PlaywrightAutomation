## Install playwright using terminal

npm init playwright@latest

package.json -- node project management file.
playwright.config.js -- playwright configuration
tests/e2e folder -- we can have the playwright tests.

npm playwright -v -- return installed version of playwright.

Install playwright extension in VS code -- Playwright Test for VSCode.

To install MCP server on VS code -- npm i @playwright/mcp

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

## POM

Class File (Pages Files 15 pages)

- page locators
- page functions

tests

- loginTest.spec.js
- homepageTest.spec.js
- aboutusTest.spec.js

## LLM + MCP Playwright + Agent

LLM - Large Language Model

- ChatGPT
- Gemini
- Perplexity
- AI Cloude
- History

LLM cannot do

1. Opening a browser and entering username/password
2. Connect to the database
3. Call APIs and Show the response

## Agents

An agent is a system who is taking the instruction from an LLM and perform and convert into real time action using external tools

User --> Prompt --> LLM --> Agent ---> MCP

What is MCP - Model Context Protocol MCP is a kind of framwork, which is reponsible for connecting LLM to real world tools such as DB, Browsers, APIs

MCP is acting a bridge --> Between LLM and Your application (AUT)

## Test Data:

- Excel --> JSON --> playwright will read the JSON data (npm install xlsx)
- JSON
- CSV
- Text file

## Reporting

install allure then setup the reporter into plywright.config.js:

- npm install -g allure

- npm i allure-playwright
  or
- npm install -D allure-playwright

Run cmd: npx playwright test <testcase suite.spec.js>

- Generate Allure Report after the tests are executed:
  allure generate ./allure-results -o ./allure-report
  allure generate ./allure-results -o ./allure-report --clean

- Open the generated report:
  allure open ./allure-report

## API Testing

- FrontEnd/ BackEnd
- Client ---API--- Server
- Server ---API--- Client

## API METHODS(CRUD)

GET POST PUT PATCH DELETE

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods

## API STATUS CODE

1XX 2XX 3XX 4XX -- CLIENT SIDE ERROR 5XX -- SERVER SIDE ERROR

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

QUERY PARAM - ?DEMO=VALUE&DEV=123
PATH PARAM - docs/Web/HTTP/Reference/Status -- ARE PATH PARAMETER

END POINT -- https://www.airbnb.co.in/ --> PRODUCTION ENVIRONMENT

END POINT -- stage.airbnb.co.in --> Stage ENVIRONMENT

## TOOLS FOR API

POSTMAN - OPEN SOURCE
JMETER - OPEN SOURCE
BRUNO - OPEN SOURCE

READY API - https://www.soapui.org/tools/readyapi/
SWAGGER - https://editor.swagger.io/

# API uses API keys

Encode/Decpde using below OpenSource websites
https://www.jwt.io/
https://token.dev/ -- Bearer Token
https://www.base64decode.org/ -- Basic

# Payment gateway - VISA, Paypal, Klarna, Mastercard, applypay

https://docs.stripe.com/api
https://docs.spreedly.com/reference/api/v1/#gateways

## CI/CD Process
