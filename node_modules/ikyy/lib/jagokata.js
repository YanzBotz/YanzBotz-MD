const axios = require('axios')
module.exports = async(str) => {
if(!str) return new Error('Query Not Found')
anu = (await axios.get(`https://jagokata.com/kata-bijak/kata-${str.replace(/ +/g, "+")}.html`)).data
let $ = require('cheerio').load(anu)
aa = {}
aa.img = $('#citatenrijen > li > div.citatenlijst-auteur-container > img').attr('data-src')
aa.author = $('#citatenrijen > li:nth-child(1) > div.citatenlijst-auteur-container > div.citatenlijst-auteur > a.auteurfbnaam').text()
aa.bio =  $('#citatenrijen > li:nth-child(1) > div.citatenlijst-auteur-container > div.citatenlijst-auteur > span.auteur-beschrijving').text()
aa.quote = []
$('#citatenrijen > li').each(function(a,b){
aas = {
quote: $(this).find('q.fbquote').text(),
asli: $(this).find('div.citatenlijst-oorspronkelijk > div.oorspronkelijkblok').text() || 'Tidak ada'
}
aa.quote.push(aas)
})
aa.quote = aa.quote.filter((i) => (i.quote))
ress = {}
ress.creator = "RzkyFdlh"
ress.result = aa
return ress
}