const { toResult } = require("./toresult.js");
const gc = require("./carigrup.js");
const short = require("./shortlink.js");
const anim = require("./loli.js");
const gem = require("./tebakbendera.js");
const yt = require("./yt.js");
const ran = require("./rank.js");
const or = require("./turthordare.js");
const fek = require("./fakta.js");
const islam = require("./sholat.js");
const emot = require("./emojiunic.js");
const nabi = require("./nabi.js");
const dege = require("./doge.js");
const wikis = require("./wiki.js");
const babaji = require("./whatmusic.js");
const abangnakal = require("./buathtml.js");
const isogitukah = require("./ig.js");
const ayangeem = require("./buatpug.js");
const allo_bang_copas = require("./moddroid.js");
const apalo = require("./downloader.js");
const bacotkangenc = require("./encphp.js");
const katanya_mastah_kok_mau_nyolong = require("./encryptjs");
const ihgabole = require("./typodetect.js");
const doge = () => {
  return dege.doge();
};
const kisahnabi = async (nama) => {
  return nabi.kisahnabi(nama);
};
const parseResult = async (json, options = {}) => {
  return toResult(json, options);
};
const carigrup = async (nama) => {
  return gc.carigrup(nama);
};
const encryptJS = async (code) => {
  return katanya_mastah_kok_mau_nyolong(code);
};
const igdl = async (url) => {
  return isogitukah.post(url);
};
const igStory = async (url) => {
  return isogitukah.story(url);
};
const downloaderAll = async (url) => {
  return apalo(url);
};
const encryptPHP = async (code) => {
  return bacotkangenc(code);
};
const download = async (url) => {
	return allo_bang_copas.download(url);
};
const search = async (query) => {
	return allo_bang_copas.search(query);
};
const shortlink = async (url, costum) => {
  return short.shortlink(url, costum);
};
const tebakbendera = async () => {
  return gem.tebakbendera();
};
const loli = async () => {
  return anim.loli();
};
const ytmp4 = async (url) => {
  return yt.ytmp4(url);
};
const ytmp3 = async (url) => {
  return yt.ytmp3(url);
};
const detectTypo = (teks, json) => {
  return ihgabole.ihkepo(teks, json);
};
const playmusic = async (nama) => {
  return yt.playmusic(nama);
};
const neonime = async () => {
  return require("./neonime.js")();
};
const wiki = async (judul) => {
  return wikis.wiki(judul);
};
const telegraph = async (judul) => {
  return emot.telegs(judul);
};
const playvideo = async (nama) => {
  return yt.playvideo(nama);
};
const rank = (angka) => {
  return ran.rank(angka);
};
const fakta = () => {
  return fek.fakta();
};
const whatmusic = async (q) => {
  return babaji.whatmusic(q);
};
const truth = () => {
  return or.truth();
};
const emojimix = (...emoji) => {
  return emot.emojimix(...emoji);
};
const dare = () => {
  return or.dare();
};
const sholat = () => {
  return islam.sholat();
};
const waterMarkImage = (image) => {
  return require("./watermark.js")(image);
};
const emot_tiktok = async () => {
  return require("./emotiktok.js")();
};
const tiktok = async (url) => {
  return require("./tiktok.js")(url);
};
const jagokata = async (q) => {
  return require("./jagokata.js")(q);
};
const emojipedia = async (q) => {
  return require("./emojipedia.js")(q);
};
const pinterest = async (q) => {
  return require("./pinter.js")(q);
};
const createCodeHTML = async (code, name) => {
  return abangnakal(code, name);
};
const createCodePug = async (code, name) => {
  return ayangeem(code, name);
};
const mpl_id = async () => {
  return require("./mpl.js")();
};
const quotesAnime = async () => {
  return require("./quoteanim.js")();
};
const meme = async () => {
  return require("./meme.js")();
};
const translate = async (text, lang) => {
  return require("./trans.js")(text, lang);
};
const getHeaders = async (url) => {
  return require("./header.js")(url);
};
const ipLookup = async (ip) => {
  return require("./ip.js")(ip);
};
const prettyCode = async (code) => {
  return require("./prettyCode.js")(code);
};
const wordPressUser = async (site) => {
  return require("./wpuser.js")(site);
};
const tebakgambar = async () => {
  return require("./tebakgambar.js")();
};
const githubStalk = async (name) => {
  return require("./ghstalk.js")(name);
};
/**
 * @class IkyyClient
 **/
class IkyyClient {
  constructor() {
    (this.author = "RzkyFdlh"),
      (this.version = require("../package.json").version),
      (this.tools = {
        prettyCode,
        detectTypo,
        rank,
        telegraph,
        translate,
        shortlink,
        parseResult,
      });
    this.create = { createCodePug, createCodeHTML };
    this.encrypt = { encryptJS, encryptPHP };
    this.downloader = { tiktok, downloaderAll, igdl, igStory };
    this.image = { pinterest, doge, loli };
    this.information = { neonime, ipLookup, getHeaders };
    this.game = { tebakbendera, tebakgambar };
    this.stalk = { githubStalk };
    this.random = { quotesAnime, meme };
    this.fun = { emojimix, emot_tiktok };
    this.modApk = { search, download };
    this.search = {
      wordPressUser,
      kisahnabi,
      emojipedia,
      jagokata,
      carigrup,
      wiki,
      whatmusic,
    };
    this.randomtext = { truth, dare, fakta, sholat };
    this.yt = { ytmp3, ytmp4, playmusic, playvideo };
    this.other = { waterMarkImage };
  }
}

module.exports = IkyyClient;
