const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require("request");
request({
    url: "https://api.darksky.net/forecast/a46eff3ada73b7f3dbd490c2ec0d0710/17.454467,78.4034188",
    json: true
 }, (error, response, body) => {
     if(!error && response.statusCode == 200) {
        console.log(body.currently.temperature);
     } else {
        console.log("unable to fetch weather");
     }
})