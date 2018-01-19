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
	if(error) {
		console.log("unable to connect to google server.");
	} else if(body.status === "ZERO_RESULTS") {
		console.log("unable to find address.");
	} else if(body.status === "OK") {
		console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    	console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
	}
    
}); 