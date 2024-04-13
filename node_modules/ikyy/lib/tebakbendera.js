const axios = require('axios')
const cheerio = require('cheerio')

const tebakbendera = async() => {
flag = await axios.get(`https://emojipedia.org/flags`);
          flaga = cheerio.load(flag.data);
          flags = [];
          flaga("div > ul > li > a").each(function (a, b) {
            flags.push(flaga(b).text());
          });
          flags = flags.filter((ben) => ben.includes("Flag:"));
          rand = flags[Math.floor(Math.random() * flags.length)];
          answer = `${rand.split("Flag: ")[1]}`;
          jaws = answer.toLowerCase()
          res = {}
          res.creator = "RzkyFdlh"
          res.bendera = rand.split("Flag:")[0]
          res.jawaban = answer.toLowerCase()
          res.pertanyaan = jaws.replace(/['a','i','u','e','o']/g, "_")
          return res
          }
          
module.exports = { tebakbendera }