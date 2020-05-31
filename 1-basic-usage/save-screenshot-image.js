const puppeteer = require('puppeteer');

//Run through a URL and save a screenshot image

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Defines a page resolution for the screenshot
    await page.setViewport({ width: 1920, height: 1080 });

    let url = 'http://google.com/'
    await page.goto(url);

    await page.screenshot({
        path: 'screenshot.png'
    });

    console.log(`The screenshot for the URL: ${url} was done`);

    await browser.close();
})();