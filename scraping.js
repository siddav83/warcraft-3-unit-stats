document.querySelectorAll('tableHeader')

const puppeteer = require('puppeteer');
async function main() {
  console.log('Starting...');
  const browser = await puppeteer.launch();
  // TODO download the HTML after running js on the page
  await browser.close();
  console.log('Done!');
}
main();
