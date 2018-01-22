const request = require("request");
var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/a46eff3ada73b7f3dbd490c2ec0d0710/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback("unable to fetch weather");
        }
    })
}

module.exports.getWeather = getWeather;