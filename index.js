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
  const { move } = require(SETTING['file']['move'])
  let { default: makeWASocket, useMultiFileAuthState, jidDecode, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, proto } = SETTING['modul']['baileys']
  const { color, bgcolor, ConsoleLog, biocolor } = require(SETTING['file']['color'])

  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
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
              const client = makeWASocket({ logger: pino({ level: 'silent' }), printQRInTerminal: true, browser: ['YanzBotz MD','Safari','1.0.0'], auth: state })
              
              
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
                // anticall auto block
             
                
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
                     require('./message/msg.js')(msg, client, from, store) //client.sendPresenceUpdate('recording', from) 
                  })
                          
               
   
               
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