const cheerio = require('cheerio')
const axios = require('axios')

module.exports = function() {
	return new Promise((resolve, reject) => {
		axios.get('https://neonime.co/episode/').then(res => {
			const $ = cheerio.load(res.data)
			const result = []
			$('tbody').find('tr').each(function(a, b) {
				const link = $(b).find('td > div.imagen-td > a').attr('href')
				const img = $(b).find('td > div.imagen-td > a > img').attr('data-src')
				const info = $(b).find('td.bb > a > span').text().trim()
				const judul = $(b).find('td.bb > a').text()
				const tgl_rilis = $(b).find('td.dd').text()
                const sinopsis = $(b).find('td.bb > div.episodeinfo > div.bloque > div.data > p').text()
				result.push({ judul, sinopsis: sinopsis.split("360P")[1].trim(), link, img, info, tgl_rilis })
			})
			resolve(result)
		}).catch(reject)
	})
}