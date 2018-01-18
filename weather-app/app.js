const request = require("request");

request({
    url: "http://maps.googleapis.com/maps/api/geocode/json?address=gayatrinagar%20hyderabad",
    json: true
}, (error, response, body) =>{
    console.log(body);
}); 