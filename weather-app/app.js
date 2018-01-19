const request = require("request");
const yargs = require("yargs");

const argv = yargs.options({
	a :{
		demand: true,
		alias: 'address',
		describe: "Address of the location",
		string: true
	}
}).help().alias('help', 'h').argv;
var encodedAddress = encodeURIComponent(argv['a'])
request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) =>{
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
}); 