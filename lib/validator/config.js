"use strict";

const fs = require('fs')
const chalk = require('chalk')
global.ownerNumber = ["6285883359262"]
global.apikey = "YOUR_APIKEY" // Buy ApiKey = wa.me/6285883359262
module.exports = {
  sesionName: "session",
  banchats: false,
  autoreadsw: true,
  anticall: true,
  banned: {
   maroko: true,
   india: false,
  },
  botfullname: "YanzBotz-MD",
  botname: "YanzBotz-MD",
  ownername: "YanzBotzX",
  author: `'Y'\n'A'\n'N'\n'Z'`,
  packname: `"YanzBotz"\n"Bot whatsapp Multi Device"\n"owner": "wa.me/6285883359262"\n"ig": "https://instagram.com/riyan_ff12"`,
  gcount: { "prem": 30, "user": 20 },
  limitCount: 20,
  modul: {
    qrcode: require('qrcode'),  	
    QrCode: require('qrcode-reader'),  
    bochil: require("@bochilteam/scraper"),
    baileys: require("@whiskeysockets/baileys"),
    boom: require('@hapi/boom'),
    chalk: require('chalk'),
    ikyy: require('ikyy'),
    child: require('child_process'),
    fs: require('fs'),
    pino: require("pino"),
    path: require("path"),
    phonenumber: require('awesome-phonenumber'),
    time: require("moment-timezone"),
    jimp: require('jimp'),
    speed: require('performance-now'),
    util: require("util"),
    https: require('https'),
    sizeFormater: require('human-readable'),
    axios: require('axios'),
    ytsr: require('yt-search'),           
    qrcode: require('qrcode'), 
    qrcodereader: require('qrcode-reader'),
    request: require('request'),
    readline: require("readline"),
    nodecache: require("node-cache"),
    premium: require('parse-ms'),
   },
  file: {
    load: './connection/starting',
    color: './lib/color',
    move: './lib/simple.js', 
    yanz: './lib/myfunc',
    funct: './lib/function',
    exif: './lib/exif',
    thumb: './storage/image/thumb.jpg',
    list: './lib/list',
    scrapp: './lib/scraper',
    prem: './lib/premium',
    limit: './lib/limit',
  },

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
 
 //end
