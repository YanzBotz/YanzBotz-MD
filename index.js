  /**
       Thank for
       • allah swt
       • ortu
       • YanzBotz ( creator )
       • Febzabotz ( my team )
       • Aprilia ( my team )
       • Aldi Fauzi  ( my team )
       • Dika Ardnt
       • Rifza.p.p
       • IqbalzzX
    All creator bot, maaf kalau salah satu ga kesebut nama nya mohon maaf

/**
     Base By Aypa Team
       • Febzabotz 
       • YanzBotz 
       •  Aprilia 
       • Aldi Fauzi
  */
  console.log('Starting...');
  const SETTING = require('./lib/validator/config')
  const pino = SETTING['modul']['pino']
  const chalk = SETTING['modul']['chalk']
  const fs = SETTING['modul']['fs']
  const jimp = SETTING['modul']['jimp']
  const path = SETTING['modul']['path']
  let { Boom } = SETTING['modul']['boom']
  const PhoneNumber = SETTING['modul']['phonenumber']
  const NodeCache = SETTING['modul']['nodecache']
  const readline = SETTING['modul']['readline']
  const { move } = require(SETTING['file']['move'])
  const { smsg } = require(SETTING['file']['yanz'])
  let { default: makeWASocket, useMultiFileAuthState, jidDecode, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, proto, getAggregateVotesInPollMessage } = SETTING['modul']['baileys']
  const { color, bgcolor, ConsoleLog, biocolor } = require(SETTING['file']['color'])

//store
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

//pairingCode
  const pairingCode = process.argv.includes("--pairing-code")
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  const question = (text) => new Promise((resolve) => rl.question(text, resolve))
     //=======================================================//
                               /* { function } */
     //=======================================================//
     const sleep = async (ms) => {
       return new Promise(resolve => setTimeout(resolve, ms))
     }   
             
        try{      
         async function operate () {         
              let { state, saveCreds } = await useMultiFileAuthState(SETTING.sesionName)
              let { version } = fetchLatestBaileysVersion()
	      const msgRetryCounterCache = new NodeCache()
              const client = makeWASocket({ 
		      logger: pino({ level: 'silent' }), 
		      printQRInTerminal: !pairingCode, 
		      browser: ['YanzBotz MD','Safari','1.0.0'], 
                      auth: state,
                      getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "Hai Im YanzBotz"
	   }
	},
		      msgRetryCounterCache
     })


                /** plugins **/
             let pluginFolder = path.join(__dirname, './plugins')
              let pluginFilter = filename => /\.js$/.test(filename)
              global.plugins = {}
              for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
               try {
                     global.plugins[filename] = require(path.join(pluginFolder, filename))
                } catch (e) {
                     console.log(e)
                     delete global.plugins[filename]
               }
             }
             console.log(Object.keys(global.plugins))
     
               //=======================================================//
                                        /* { client.ev.on } */
               //=======================================================//
                
                 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*// 
               client.decodeJid = (jid) => {
                           if (!jid) return jid
                                if (/:\d+@/gi.test(jid)) {
                                let decode = jidDecode(jid) || {}
                            return decode.user && decode.server && decode.user + '@' + decode.server || jid
                     } else return jid
                 }    
                //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
               client.getName = (jid, withoutContact  = false) => {
                id = client.decodeJid(jid)
                withoutContact = client.withoutContact || withoutContact 
                 let v
                   if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
                    v = store.contacts[id] || {}
                    if (!(v.name || v.subject)) v = client.groupMetadata(id) || {}
                    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
                    })
                    else v = id === '0@s.whatsapp.net' ? {
                     id,
                     name: 'WhatsApp'
                     } : id === client.decodeJid(client.user.id) ?
                      client.user :
                      (store.contacts[id] || {})
                      return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
                 }
           //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//        
                 client.sendContact = async (jid, kon, quoted = '', opts = {}) => {
                	let list = []
                 	for (let i of kon) {
     	               list.push({
     	            	displayName: await client.getName(i),
     	             	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await client.getName(i)}\nFN:${await client.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:"yanzbotz@gmail.com"\nitem2.X-ABLabel:Email\nitem3.URL:"https://instagram.com/riyan_ff12"\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            	       })                	}
                	
              	client.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
               }
               
              

           //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//                       
      // pairing by @whiskeysockets/baileys
      if (pairingCode && !client.authState.creds.registered) {
      const phoneNumber = await question(`Please type your WhatsApp number : `)
      let code = await client.requestPairingCode(phoneNumber)
      console.log(`Your Pairing Code : ${code}`)
}
                
               client.ev.on('connection.update', async (update) => {
                   let { Connecting } = require("./connection/systemConnext.js")        
                         Connecting({update, client, Boom, DisconnectReason, sleep, operate}) 
                })      

               //save session 
                 client.ev.on('creds.update', saveCreds);   
                 store.bind(client.ev) 
               
                 client.ev.on('messages.upsert', async ({ messages }) => {
                      const msg = messages[0]; 
                       if (!msg.message) return
                           if (msg.key.remoteJid === 'status@broadcast' && SETTING['autoreadsw'] == true) {
			                	setTimeout(() => {
			    	             client.readMessages([msg.key])
					             let typ = getContentType(msg.message)
				    	         console.log((/protocolMessage/i.test(typ)) ? `${msg.key.participant.split('@')[0]} Deleted story❗` : 'View user stories : ' + msg.key.participant.split('@')[0]);
				                }, 500);
	                          }
                           const from = msg.key.remoteJid  
                           const type = getContentType(msg.message)
                           const textMessage = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
                          move(client, msg, store) 
                          smsg(client, msg, store) 
                     require('./message/msg.js')(msg, client, from, store) //client.sendPresenceUpdate('recording', from) 
                  })
                  
                  
//*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//                       
                // respon polling
                
async function getMessage(key) {
  	if (store) {
  		const msg = await store.loadMessage(key.remoteJid, key.id)
  		return msg?.message
      }  
      return {
      	conversation: "Hai Im YanzBotzX"
      }  
  }
  
  client.ev.on('messages.update', async chatUpdate => {
  	for (const { key, update } of chatUpdate) {
  		if (update.pollUpdates && key.fromMe) {
  			const pollCreation = await getMessage(key)
  			if(pollCreation) {
  				const pollUpdate = await getAggregateVotesInPollMessage({
  					message: pollCreation,
  					pollUpdates: update.pollUpdates,
  			    })		
  		        var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name	    
  		        if (toCmd == undefined) return
  		        var prefCmd = prefix+toCmd
  		        client.appenTextMessage(prefCmd, chatUpdate)
  		    }
  		 }
  	}
  })	           
                  
client.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return client.sendMessage(jid, { poll: { name, values, selectableCount }}) }               

//*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//                       
                // sendText
client.sendText = (jid, text, quoted = "", options) =>
client.sendMessage(jid, { text: text, ...options }, { quoted });       
client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
 await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}              
               
         }
       //=======================================================//
                                 /* { starting } */
       //=======================================================//
        operate ()
      } catch (e) { console.log(chalk.red(e)) }
  
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
process.on('uncaughtException', console.error)
