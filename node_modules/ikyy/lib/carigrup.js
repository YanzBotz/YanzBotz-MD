const axios = require('axios')
const cheerio = require('cheerio')

const carigrup = async (nama) => {
	return new Promise((resolve, reject) => {
if(!nama) return new Error('Masukan Nama group')
  axios
    .get(
      `http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=${nama}&searchby=name`,
      {
        method: "GET",
      }
    )
    .then((res) => {
      const hasal = [];
      const hah = cheerio.load(res.data);
      hah("div.wa-chat-body").each(function (c, d) {
        let bokepli = hah(d).find("a").attr("href");
        let wers = hah(d).find("div.wa-chat-title-text").text().trim();
        const result = {
          name_group: wers,
          link: bokepli,
        };
        hasal.push(result);
      });
      const ress = {creator: "RzkyFdlh",result: hasal}
      resolve(ress)
      })
    });
};

module.exports = { carigrup }