"use strict";

const fs = require('fs')
const chalk = require('chalk')
global.ownerNumber = ["6285883359262","254770672225"] //6289501060783
module.exports = {
  sesionName: "session",
  banchats: false,
  autoreadsw: true,
  anticall: true,
  banned: {
   maroko: true,
   india: false,
  },
  botfullname: "Anya Forger",
  botname: "Anya Forger",
  ownername: "©YanzBotz",
  author: `'Y'\n'A'\n'N'\n'Z'`,
  packname: `"YanzBotz"\n"Bot whatsapp Multi Device"\n"owner": "wa.me/6285883359262"\n"ig": "https://instagram.com/riyan_ff12"`,
  
  modul: {   
    qrcode: require('qrcode'),
    gris: require("google-reverse-image-search"),
    QrCode: require('qrcode-reader'),
    baileys: require("@adiwajshing/baileys"),
    boom: require('@hapi/boom'),
    chalk: require('chalk'),
    imgtopdf: require('image-to-pdf'),
    ikyy: require('ikyy'),
    child: require('child_process'),
    brainly: require('brainly-scraper'),
    akinator: require('aki-api'),
    fs: require('fs'),
    obfuscator: require('javascript-obfuscator'),
    pino: require("pino"),
    path: require("path"),
    phonenumber: require('awesome-phonenumber'),
    time: require("moment-timezone"),
    jimp: require('jimp'),
    speed: require('performance-now'),
    util: require("util"),
    AI2D: require("@arugaz/ai2d"),
    https: require('https'),
    sizeFormater: require('human-readable'),
    axios: require('axios'),
    ytsr: require('yt-search'),           
    qrcode: require('qrcode'), 
    qrcodereader: require('qrcode-reader'),
    request: require('request'),
    gris: require("google-reverse-image-search")
   },
  file: {
    load: './connection/starting',
    color: './lib/color',
    move: './lib/simple.js',   
    funct: './lib/function',
    exif: './lib/exif',
    thumb: './storage/image/thumb.jpg',
    list: './lib/list',
    scrapp: './lib/scraper',
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
