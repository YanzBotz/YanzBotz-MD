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
  const { spawn, exec } = modul['child'];
  const { downloadContentFromMessage, WA_DEFAULT_EPHEMERAL, getLastMessageInChat, MessageType, generateWAMessageFromContent, proto } = modul['baileys'];
  const { GRIS, SearchResult } = modul['gris'];
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
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
  apiKey: "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", //Apikey luh
   });
  const openai = new OpenAIApi(configuration);
 
   //=======================================================//
                       /* { js } */
   //=======================================================//
 
  const { color, bgcolor, ConsoleLog, biocolor } = require('.' + getreq['color'])
  const { reSize, runtime, getBuffer, getRandom, pickRandom, fetchJson, genMath} = require('.' + getreq['funct'])
  const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('.' + getreq['exif'])
  
  //=======================================================//
                       /* { media } */
  //=======================================================//

  const thumb = fs.readFileSync(getreq['thumb'])
  
//=======================================================//
                       /* { exports this function } */
//=======================================================//

module.exports = async(msg, client, from, store) => {
    
    //=======================================================//
                          /* { detect } */  
    //=======================================================//
   const banChats = SETTING['banchats']
   const anti212 = SETTING['banned']['maroko']
   const anti9 = SETTING['banned']['india']
   const isGrouP = msg.key.remoteJid.endsWith('@g.us')
   const sender = isGrouP ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
   const pushname = msg.pushName || "No Name"
   const CMD = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'   
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
   
const isWebp = (msg.xtype === 'imageMessage' || msg.xtype === 'videoMessage')
const isImage = (msg.xtype == 'imageMessage')
const isVideo = (msg.xtype == 'videoMessage')
const isSticker = (msg.xtype == 'stickerMessage')
const isQuotedMsg = (msg.xtype == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
const isQuotedTag = isQuotedMsg ? content.includes('mentionedJid') ? true : false : false
const isQuotedReply = isQuotedMsg ? content.includes('Message') ? true : false : false
   //=======================================================//
                    /* { quoted } */  
    //=======================================================//
  
 
   //=======================================================//
                    /* { participant mentions } */   
   //=======================================================//

   const mentionByTag = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
          mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : false 
  //=======================================================//
                          /* { function } */   
  //=======================================================//

   const sleep = async (ms) => {
       return new Promise(resolve => setTimeout(resolve, ms))
   }
                   
    const formatSize = sizeFormatter({
 	std: "JEDEC",
	decimalPlaces: "2",
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`,
   });   
   
   
   //=======================================================//      
         /* { stiker limit } */
   //=======================================================//

const sendLimit = () => {
            return client.sendMessage(from, {
                sticker: fs.readFileSync('./storage/limit.webp')
            }, {
                quoted: msg
            })
        }
        
   //=======================================================//
                         /* { plugins } */ 
    //=======================================================//
    
   for (let name in plugins) {
                let plugin = plugins[name]              
                if (plugin.order && plugin.order.includes(orderPlugins)) {
                    let turn = plugin.order instanceof Array
                        ? plugin.order.includes(orderPlugins)
                        : plugin.order instanceof String
                            ? plugin.order == orderPlugins
                            : false
                    if (!turn) continue
                    if (plugin.owner && !isOwner){ msg.reply(keywords[0]['message'][2])
                    continue 
                    }
                    if (plugin.group && !isGroup){ msg.reply(keywords[0]['message'][1])
                    continue
                    }
                    if (plugin.groupAdmins && !isGroupAdmins){ msg.reply(keywords[0]['message'][3])
                    continue
                    }
                    if (plugin.botGroupAdmins && !isBotGroupAdmins){ msg.reply(keywords[0]['message'][4])
                    continue
                    }
          await plugin.exec(msg, client, from, { q, args, order })
       }
   }         
   
const nay1 = { key: {fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { contactMessage: { displayName: `${msg.sayingtime + msg.timoji}\n☏User: ${pushname}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' }}}  
    //=======================================================//               
                                         /* { eval } */
    //=======================================================//
    
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
     
     
     //=======================================================//
                                   /* { function pplong } */
     //=======================================================//
     
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
     //true = self / false = public
     if (banChats === true) { if(!isOwner && !msg.key.fromMe) return }  
     //blocked country!

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
                         /* { cases } */   
   //=======================================================//
                       
    switch(order){
     
     case prefix + ['tes'] :{
     msg.reply('_Oke sip nyala botnya_')
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

case prefix + ['ai-img'] :{
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

case prefix + ['openai'] :{
        if (!q) return msg.reply("Input Text!!!")
	const completion = await openai.createCompletion({
        model: "text-davinci-003",
         prompt: q,
         temperature: 0.9,
         max_tokens: 4000,
         top_p: 0.9,
         frequency_penalty: 0.0,
         presence_penalty: 0.0,
        });
        var buttons = [
                    {buttonId: `#openai ${q}`, buttonText: {displayText: 'Cari Jawaban Lain 🔍'}, type: 1},
                    {buttonId: `#puas`, buttonText: {displayText: 'Jawaban Yng Tepat 🥳'}, type: 1}
                ]
var buttonMessage = {
                    text: "```Answers :\n```" + completion.data.choices[0].text,
                    footer: 'Robot Artificial Intelligence',
                    buttons: buttons,
                    headerType: 2
                }
                client.sendMessage(from, buttonMessage, { quoted: msg })
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
