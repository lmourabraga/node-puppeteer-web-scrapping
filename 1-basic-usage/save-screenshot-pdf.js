const puppeteer = require('puppeteer');

//Run through a URL and save a screenshot pdf

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://pptr.dev/');

    //Wait for 5 seconds to page load
    await page.waitFor(5000);

    //Do the screenshot and save in pdf
    await page.pdf({
        path: 'screenshot.pdf',
        format: 'letter',
    });

    console.log("The PDF file was saved successfully")

    await browser.close();
})();