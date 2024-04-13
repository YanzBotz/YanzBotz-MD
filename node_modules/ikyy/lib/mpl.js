const axios = require('axios')

module.exports = async() =>{
anu = (await axios.get('https://id-mpl.com/')).data
let $ = require('cheerio').load(anu)
res = []
$('table > tbody > tr').each(function(a,b){
r = {
tim: $(this).find('div.hide-sm').text(),
short_name: $(this).find('span.show-sm-inline').text().trim(),
match_rate: $(this).find('td:nth-child(3)').text().trim(),
game_rate: $(this).find('td:nth-child(5)').text().trim(),
match_wl: $(this).find('td:nth-child(2)').text().trim().replace(/\s+/g, ""),
game_wl: $(this).find('td:nth-child(4)').text().trim().replace(/\s+/g, ""),
agg_points: $(this).find('td:nth-child(6)').text().replace(/\s+/g, ""),
img: $(this).find('td:nth-child(1) > div > div:nth-child(2) >  img').attr('src').replace(/ /gi,'%20')
}
res.push(r)
})
ess = {}
ess.creator = "RzkyFdlh"
ess.result = res
return ess
}