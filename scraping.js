// const headers = document.querySelectorAll('td.tableHeader')
// const rows = document.querySelectorAll('td.tablerank');

const rp = require('request-promise-native');
const fs = require('fs');

async function downloadHumanStats() {
  // where to download the HTML from
  const uri = 'http://classic.battle.net/war3/human/unitstats.shtml';
   // the output filename
   const filename = 'humanstats.html';

 // check if we already have the file
 const fileExists = fs.existsSync(filename);
 if (fileExists) {
   console.log(`Skipping download for ${uri} since ${filename} already exists.`);
   return;
 }

  // download the HTML from the web server
  console.log(`Downloading HTML from ${uri}...`);
  const results = await rp({ uri: uri });
  // save the HTML to disk
  await fs.promises.writeFile(filename, results);
}

async function main() {
  console.log('Starting...');
  await downloadHumanStats();
  console.log('Done!');
}
main();
