const puppeteer = require('puppeteer')


async function run() {
    const browser = await puppeteer.launch({
        //Headless false will display chromium so you can see the entire script working on the screen
        headless: false
    });
    const page = await browser.newPage()
    //Goes through the Google search page
    await page.goto('https://google.com')

    //It will type 'Foo Fighters' on search input field which is represented by its HTML selector.
    //To type somewhere on the page you must inspect the typing field to get the selector or CSS id or class of its element..
    await page.type('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input', 'Foo Fighters')
    //Use page.click to do the search. You must inspect the button to submit and paste its path as below.
    await page.click('#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b')
    //Wait for first result
    await page.waitForSelector('#rso > div:nth-child(1) > div > div.r > a > h3')
    //Then click on the first result link
    await page.click('#rso > div:nth-child(1) > div > div.r > a')
    //The browser.close was commented so you can see the script working until the end
    //await browser.close()
}

run();
