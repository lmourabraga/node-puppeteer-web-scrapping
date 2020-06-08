//Loops through an array of objects with ean and name information of products.
const puppeteer = require('puppeteer');
const fs = require('fs');

//A const of arrays with all terms we will pass through the loop for
const products = ['Coca-Cola', 'Pepsi', 'Sprite'];

async function run() {

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1200,
        height: 1200
    });

    for (let i = 0; i < products.length; i++) {

        try {
            product = products[i];

            await page.goto('https://google.com')

            await page.type('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input', `${product}`)
            await page.click('#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.RNmpXc')

            //Wait for 10 seconds just to make sure the page has loaded
            await page.waitFor(10000);

            //Save a screenshot of the page named by the term was search
            await page.screenshot({
                path: `./images/${product}.png`
            });

            console.log(`A screenshot for the URL: ${product} was taken.`);

        } catch (error) {
            console.log(`Nothing has found for ${product}.`)
        }


    }
}

run();