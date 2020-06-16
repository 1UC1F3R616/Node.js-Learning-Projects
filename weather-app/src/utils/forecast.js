const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=YOUR_ACCESS_TOKEN_HERE&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to Connect with Weather API', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + 
                '. It is currently ' + body.current.temperature +' degress out. But feels like ' + 
                + body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast