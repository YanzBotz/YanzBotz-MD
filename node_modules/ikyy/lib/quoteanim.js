const axios = require("axios");
const watermark = require("./watermark.js")

module.exports = async () => {
  let pagenya = Math.floor(Math.random() * 184);
  anu = (await axios.get("https://otakotaku.com/quote/feed/" + pagenya)).data;
  const $ = require("cheerio").load(anu);
  result = [];
  $("div.kotodama-list").each(function (a, b) {
    resul = {
      char_name: $(this).find("div.char-name").text().trim(),
      anime: $(this).find("div.anime-title").text().trim(),
      img: $(this).find("img").attr("data-src"),
      quotes: $(this).find("div.quote").text().trim(),
      episode: $(this).find("div.meta").text(),
      url: $(this).find("a").attr("href"),
      date: $(this).find("small.meta").text().trim(),
    };
    result.push(resul);
  });
  resa = {};
  resa.creator = "RzkyFdlh";
  resa.result = result;
  return resa;
};
