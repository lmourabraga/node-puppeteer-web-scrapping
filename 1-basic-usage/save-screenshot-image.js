const puppeteer = require('puppeteer');

//Run through a URL and save a screenshot image

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://google.com/');

    await page.screenshot({
        path: 'screenshot.png'
    });
    await browser.close();
})();