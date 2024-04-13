const cheerio = require('cheerio')
const axios = require ('axios')
const wiki = async(search) => {
try {
const res = await axios.get(`https://id.m.wikipedia.org/w/index.php?search=${search}`)
const $ = cheerio.load(res.data)
hasil = {}
 hasil.judul = $("meta[property=\"og:title\"]").attr('content').split('-')[0]
hasil.img = $("meta[property=\"og:image\"]").attr('content') || 'https://telegra.ph/file/1cde98e7bc902331edc90.png'
hasil.url = $("link[rel=\"canonical\"]").attr('href')
hasil.result = $("#mf-section-0").find('p').text().trim()
hasil.result += '\n\n'+$("#mf-section-2").find('p').text().trim()
hasil.result += '\n\n'+$("#mf-section-3").find('p').text().trim()
hasil.result += '\n\n'+$("#mf-section-4").find('p').text().trim()
hasil.result += '\n\n'+$("#mf-section-5").find('p').text().trim()
hasil.result += '\n\n'+$("#mf-section-6").find('p').text().trim()
return hasil
} catch(e) {
console.log(e)
return 'Not found'
}
}

module.exports = { wiki }