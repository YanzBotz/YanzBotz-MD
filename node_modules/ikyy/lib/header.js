const needle = require('needle')

module.exports = (url) => new Promise((resolve, reject) => {
    if (!url) { reject('Masukkan URL nya') }
 needle(url, (error, resp, body) => {
if(error) return reject({creator: "RzkyFdlh", status: 404, error: error})
        resolve({
        creator: "RzkyFdlh",
          status: resp.statusCode,
headers: resp.headers
        })
    })
})