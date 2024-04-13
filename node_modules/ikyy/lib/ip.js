const needle = require('needle')

const url = 'http://ip-api.com/json/'

module.exports = (ip) => new Promise((resolve, reject) => {
    needle(url + encodeURIComponent(ip), (error, resp, body) => {
        const { status, message, query, country, region, lat, lon, timezone, org, as, city, countryCode, zip } = body
        if (status == 'fail' || message == 'invalid query') {
            reject({
                message: `${message}`
            })
        } else {
          resolve({
              status: resp.statusCode,
              result: body,
              maps: 'https://www.google.com/maps/@' + lat + ',' + lon,
          })
        }
    })
})