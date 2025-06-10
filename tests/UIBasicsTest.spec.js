const {test}  = require("@playwright/test"); // importing test annotation from Playwright
const { expect } = require("@playwright/test"); // importing expect assertion from Playwright
const { ai }  = require('@zerostep/playwright'); // importing AI capabilities from ZeroStep Playwright

//JS is asynchronous language, so we need to use async/await
// asynchronous language means that next line of code can be executed before previous one is finished
//async/await always goes together

//anonumus function is a function without name
//it is used to create a function that can be passed as a parameter to another function
// example: test("My test", async function() { ... })
//or you can use shorter way and skip word "function" : test("My test", async () => { ... })

test("Browser context declaration test", async ({browser})=>
    //"browser" is a global object that represents the browser instance
    // it is passed as a parameter to the test function so it is wrapped in {}
{
const context = await browser.newContext(); //new browser without cookies, plugins etc
//you can inject ccokies, geo location, user agent, etc. as a parameter to newContext() method
const page = await context.newPage(); //new page
await page.goto("https://www.google.com/");

}
);

//if you need just fresh browser with new page just use "page" as parameter
test.only("Page playwright test", async ({page})=> //when developing  - I need run just this 1 TC. So I write test.only
{
    //same as above but you can just skip a lot and it will still work

await page.goto("https://www.google.com/");

}
);

test("Page title assertion", async ({page})=> //when developing  - I need run just this 1 TC. So I write test.only
{
    //same as above but you can just skip a lot and it will still work

await page.goto("https://www.google.com/");
const mytitle = await page.title();
await console.log(mytitle);
await expect(page).toHaveTitle("Google");

}
);

test("Supplylite login playwright test", async ({page})=> 
    //when developing  - I need run just this 1 TC. So I write test.only
{
    // playwright supporting css and xpath selectors
    // css selector is a string that starts with # for id or . for class
    // xpath selector is a string that starts with // for any element or / for direct child
await page.goto("https://sat.supplylite.com.au/");
await page.locator('#usernameField').fill("support@supplylite.com");
await page.locator('#nextLoginButton').click();
await page.locator('#passwordField').fill("test");
await page.locator('#supplyliteLoginButton').click();
await page.locator("#fad8f866-8130-4c50-9407-93a105d6bd48").click();
}
);


test("Supplylite login error playwright test", async ({page})=> //when developing  - I need run just this 1 TC. So I write test.only
{
await page.goto("https://sat.supplylite.com.au/");
await page.locator('#usernameField').fill("support@supplylite.com");
await page.locator('#nextLoginButton').click();
await page.locator('#passwordField').fill("pass");
await page.locator('#supplyliteLoginButton').click();
await console.log(await page.locator('#supplyliteLoginButton').textContent());
}
);





