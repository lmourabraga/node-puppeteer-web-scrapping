const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Run through a URL and save a screenshot image
    const url = 'https://www.google.com/';
    await page.goto(url);
    
    //Get the title
    const title = await page.title();
    
    //Print the page title on console
    console.log(title);

    await browser.close();
})();