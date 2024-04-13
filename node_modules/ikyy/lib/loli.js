const watermark = require("./watermark.js")

const loli = async () => {
  heum = await require("node-fetch")(
    "https://raw.githubusercontent.com/Caliph91/txt/main/loli.json"
  ).then((v) => v.json());
  const res = {};
  res.creator = "RzkyFdlh";
  res.url = await watermark(heum[Math.floor(Math.random() * heum.length)])
  return res;
};

module.exports = { loli };
