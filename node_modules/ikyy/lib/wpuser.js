const needle = require('needle')

module.exports = (site) => new Promise((resolve, reject) => {
	if(!site) return reject({error: "Masukan query"})
    const name = []
    const description = []
    const link = []
    const user = []
    const url = site + '/wp-json/wp/v2/users/'
    needle(url, (err, resp, body) => {
        if (!err) {
            for (let i = 0; i < body.length; i++) {
                name.push(body[i]['name']),
                    description.push(body[i]['description']),
                    link.push(body[i]['link']),
                    user.push(body[i]['slug'])
            }
            if (!body[0]) return resolve({
                code: 404,
                message: 'not Found'
            })
            resolve({
                code: resp.statusCode,
                message: 'success',
                url: site,
                name: name[0],
                deskripsi: description[0] ? description[0] : 'Tidak ada',
                link: link[0],
                user: user[0],
                avatar: body[0].avatar_urls
            })
        }
    })
})
