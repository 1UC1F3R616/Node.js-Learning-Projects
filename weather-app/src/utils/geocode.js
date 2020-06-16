const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=YOUR_ACCESS_TOKEN_HERE_FROM_WEATHER_API&limit=1'
    request({url: url, json: true}, (error, {body} ) => {
        if (error) {
            callback('Unable to Connect with Location Services!', undefined)
        } else if (body.features.length === 0) {
            callback ('Unable to Find this location', undefined)
        }
        else {
            center = body.features[0].center
            callback (undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode