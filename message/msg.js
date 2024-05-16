 const SETTING = require('../lib/validator/config')
 const keywords = require('../lib/validator/allKeywords')
  //=======================================================//
                      /* { module } */
  //=======================================================//
  let modul = SETTING['modul'];
  let getreq = SETTING['file'];
  const chalk = modul['chalk'];
  const fs = modul['fs'];
  const util = modul['util'];
  const https = modul['https'];
  const axios = modul['axios'];
  const ytsr = modul['ytsr'];
  const { spawn, exec, execSync } = modul['child'];
  const { downloadContentFromMessage, WA_DEFAULT_EPHEMERAL, getLastMessageInChat, MessageType, generateWAMessageFromContent, prepareWAMessageMedia, proto } = modul['baileys'];
  const moment = modul['time'];
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const qrcode = modul['qrcode'];
  const QrCode = modul['QrCode'];
  const qr = new QrCode();
  const ikyyClient = modul['ikyy'];
  const Ikyy = new ikyyClient();
  const { sizeFormatter } = modul['sizeFormater']
  const speed = modul['speed'];
  const request = modul['request'];
  const path = modul['path'];
  const dl = modul['bochil'];
  const ms = modul['premium'];

/*<--------------------( external function )--------------------->*/

const { TelegraPh } = require('../lib/telegraph');
const { instagram } = require('.' + getreq['scrapp']);
const _prem = require('.' + getreq['prem']);
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('.' + getreq['limit']);

/*<--------------------( Database )--------------------->*/

var balance = JSON.parse(fs.readFileSync('./database/balance.json'));
var limit = JSON.parse(fs.readFileSync('./database/limit.json'));
var glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
var premium = JSON.parse(fs.readFileSync('./database/premium.json'));
var pendaftar = JSON.parse(fs.readFileSync('./database/user.json'));

let akinator = [];
let tebakbom = [];

/*<--------------------( JS )--------------------->*/

const { color, bgcolor, ConsoleLog, biocolor } = require('.' + getreq['color']);
const { reSize, runtime, getBuffer, getRandom, pickRandom, fetchJson, isUrl, genMath, formatp } = require('.' + getreq['funct']);
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('.' + getreq['exif']);

/*<--------------------( Media )--------------------->*/

const thumb = fs.readFileSync(getreq['thumb']);

/*<--------------------( Exports this function )--------------------->*/

module.exports = async(msg, client, from, store) => {
    
/*<--------------------( Detect )--------------------->*/    

   const isGrouP = msg.key.remoteJid.endsWith('@g.us')
   const sender = isGrouP ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
   const pushname = msg.pushName || "No Name"
   const CMD = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'   
	 global.prefix = prefix
   const chatmessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.xtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
   const ordermessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? msg.message.templateButtonReplyMessage.selectedId : ''   
   const chats = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''   	
   const args = ordermessage.trim().split(/ +/).slice(1)         
   const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   const command = ordermessage.slice(1)
   const q = args.join(' ')   
   const fatkuns = (msg.quoted || msg)
   const quoted = (fatkuns.xtyp == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.xtyp == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.xtyp == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : msg.quoted ? msg.quoted : msg
   const isCmd = ordermessage.startsWith(prefix)   
   const content = JSON.stringify(msg.message)
   const orderPlugins = isCmd ? ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase() : null
   const isGroup = from.endsWith(keywords[0]['chats'][1])
   const botNumber = client.user.id.split(':')[0] + keywords[0]['chats'][0]
   const mime = (quoted.msg || quoted).mimetype || '' 
   const isMedia = /image|video|sticker|audio/.test(mime)
   const itulho = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid  
   const isOwner = [botNumber, ...global.ownerNumber].map(jid => jid.replace(/[^0-9]/g, '') + keywords[0]['chats'][0]).includes(itulho)
   const groupMetdata = isGroup ? await client.groupMetadata(from) : ''
         client.groupMembers = isGroup ? groupMetdata.participants : ''
         client.groupName = isGroup ? await groupMetdata.subject : ''   
         client.groupAdmins = isGroup ? msg.getGroupAdmins(client.groupMembers) : ''
   const isBotGroupAdmins = client.groupAdmins.includes(botNumber) || false
   const isGroupAdmins = client.groupAdmins.includes(msg.sender)
   const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
   const gcounti = SETTING.gcount
   const gcount = isPremium ? gcounti.prem : gcounti.user
   const limitCount = SETTING.limitCount
   const isUser = pendaftar.includes(sender)
   
/*<--------------------( Premium )--------------------->*/

_prem.expiredCheck(client, premium)

/*<--------------------( Participant mentions )--------------------->*/

const mentionByTag = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""       
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : false 

/*<--------------------( Function )--------------------->*/

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
                   
const formatSize = sizeFormatter({
    std: "JEDEC",
    decimalPlaces: "2",
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
});   

/*<--------------------( Function  Hari )--------------------->*/
        
const today = moment().tz("Asia/Jakarta")
const day = today.format('dddd');
const datee = today.format('D');
const month = today.format('MMMM');
const year = today.format('YYYY');
const jos = '```'
const shp = "•"

const parseResult = async (title, json, option) => {
    if (Array.isArray(json)) {
        var txt = `${title ? `_*${title}*_\n\n` : ''}${shp}\n`;
        for (let i = 0; i < json.length; i++) {
            if (option && option.delete) {
                for (let j of option.delete) {
                    delete json[i][j];
                }
            }
            for (let j of Object.entries(json[i])) {
                if (j[1] != undefined && j[1] != null && j[1] != "") {
                    txt += `${shp} *${await kapitalisasiKata(
                        j[0].replace(/_/, " ")
                    )}* : ${j[1]}\n`;
                }
            }
            if (i + 1 != json.length) txt += `\n${shp}\n`;
        }
    } else {
        var txt = title ? `_*${title}*_\n\n` : '';
        if (option && option.delete) {
            for (let j of option.delete) {
                delete json[j];
            }
        }
        for (let i of Object.entries(json)) {
            if (i[1] != undefined && i[1] != null && i[1] != "") {
                txt += `${shp} *${await kapitalisasiKata(
                    i[0].replace(/_/, " ")
                )}* : ${i[1]}\n`;
            }
        }
    }
    return txt.trim();
};

function Rp(angka) {
    return "Rp. " + (angka < 0 ? "" : "") + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "";
}

const totaal = getBalance(sender, balance)
const belec = await Rp(`${totaal}`)

const replyNtag = (teks) => {
    client.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: msg })
}

const sendFile = async (from, url, caption, msg, men) => {
    let mime = '';
    let res = await axios.head(url)
    mime = res.headers['content-type']
    if (mime.split("/")[1] === "gif") {
        return client.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: msg})
    }
    let type = mime.split("/")[0]+"Message"
    if(mime.split("/")[0] === "image"){
        return client.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: nay1})
    } else if(mime.split("/")[0] === "video"){
        return client.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
    } else if(mime.split("/")[0] === "audio"){
        return client.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: msg })
    } else {
        return client.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: msg })
    }
}

for (let name in plugins) {
    let plugin = plugins[name]              
    if (plugin.order && plugin.order.includes(orderPlugins)) {
        let turn = plugin.order instanceof Array
            ? plugin.order.includes(orderPlugins)
            : plugin.order instanceof String
                ? plugin.order == orderPlugins
                : false
        if (!turn) continue
        if (plugin.owner && !isOwner){ 
            msg.reply(keywords[0]['message'][2])
            continue 
        }
        if (plugin.group && !isGroup){ 
            msg.reply(keywords[0]['message'][1])
            continue
        }
        if (plugin.groupAdmins && !isGroupAdmins){ 
            msg.reply(keywords[0]['message'][3])
            continue
        }
        if (plugin.botGroupAdmins && !isBotGroupAdmins){ 
            msg.reply(keywords[0]['message'][4])
            continue
        }
        await plugin.exec(msg, client, from, { q, args, order })
    }
}         

function parseMention(text) {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const nay1 = { 
    key: {
        fromMe: false, 
        participant: "0@s.whatsapp.net", 
        ...(from ? { remoteJid: "status@broadcast" } : {})
    }, 
    message: { 
        contactMessage: { 
            displayName: `${msg.sayingtime + msg.timoji}\n☏User: ${pushname}`, 
            vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' 
        } 
    } 
}

/*<--------------------( Buttons )--------------------->*/    

client.sendListWithImage = async (jid, text, list, footer, image, quoted, options = {}) => {
                let ListWMsg = generateWAMessageFromContent(jid, {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                contextInfo: {
                                    mentionedJid: [msg.sender],
                                    isForwarded: true,
                                    forwardedNewsletterMessageInfo: {
                                        newsletterJid: global.saluranId,
                                        newsletterName: 'Powered By YanzBotz - MD',
                                        serverMessageId: -1
                                    },
                                    businessMessageForwardInfo: {
                                        businessOwnerJid: global.ownerNumber + "@s.whatsapp.net"
                                    },
                                    externalAdReply: {
                                        title: 'YanzBotz - MD',
                                        thumbnailUrl: image,
                                        sourceUrl: '',
                                        mediaType: 1,
                                        renderLargerThumbnail: true
                                    }
                                },
                                body: {
                                    text: text
                                },
                                footer: {
                                    text: footer
                                },
                                header: {
                                    title: "Powered By YanzBotz - MD",
                                    subtitle: "YanzBotz - MD",
                                    hasMediaAttachment: true, 
                                    ...(await prepareWAMessageMedia({ image: { url: image } }, { upload: client.waUploadToServer }))
                                },
                                nativeFlowMessage: {
                                    buttons: [
                                        {
                                            "name": "single_select",
                                            "buttonParamsJson": JSON.stringify(list)
                                        }
                                    ],
                                }
                            }
                        }
                    }
                }, {})

                await client.relayMessage(ListWMsg.key.remoteJid, ListWMsg.message, {
                    messageId: ListWMsg.key.id,
                    quoted: quoted,
                })
            }

client.sendListButton = async (jid, text, list, footer, quoted, options = {}) => {
	let ListMsg = generateWAMessageFromContent(jid, {
       viewOnceMessage: {
          message: {
              interactiveMessage: {
                  body: {
                    text: text
                 },
                  footer: {
                    text: footer
                 },
              nativeFlowMessage: {
                  buttons: [{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify(list)
             }],
          }
       }
    }
  }
}, {})

await client.relayMessage(ListMsg.key.remoteJid, ListMsg.message, {
            messageId: ListMsg.key.id,
            quoted: quoted,
  })
}

/*<--------------------( EVAL )--------------------->*/    
    
if (chatmessage.startsWith('<')) {
    if (!isOwner) return
    if (!q) return msg.reply('Masukan Parameter Code!')
    let kode = chatmessage.trim().split(/ +/)[0]
    let teks
    try {
        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
    } catch (e) {
        teks = e
    } finally {
        await msg.reply(require('util').format(teks))
    }
}

if (chatmessage.startsWith('=>')) {
    if (!isOwner) return
    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined) {
            bang = util.format(sul)
        }
        return msg.reply(bang)
    }
    try {
        msg.reply(util.format(eval(`(async () => { ${chatmessage.slice(3)} })()`)))
    } catch (e) {
        msg.reply(String(e))
    }
}

if (chatmessage.startsWith('>')) {
    if (!isOwner) return
    try {
        let evaled = await eval(chatmessage.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await msg.reply(evaled)
    } catch (err) {
        msg.reply(String(err))
    }
}

if (chatmessage.startsWith('$')) {
    if (!isOwner) return
    exec(chatmessage.slice(2), (err, stdout) => {
        if(err) return client.sendMessage(from, {text :String(err)}, {quoted:msg})
        if (stdout) return msg.reply(stdout)
    })
}

function randomNomor(min, max = null) {
    if (max !== null) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * min) + 1
    }
}

// Auto Registrasi
if (msg.message && msg.text && !isUser && !isGroup) {
    pendaftar.push(sender)
    fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

// Function pepe
const jimp_1 = require('jimp')
async function pepe(media) {
    const jimp = await jimp_1.read(media)
    const min = jimp.getWidth()
    const max = jimp.getHeight()
    const cropped = jimp.crop(0, 0, min, max)
    return {
        img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
        preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
    }
}

   //=======================================================//
                             /* { conlog cmd } */
   //=======================================================//
   
     if (isCmd && !isGroup) {
        console.log(keywords[0]['cmd'][0], keywords[0]['cmd'][1], time, color(`#${command} [${args.length}]`, 'gray'), 'from', color(msg.pushName))
     }
     if (isCmd && isGroup) {
       console.log(keywords[0]['cmd'][0], keywords[0]['cmd'][1], time, color(`#${command} [${args.length}]`, 'gray'), 'from', color(msg.pushName), 'in', color(client.groupName, 'orange'))
     }


   //=======================================================//
                             /* { Auto Downloader } */
   //=======================================================//

let tt = `https://vt.tiktok${chatmessage.slice(17)}`
if (chatmessage.includes(tt)) {
    var url = tt
    try {
        let yanz = [{
            title: "MP3/MP4",
            rows: [
                {title: `[ 🎵 ] MP3 AND SLIDE`,rowId: `#tiktokmp3 ${url}`, description: `\nPilih Tiktok MP3 untuk audio`},
                {title: `[ 🎵 ] MP4 AND SLIDE`,rowId: `#tiktok ${url}`, description: `\nPilih Tiktok MP4 untuk video`}
            ]
        }]
        client.sendListMsg(sender, `MP3/MP4`, `
Yanz-GPT`, `TYPE AUDIO/VIDEO TO SEND`, `Click Here`, yanz, msg)
    } catch (e) {
        msg.reply("Error, tidak support slide!!")
    }
}

let tt2 = `https://www.tiktok.com/${chatmessage.slice(23)}`
if (chatmessage.includes(tt2)) {
    var url = tt2
    try {
        let yanz = [{
            title: "MP3/MP4",
            rows: [
                {title: `[ 🎵 ] MP3 AND SLIDE`,rowId: `#tiktokmp3 ${url}`, description: `\nPilih Tiktok MP3 untuk audio`},
                {title: `[ 🎵 ] MP4 AND SLIDE`,rowId: `#tiktok ${url}`, description: `\nPilih Tiktok MP4 untuk video`}
            ]
        }]
        client.sendListMsg(sender, `MP3/MP4`, `
Yanz-GPT`, `TYPE AUDIO/VIDEO TO SEND`, `Click Here`, yanz, msg)
    } catch (e) {
        msg.reply("Error, tidak support slide!!")
    }
}

let tt3 = `https://vm.tiktok${chatmessage.slice(17)}`
if (chatmessage.includes(tt3)) {
    var url = tt3
    try {
        let yanz = [{
            title: "MP3/MP4",
            rows: [
                {title: `[ 🎵 ] MP3 AND SLIDE`,rowId: `#tiktokmp3 ${url}`, description: `\nPilih Tiktok MP3 untuk audio`},
                {title: `[ 🎵 ] MP4 AND SLIDE`,rowId: `#tiktok ${url}`, description: `\nPilih Tiktok MP4 untuk video`}
            ]
        }]
        client.sendListMsg(sender, `MP3/MP4`, `
Yanz-GPT`, `TYPE AUDIO/VIDEO TO SEND`, `Click Here`, yanz, msg)
    } catch (e) {
        msg.reply("Error, tidak support slide!!")
    }
}

let igdl = `https://www.instagram.com/${chatmessage.slice(26)}`
if (chatmessage.includes(igdl)) {
    var url = igdl
    msg.reply("_*Sedang mendownload...*_")	
    msg.reply(`*[ INSTAGRAM ]*\n\n_Wait A Minute._`)
    instagram(url).then( data => {
        for ( let i of data ) {
            if (i.type === "video") {
                client.sendMessage(from, {video: {url: i.url}}, {quoted: msg})
            } else if (i.type === "image") {
                client.sendMessage(sender, { caption: `_Jika Bot berguna, jangan lupa support supaya Bot - Auto Downloader terus aktif https://saweria.co/YanzBotzX_`, image: { url: i.url }})
                limitAdd(sender, limit)
            }
        }
    }).catch(() => msg.reply(`Eror mas. P in owner coba`))
}

let yutu = `https://youtu${chatmessage.slice(13)}`
if (chatmessage.includes(yutu)) {
    var url = yutu
    let yanz = [{
        title: "MP3/MP4",
        rows: [
            {title: `[ 🎵 ] MP3`,rowId: `#ytmp3 ${url}`, description: `\nPilih YouTube MP3 untuk audio`},
            {title: `[ 🎵 ] MP4`,rowId: `#ytmp4 ${url}`, description: `\nPilih YouTube MP4 untuk video`}
        ]
    }]
    client.sendListMsg(sender, `MP3/MP4`, `
Yanz-GPT`, `TYPE AUDIO/VIDEO TO SEND`, `Click Here`, yanz, msg)
}

let cp = `https://www.capcut.com/${chatmessage.slice(23)}`
if (chatmessage.includes(cp)) {
    var url = cp
    try {
        msg.reply("_*Sedang mendownload...*_")	 
        const data = await fetchJson("https://api.yanzbotz.my.id/api/downloader/capcut?url=" + url + "&apiKey=" + global.apikey)
        msg.reply(`*[ CAPCUT ]*\n\n*Title :* ${data.result.title}\n*View:* ${data.result.view}\n*Deksripsi :* ${data.result.description}\n*Penonton:* ${data.result.usage}\n\n_Wait A Minute._`)
        client.sendMessage(from, {video: {url: data.result.originalVideoUrl}, caption: `\n*Title :* ${data.result.title}\n*View:* ${data.result.view}\n*Deksripsi :* ${data.result.description}\n*Penonton:* ${data.result.usage}`}, { quoted : msg })
    } catch (e) {
        msg.reply("Error")
    }
} 

let fbdl = `https://fb.watch${chatmessage.slice(16)}`
if (chatmessage.includes(fbdl)) {
    var url = fbdl
    try {
        const TodTes = await fetchJson("https://api.yanzbotz.my.id/api/downloader/facebook?url=" + url + "&apiKey=" + global.apikey)
        var cap = `
        📌 *Caption:* ${TodTes.caption}
        `
        client.sendMessage(from, { video: { url : TodTes.result }, mimetype: 'video/mp4', caption: cap },{quoted: msg})
    } catch (e) {
        msg.reply("Error")
    }
}
let fb2 = `https://www.facebook.com${chatmessage.slice(24)}`
if (chatmessage.includes(fb2)) {
    var url = fb2
    try {
        msg.reply("_*Sedang mendownload...*_")	   
        const TodTes = await fetchJson("https://api.yanzbotz.my.id/api/downloader/facebook?url=" + url + "&apiKey=" + global.apikey)
        var cap = `
        📌 *Caption:* ${TodTes.result.desc}
        `
        client.sendMessage(from, { video: { url : TodTes.result.video_sd }, mimetype: 'video/mp4', caption: cap },{quoted: msg})
    } catch (e) {
        msg.reply("Error")
    }
}

let Thred = `https://www.threads.net/${chatmessage.slice(24)}`
if (chatmessage.includes(Thred)) {
    var url = Thred
    msg.reply('_Sedang Mendownload...')
    try {
        fetchJson("https://api.yanzbotz.my.id/api/downloader/threads?url=" + url + "&apiKey=" + global.apikey)
            .then(async yanzb => {
                let hasil = yanzb.result
                let video = hasil["video_versions"]
                let image = hasil["image_versions2"]
                if (video.length == 0) {
                    let img = {
                        image: {
                            url: image[0].url
                        },
                        caption: 'Result',
                        contextInfo: {
                            externalAdReply: {
                                title: time,
                                body: `${msg.sayingtime + msg.timoji + ' ' + msg.pushName}`,
                                thumbnail: thumb,
                                sourceUrl: "https://instagram.com/yanzbotz_",
                                mediaUrl: "https://instagram.com/yanzbotz_",
                                showAdAttribution: true,
                                mediaType: 1
                            }
                        }
                    }
                    await client.sendMessage(from, img, {
                        quoted: msg
                    })
                } else {
                    let vid = {
                        video: {
                            url: video[0].url
                        },
                        caption: 'Result',
                        contextInfo: {
                            externalAdReply: {
                                title: time,
                                body: `${msg.sayingtime + msg.timoji + ' ' + msg.pushName}`,
                                thumbnail: thumb,
                                sourceUrl: "https://instagram.com/yanzbotz_",
                                mediaUrl: "https://instagram.com/yanzbotz_",
                                showAdAttribution: true,
                                mediaType: 1
                            }
                        }
                    }
                    await client.sendMessage(from, vid, {
                        quoted: msg
                    })
                }
            })
    } catch (e) {
        msg.reply(`Type error`)
    }
}

   //=======================================================//
                         /* { cases } */   
   //=======================================================//
                       
    switch(order){
     
     case prefix + ['tes'] :{
     msg.reply('_Oke sip nyala botnya_')
     }
     break
     
case prefix + ["menu"]: {
client.sendMessage(from, { text: `*List menu YanzBotz-MD*

々 *INFO USER*
• Nama Owner : YanzBotzX
• Nomer Owner : 085883359262

々 *OWNER MENU*
• ${prefix}self
• ${prefix}public

々 *MENU*
• ${prefix}alquran
• ${prefix}sticker
• ${prefix}chat

々 *DOWNLOAD MENU*
• ${prefix}tiktok
• ${prefix}instagram

々 *AI MENU*
• ${prefix}aiimg
• ${prefix}ai
• ${prefix}gptvoice
• ${prefix}simi

々 *TOOLS MENU*
• ${prefix}remini
• ${prefix}rangkum

々 *TOOLS MENU*
• ${prefix}yanz
• ${prefix}ardi
• ${prefix}janie

々 *PREMIUM MENU*
• ${prefix}tf
• ${prefix}balance
• ${prefix}buylimit
• ${prefix}buyglimit
• ${prefix}topbalance
• ${prefix}buypremium
• ${prefix}cekpremium
• ${prefix}listpremium 

々 *GROUP MENU*
• ${prefix}group
`, 
contextInfo: { externalAdReply: {
title: "YanzBotz-MD",
sourceUrl: "https://chat.whatsapp.com/KfQNICkv8CB7FgynDcbafX",
mediaUrl: "https://github.com/YanzBotz/YanzBotz-MD",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: "https://telegra.ph/file/72dac7d98b7394ce78845.jpg" }}}, {quoted: msg})
}
break  

case prefix + ['buypremium'] : case prefix + ['buyprem'] : {
	if (isPremium) return msg.reply(`Kamu Sudah User Premium `)
         if (!args[0]) return msg.reply("*Premium PerMinute:*\n1m | 2m | 3m | 4m | 5m | 6m | 7m | 9m | 10m\n\n*Premium PerHours:*\n1h | 2h | 3h | 4h | 5h | 6h | 7h | 8h | 9h | 10h\n\n*Premium Harian:*\n1d | 2d | 3d | 4d | 5d | 6d | 7d | 8d | 9d | 10d\n\n*Premium Bulanan:*\n30d | 60d\n\n*Premium Tahun:*\n365d\n\nExample : *#buypremium 1d*\nUntuk melihat harga premium silahkan ketik *#listharga*")
          let preem = args[0]   
           if (args[0] === "1d"){
               let ane = 100000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "2d"){
               let ane = 300000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "3d"){
               let ane = 300000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "4d"){
             let ane = 400000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "5d"){
             let ane = 500000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "6d"){
             let ane = 600000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "7d"){
              let ane = 700000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "8d"){
               let ane = 800000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "9d"){
               let ane = 900000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "10d"){
             let ane = 1000000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "1m"){
             let ane = 1000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "2m"){
             let ane = 2000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "3m"){
              let ane = 3000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "4m"){
             let ane = 4000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "5m"){
             let ane = 5000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "6m"){
              let ane = 6000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "7m"){
             let ane = 7000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "8m"){
             let ane = 8000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
               client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "9m"){
              let ane = 9000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "10m"){
             let ane = 10000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "1h"){
             let ane = 41000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "2h"){
             let ane = 42000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "3h"){
              let ane = 43000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "4h"){
             let ane = 44000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "5h"){
             let ane = 45000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "6h"){
              let ane = 46000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "7h"){
             let ane = 47000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "8h"){
             let ane = 48000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "9h"){
              let ane = 49000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "10h"){
             let ane = 50000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "30d"){
             let ane = 3000000000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "60d"){
             let ane = 6000000000000000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                 var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "365d"){
             let ane = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
            } else msg.reply('Belum tersedia, tunggu next update')
          }
         break

case prefix + ['group'] : { 
     	if (!isGroup) return msg.reply('Khusus gc')
     	if (!isBotGroupAdmins) return msg.reply('Bot ga admin')
     	if (!isGroupAdmins) return msg.reply('Anda bukan admin')
     	if (q.toLowerCase() === "close") {
     		await client.groupSettingUpdate(from, 'announcement').then((res) => msg.reply(`Sukses Menutup Group`)).catch((err) => msg.reply(jsonformat(err)))
         } else if (q.toLowerCase() === "open") {
         	 await client.groupSettingUpdate(from, 'not_announcement').then((res) => msg.reply(`Sukses Membuka Group`)).catch((err) => msg.reply(jsonformat(err)))
          } else {	
          	 client.sendPoll(from, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} open`,`${command.charAt(0).toUpperCase()+command.slice(1)} close`])
          }   
      }      
      break
      
   case prefix + ['limit'] :
            case prefix + ['balance'] :
            case prefix + ['ceklimit']:
            case prefix + ['cekbalance'] : {
                var Ystatus = ownerNumber.includes(sender)
                var isPrim = Ystatus ? true : _prem.checkPremiumUser(sender, premium)
                var ggcount = isPrim ? gcounti.prem : gcounti.user
                var limitMen = `${getLimit(sender, limitCount, limit)}`
                let bel = { 
                text: `\n*Name :* ${jos}${msg.pushName}${jos}\n*Limit :* ${jos}${isOwner ? 'Infinity' : isPremium ? 'Infinity' : getLimit(sender, limitCount, limit)}/${limitCount}${jos}\n*Limit Game :* ${jos}${cekGLimit(sender, ggcount, glimit)}/${ggcount}${jos}\n*Balance :* ${jos}${belec}${jos}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`,
                contextInfo: {
                    externalAdReply: {
                        title: `${day}, ${datee} ${month} ${year}`,
                        body: `${msg.sayingtime + msg.timoji}`,
                        thumbnail: fs.readFileSync('./storage/image/balance.jpg'),
                        mediaUrl: "https://www.youtube.com/@YanzBotz",
                        mentions:[sender],
                        renderLargerThumbnail: true,
                        showAdAttribution: false,
                        mediaType: 1
                    }
                }
            }
            client.sendMessage(from, bel, {
                quoted: msg
            })
            }
            break    
            
case prefix + ['tf'] :
case prefix + ['tfbalance'] :{
	if (!isGroup) return msg.reply(`\n*「 ❗ 」WARNING*\n_Fitur Hanya bisa di gunakan di dalam group silahkan masuk_\n\nhttps://chat.whatsapp.com/KfQNICkv8CB7FgynDcbafX`)
	if (isGame(sender, isOwner, gcount, glimit)) return msg.reply(`Limit game kamu Telah Habis, Beli limit game ketik #buyglimit`)
           if (!isPremium) return msg.reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
           if (args.length < 2) return msg.reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 1000`)
                 if (mention.length == 0) return msg.reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[1]) return msg.reply(`Masukkan nominal nya!`)
                 if (isNaN(args[1])) return msg.reply(`Nominal harus berupa angka!`)
                 if (args[0].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[1].includes("-")) return msg.reply(`Jangan menggunakan -`)
                 if (args[1].includes(",")) return msg.reply(`Jangan menggunakan ,`)
                 if (args[1].includes(".")) return msg.reply(`Jangan menggunakan .`)
                 if (args[1].includes("$")) return msg.reply(`Jangan menggunakan $`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[1] || anu == 'undefined') return msg.reply(`「 *TRANSFER FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 DARI    : @${msg.sender.split("@")[0]}${jos}\n${jos}🥷 TUJUAN  : @${mention[0].split("@")[0]}${jos}\n${jos}🏷️ JUMLAH  : $${args[1]}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance Kamu Tidak Mencukupi Untuk Transfer_`)
                 kurangBalance(sender, parseInt(args[1]), balance)
                 addBalance(mention[0], parseInt(args[1]), balance)
               replyNtag(`「 *TRANSFER BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 DARI    : @${msg.sender.split("@")[0]}${jos}\n${jos}🥷 TUJUAN  : @${mention[0].split("@")[0]}${jos}\n${jos}🏷️ JUMLAH  : $${args[1]}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n\n_Sukses mentransfer, jika ada bug silahkan lapor ke owner_`)
            }
            gameAdd(sender, glimit)
       break    
       
     case prefix + ['buylimit']: {
                if (args.length < 1) return msg.reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $300 balance\nPajak $1 / $10`)
                if (args[0].includes('@')) return msg.reply(`Jangan menggunakan @tag, Masukan angka untuk membeli limit`)
                if (args[0].includes('-')) return msg.reply(`Jangan menggunakan -`)
                if (isNaN(args[0])) return msg.reply(`Harus berupa angka`)
                var ane = args[0] * 300
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🛍️ JUMLAH  : ${q}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli limit_`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, args[0], limit)
                replyNtag(`「 *BUY LIMIT BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🛍️ JUMLAH  : ${args[0]}${jos}\n${jos}📍 LIMIT   : ${getLimit(sender, limitCount, limit)}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n\n_Sukses membli limit, jika ada bug silahkan lapor ke owner_`)
                }
            break      
            
    case prefix + ['cekprem'] :
            case prefix + ['cekpremium'] :
                if (!isPremium) return msg.reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
                var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `*Expire :* ${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                msg.reply(premiumnya)
                break

   case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                 if (args.length < 1) return msg.reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $300 balance\nPajak $1 / $10`)
                if (args[0].includes('@')) return msg.reply(`Jangan menggunakan @tag, Masukan angka untuk membeli limit`)
                if (args[0].includes('-')) return msg.reply(`Jangan menggunakan -`)
                if (isNaN(args[0])) return msg.reply(`Harus berupa angka`)
                var ane = args[0] * 300
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🛍️ JUMLAH  : ${q}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli glimit_`)
                kurangBalance(sender, ane, balance)
                givegame(sender, args[0], glimit)
                replyNtag(`「 *BUY GLIMIT BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🛍️ JUMLAH  : ${q}${jos}\n${jos}🕹️ GLIMIT  : ${cekGLimit(sender, gcount, glimit)}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n\n_Sukses membli glimit, jika ada bug silahkan lapor ke owner_`)
                }
                break            

case prefix + ['instagram'] : case prefix + ['ig'] :
 if (!q)return msg.reply(`Berikan Link\nExample : ${command} link`)
 if (!isUrl(q)) return msg.reply(`Link Ga Sesuai`)
 if (!q.includes('instagram.com')) return msg.reply(`Link Ga Sesuai`)
 msg.reply('_Sedang Mendownload...')
 instagram(q).then( data => {
 for ( let i of data ) {
 if (i.type === "video") {
 client.sendMessage(from, {video: {url: i.url}}, {quoted: msg })
 } else if (i.type === "image") {
 client.sendMessage(from, { caption: `Sukses, Follow Instagram : @yanzbotz_`, image: { url: i.url }}, {quoted: msg })
            }
     }
 }).catch(() => msg.reply(`ERORR. Postingan tidak Tersedia`))
break

case prefix + ['krakenfiles']: case prefix + ['kraken']: case prefix + ['krakenfile'] : {
if (!q) return msg.reply('linknya mana')
msg.reply('_Sedang Mendownload..._')
const res = await fetchJson("https://api.yanzbotz.my.id/api/downloader/krakenfiles?url=" + q + "&apiKey=" + global.apikey)
msg.reply(`_*Downloading file, don't spam . . .*_\n\n*• Title :* ${res.result.title}\n*• Tanggal upload :* ${res.result.uploaddate}\n*• Tanggal Download :* ${res.result.lastdownloaddate}\n*• fileSize :* ${res.result.filesize}\n*• Type File :* ${res.result.type}\n*• Views :* ${res.result.views}\n*• Download :* ${res.result.downloads}`)	
client.sendMessage(from, { document : { url : res.result.url}, fileName : res.result.title, mimetype: 'video/mp4' }, { quoted : msg})
}
break

case prefix + ['terabox']:
case prefix + ['tera']:
case prefix + ['box']: {
    if (!q) return msg.reply('Linknya mana');
    msg.reply('_Sedang Mendownload..._');
    const fileData = await fetchJson("https://terabox-test.vercel.app/api?data=" + q)
    msg.reply(`_*Downloading file, don't spam . . .*_\n\n*• Title :* ${fileData.file_name}\n*• Ukuran :* ${fileData.size}\n*• Ukuran dalam Bytes :* ${fileData.sizebytes}\n*• Thumbnail :* ${fileData.thumb}`);	
    client.sendMessage(from, { document: { url: fileData.direct_link }, fileName: fileData.file_name, mimetype: 'video/mp4' }, { quoted: msg });
}
break;

case prefix + ['tiktok']:
case prefix + ['tt']:
case prefix + ['tiktokdl']:
case prefix + ['tiktokslide']:
case prefix + ['tiktoknowm']:
case prefix + ['tiktokvid']:
case prefix + ['ttdl']: {
    try {
        if (!q) return msg.reply('Link nya mana');
        let yaaa = await fetchJson("https://api.yanzbotz.my.id/api/downloader/aiodl?url=" + q + "&apiKey=" + global.apikey);
        let data = yaaa.result;
        let type = yaaa.result.medias[0].type;
        let text = '[ TIKTOK DOWNLOAD ]' + '\n\n';
        text += `type: ${type}` + '\n';
        text += `title: ${data.title}` + '\n\n';
        let proces = await client.sendMessage(from, {
            text: 'Media type : ' + type
        }, {
            quoted: msg
        });
        if (type === 'image') {
            let ima = yaaa.result.medias;

            function extractImageUrls(data) {
                const imageUrls = data.filter(item => item.type === 'image').map(item => item.url);
                return imageUrls;
            }

            const images = await extractImageUrls(ima);
            for (let N = 0; N < images.length; N++) {
                await client.sendMessage(from, {
                    image: {
                        url: images[N]
                    },
                    caption: 'images: ' + (N + 1)
                }, {
                    quoted: msg
                });
            } 
        }
        if (type == 'video') {
            let video = data.medias[1];
            await client.sendMessage(from, {
                video: {
                    url: video.url
                },
                caption: text
            }, {
                quoted: msg
            });
        }
    } catch (error) {
        msg.reply("Terjadi kesalahan");
    }
}
break;
		    
case prefix + 'alquran': {
	if (!(args[0] || args[1])) return msg.reply(`contoh:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, & ayatnya 1 saja`)
    if (isNaN(args[0]) || isNaN(args[1])) msg.reply(`contoh:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
    let api = await dl.alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.id}
( Q.S ${api[args[0] - 1 ].asma.id.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )
`.trim()
    msg.reply(mes)
    client.sendMessage(from, {audio: { url: api[args[0] - 1].ayahs[args[1] - 1].audio.url }, mimetype: 'audio/mpeg', ptt:true }, { quoted : msg })
}
break

case prefix + ['s'] : case prefix + ['stiker'] : case prefix + ['setiker'] : case prefix + ['sticker'] :{
          if ((isMedia && !msg.message.videoMessage || msg.isQuotedImage) && args.length == 0) {
             client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
             var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
             var buffer = Buffer.from([])
               for await(const chunk of stream) {
                  buffer = Buffer.concat([buffer, chunk])
               }
             let buffers = await writeExifImg(buffer, { packname: SETTING['packname'], author: SETTING['author'] })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
          } else if ((isMedia && msg.message.videoMessage.seconds < 11 || msg.isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
               client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                var buffer = Buffer.from([])
                  for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                  }
             let buffers = await writeExifVid(buffer, { packname: SETTING['packname'], author: SETTING['author'] })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
           } else { msg.reply(`Reply gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!)*`) }
         }
       break

case prefix + ['chat'] :
if(!isOwner) return
if (!args.join(" ")) return 
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
const lolh = `${pesny}`
client.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[msg.sender]}, {quoted: nay1 })
await msg.reply("_Success dikirim_")
break;

case prefix + ['public'] :{
         if(!isOwner) return
           SETTING['banchats'] = false
          msg.reply(keywords[0]['mode'][0])
         }
      break

case prefix + ['self'] :{
         if(!isOwner) return
             SETTING['banchats'] = true
          msg.reply(keywords[0]['mode'][1])
        }
      break

case prefix + ['aiimg'] :{
if (!q) return msg.reply("Input Text!")
var jadien = await Ikyy.tools.translate(q, 'en')
msg.reply("Wait...,Making...")
try {
var createAI = await openai.createImage({
    prompt: jadien.toLowerCase(),
    n: 1,
    size: "512x512"
})
client.sendMessage(from, { image: { url: createAI.data.data[0].url }, caption: '*'+q+'*' }, { quoted: msg })
} catch (e) {
msg.reply("Error!\n\n"+e)
}
}
break

case prefix + ["info"] : {     
            let os = require("os")
            let v8 = require("v8")
            let { performance } = require("perf_hooks")
            let eold = performance.now()

            const used = process.memoryUsage()
            const cpus = os.cpus().map(cpu => {
               cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
               return cpu
            })
            const cpu = cpus.reduce((last, cpu, _, { length }) => {
               last.total += cpu.total
               last.speed += cpu.speed / length
               last.times.user += cpu.times.user
               last.times.nice += cpu.times.nice
               last.times.sys += cpu.times.sys
               last.times.idle += cpu.times.idle
               last.times.irq += cpu.times.irq
               return last
            }, {
               speed: 0,
               total: 0,
               times: {
                  user: 0,
                  nice: 0,
                  sys: 0,
                  idle: 0,
                  irq: 0
               }
            })
            let heapStat = v8.getHeapStatistics()
            let neow = performance.now()

            let teks = `
*Ping :* *_${Number(neow - eold).toFixed(2)} milisecond(s)_*

💼 » *_Info Server_*
*- Hostname :* ${(os.hostname() || client.user?.name)}
*- Platform :* ${os.platform()}
*- OS :* ${os.version()} / ${os.release()}
*- Arch :* ${os.arch()}
*- RAM :* ${formatSize(os.totalmem() - os.freemem(), false)} / ${formatSize(os.totalmem(), false)}

*_Runtime OS_*
${runtime(os.uptime())}

*_Runtime Bot_*
${runtime(process.uptime())}

*_NodeJS Memory Usage_*
${Object.keys(used).map((key, _, arr) => `*- ${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')} :* ${formatSize(used[key])}`).join('\n')}
*- Heap Executable :* ${formatSize(heapStat?.total_heap_size_executable)}
*- Physical Size :* ${formatSize(heapStat?.total_physical_size)}
*- Available Size :* ${formatSize(heapStat?.total_available_size)}
*- Heap Limit :* ${formatSize(heapStat?.heap_size_limit)}
*- Malloced Memory :* ${formatSize(heapStat?.malloced_memory)}
*- Peak Malloced Memory :* ${formatSize(heapStat?.peak_malloced_memory)}
*- Does Zap Garbage :* ${formatSize(heapStat?.does_zap_garbage)}
*- Native Contexts :* ${formatSize(heapStat?.number_of_native_contexts)}
*- Detached Contexts :* ${formatSize(heapStat?.number_of_detached_contexts)}
*- Total Global Handles :* ${formatSize(heapStat?.total_global_handles_size)}
*- Used Global Handles :* ${formatSize(heapStat?.used_global_handles_size)}
${cpus[0] ? `

*_Total CPU Usage_*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `*- ${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*_CPU Core(s) Usage (${cpus.length} Core CPU)_*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `*- ${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
            await msg.reply(teks)
         }
            break     
     
case prefix + ["contact"] : case prefix + ["kontak"] : {
    if (!isOwner) return msg.reply('Hanya owner')
            if (!q) return msg.reply("Mau nyari siapa?")
            let contacts = Object.values(store.contacts).filter(v => [v.name, v.verifiedName, v.notify].some(name => name && name.toLowerCase().includes(q.toLowerCase())))
            if (contacts.length === 0) return msg.reply("Kontak gaada")
            const number = await contacts.map(v => v && v.id)
            const kon = number.map(number => number.replace(/@s.whatsapp.net/g, ''));
            await client.sendContact(from, kon, msg)
         }
            break     
     
case prefix + ["getsw"]: 
case prefix + ["sw"]: {
    try {
        if (!isOwner) return msg.reply('Hanya owner')
        if (!q) return msg.reply('mau ambil sw siapa');
        if (store.messages["status@broadcast"].array.length === 0) return msg.reply("Gaada 1 status pun");
        
        let contacts = Object.values(store.contacts);
        let [who, value] = q.split(/[,|\-+&]/);
        value = value?.replace(/\D+/g, "");

        let sender;
        if (sender) sender = mention[0];
        else if (q) sender = contacts.find(v => [v.name, v.verifiedName, v.notify].some(name => name && name.toLowerCase().includes(who.toLowerCase())))?.id;

        let stories = store.messages["status@broadcast"].array;
        let story = stories.filter(v => v.key && v.key.participant === sender || v.participant === sender).filter(v => v.message && v.message.protocolMessage?.type !== 0);
        
        if (story.length === 0) throw new Error("Gaada sw nya");
        
        if (value) {
            if (story.length < value) throw new Error("Jumlahnya ga sampe segitu");
            await client.copyMSGForward(from, story[value - 1], true);
        } else {
            for (let mg of story) {
                await sleep(1500);
                await client.copyMSGForward(from, mg, true);
            }
        }
    } catch (error) {
        msg.reply("Terjadi kesalahan: " + error.message);
    }
}
break;

case prefix + ["listsw"] : {
    try {
      if (!isOwner) return msg.reply('Hanya owner')
       if (!store.messages["status@broadcast"].array.length === 0) return msg.reply("Gaada 1 status pun")
            let stories = store.messages["status@broadcast"].array
            let story = stories.filter(v => v.message && v.message.protocolMessage?.type !== 0)
            if (story.length === 0) return msg.reply("Status gaada")
            const result = {}
            story.forEach(obj => {
               let participant = obj.key.participant || obj.participant
               participant = jidNormalizedUser(participant === "status_me" ? client.user.id : participant)
               if (!result[participant]) {
                  result[participant] = []
               }
               result[participant].push(obj)
            })
            let type = (mType) => getContentType(mType) === "extendedTextMessage" ? "text" : getContentType(mType)
            let text = ""
            for (let id of Object.keys(result)) {
               text += `*- ${await client.getName(id)}*\n`
               text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`
            }
            await client.sendMessage(from, { text: text.replace(/Message/g, "").trim()}, { mentions: Object.keys(result) })
         } catch (error) {
        msg.reply("Terjadi kesalahan: " + error);
    }
}
break;

case prefix + 'listcontact':
case prefix + 'listkon':
case prefix + 'listkontak': {
 if (!isOwner) return msg.reply('Hanya owner')
  const contacts = Object.values(store.contacts);
  let text = "";
  for (let contact of contacts) {
    text += `*- ${contact.name}*\n`;
  }
  await client.sendMessage(from, { text: text.trim() }, { mentions: contacts.map(contact => contact.id) });
  }
  break;

case prefix + ['ardi'] : {
        if (!q) return msg.reply('Teks nya mana?')
         try {
         let ardi = await getBuffer("https://api.yanzbotz.my.id/api/tts/ardi?query=" + q + "&apiKey=" + global.apikey)
          client.sendMessage(from, { audio: ardi, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break  
        
case prefix + ['yanz'] : {
        if (!q) return msg.reply('Teks nya mana?')
         try {
         let yanz = await getBuffer("https://api.yanzbotz.my.id/api/tts/yanz?query=" + q + "&apiKey=" + global.apikey)
          client.sendMessage(from, { audio: yanz, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break   
        
case prefix + ['janie'] : {
        if (!q) return msg.reply('Teks nya mana?')
         try {
         let jannie = await getBuffer("https://api.yanzbotz.my.id/api/tts/janie?query=" + q + "&apiKey=" + global.apikey)
          client.sendMessage(from, { audio: jannie, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break               

case prefix + ['ai'] : case prefix + ['openai'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let quest = await fetchJson("https://api.yanzbotz.my.id/api/ai/openai?query=" + q + "&apiKey=" + global.apikey)
          client.sendMessage(from, {text: quest.result.choices[0].text }, { quoted: msg });
          } catch (e) {
          	msg.reply("Eror")
           }
        }
        break 
        
case prefix + ['rangkum'] : case prefix + ['ringkas'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let rangkum = await fetchJson("https://api.yanzbotz.my.id/api/ai/rangkum?query=" + q + "&apiKey=" + global.apikey)
          client.sendMessage(from, {text: rangkum.result }, { quoted: msg });
          } catch (e) {
          	msg.reply("Eror")
           }
        }
        break 
        
case prefix + ['simi'] : case prefix + ['simisimi'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let SimSimi = await fetchJson("https://api.yanzbotz.my.id/api/ai/simi?query=" + q + "&apiKey=" + global.apikey)
          client.sendMessage(from, {text: SimSimi.result }, { quoted: msg });
          } catch (e) {
          	msg.reply("Eror")
           }
        }
        break                 

case prefix + ['gptvoice'] : case prefix + ['aivn'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let tes = await getBuffer("https://api.akane.my.id/api/ai/gptvoice?query=" + q + "&apiKey=" + global.apikey)
          client.sendMessage(from, { audio: tes, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break      
 
case prefix + ['backup'] : {
	const ls = (await execSync('ls')).toString().split('\n').filter(pe => pe != 'node_modules' && pe != 'package-lock.json' && pe != 'session' && pe != 'Dockerfile' && pe != 'yarn.lock' && pe != '')
    const executed_bp = await execSync(`zip -r backup_bot.zip ${ls.join(' ')}`)
    await client.sendMessage(global.ownerNumber + "@s.whatsapp.net", {document: await fs.readFileSync('./backup_bot.zip'), mimetype: 'application/zip', fileName: 'backup_bot.zip'}, {quoted: msg })
    await execSync('rm -rf backup_bot.zip')
  }
break

    //=============================0==========================// 
                                           /* { akhir case } */  
    //=======================================================//
  
  default:
  
   //=======================================================//
                      /* { includes } */   
   //=======================================================//


 }

}//end module exports
let file = require.resolve(__filename)
 fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.red(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})

//
