const {test}  = require("@playwright/test");
const { expect } = require("@playwright/test");
const { randomFill } = require("crypto");


test("online shop register test", async ({page})=> //when developing  - I need run just this 1 TC. So I write test.only
{
    var login = (Math.random() + 1).toString(36).substring(7)+"@gmail.com";
    var password = "BoredBear1!";
    
await page.goto("https://rahulshettyacademy.com/client");
//register
await page.locator('[routerlink="/auth/register"]').click();
await page.locator('[type = "firstName"]').fill("Sophia");
await page.locator('[type = "lastName"]').fill("Ivanova");
await page.locator('[type = "email"]').fill(login);
await page.locator('[formcontrolname= "userMobile"]').fill("1234567890");
await page.locator('[formcontrolname= "occupation"]').selectOption("Doctor");
console.log(await page.locator('[value= "Female"]').isChecked());//print current state
await page.locator('[value= "Female"]').check();
await expect(page.locator('[value= "Female"]')).toBeChecked();
await page.locator('#userPassword').fill(password);
await page.locator('#confirmPassword').fill(password);
await page.locator('[formcontrolname= "required"]').check();
await expect(page.locator('[formcontrolname= "required"]')).toBeChecked();
await page.locator('#login').click();
await page.locator('[routerlink = "/auth"]').click();

}
);

test("Practice playwright login test", async ({page})=> //when developing  - I need run just this 1 TC. So I write test.only
{
    var login = "ckc2ok@gmail.com";
    var password = "BoredBear1!";
    
await page.goto("https://rahulshettyacademy.com/client");

//login

await page.locator('#userEmail').fill(login);
await page.locator('#userPassword').fill(password);
await page.locator('#login').click();
await console.log(login);
await console.log(password);

//getting titles
//await page.waitForTimeout(6000); //wait 6 sec
//await page.waitForLoadState('networkidle');//wait till all calls are made and network is idle. Not good to use
await page.locator('.card-body b').first().waitFor(); //wait till locator will be awailable;
var titles = await page.locator('.card-body b').allTextContents();
await console.log(titles);
}
);



