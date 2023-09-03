const { TelegraPh } = require('../lib/telegraph')
const { fetchJson } = require("../lib/function")    
 
module.exports = {
	order: ['enhance','hd','remini'],
	exec: async (msg, client, from, {
		q,
		args,
		order,
		prefix
	}) => {
	try{
	 if (!msg.isQuotedImage) return msg.reply('Reply image')
	 msg.reply('_Tunggu sebentar, sedang proses..._')
     let media = await client.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
     let tph = await TelegraPh(media)
     let enhanced = await fetchJson("https://api.akane.my.id/api/tools/enhance?url=" + tph )
     try{
        client.sendMessage(from, { document : { url : enhanced.result.url }, fileName : 'Result.jpg', mimetype: 'image/jpeg' }, { quoted : msg})
     } catch {
       msg.reply("Sending image error!\ntrying to send in document form..... ")
       client.sendMessage(from, { document: enhanced.url, fileName: ranJ, mimetype: 'image/jpeg', caption: 'Result' }, { quoted: msg });
     }
    } catch (e) {
      msg.reply("!Type error:\n" + e)
    }
	}
}