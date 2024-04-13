const axios = require("axios");
const cheerio = require("cheerio");
const watermark = require("./watermark.js")

module.exports = async () => {
  let random_level = Math.floor(Math.random() * 136);
  let random_eq = Math.floor(Math.random() * 20);
  let val = await axios.get(
    `https://jawabantebakgambar.net/level-${random_level}/`
  );
  var url = "https://jawabantebakgambar.net";
  const akuw = cheerio.load(val.data);
  let href = akuw("ul > * > a").eq(random_eq);
  let jwbqn = href.find("span").text();
  let img = href.find("img").attr("data-src");
  let src = url + img;
  let petunjuk = jwbqn.replace(/[AIUEO|aiueo]/g, "_");
  return {
    creator: "RzkyFdlh",
    img: src,
    jawaban: jwbqn,
    petunjuk,
  };
};
