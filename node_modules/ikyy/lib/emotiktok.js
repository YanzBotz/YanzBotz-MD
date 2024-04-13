const axios = require('axios')
module.exports = async() => {
anu = (await axios.get('https://emojipedia.org/tiktok/')).data
const $ = require('cheerio').load(anu)
result = []
$('tr').each(function(a,b){
res = {
name_emoji: $(this).find('td').text().replace(/[[]/g,'').replace(/]/g,''),
emoji: $(this).find('td > img').attr('src')
}
result.push(res)
})
ress = {}
ress.creator = "RzkyFdlh"
ress.result = result
return ress
}