const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "🖤",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*𝙸'𝚖 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝙼𝙸-𝙼𝙳*

*┌───────────◉▸▷*
*├ʙᴏᴛ :- Qᴜᴇᴇɴ ᴅᴇᴡ-ᴍᴅ*
*├ᴏᴡɴᴇʀ :- ᴅᴀʀᴋ ᴛᴇᴄʜ-x*
*├ꜰʀᴏᴍ :- ᴋᴜʀᴜɴᴀɢᴀʟᴀ*
*├ᴀɢᴇ :- 999+*
*└───────────◉▸▷*

*ᴍᴏʀᴇ ᴅɪᴛᴇʟꜱ -* https://wa.me/+94764984597?text=_ʜᴇʏ÷ᴅᴇᴡ_ᴍᴅ_ʏᴏᴜ_ᴅɪᴛᴇʟꜱ_👨🏻‍💻👑📍

*ᴄʜᴀɴɴᴇʟ -* https://whatsapp.com/channel/0029VarGVHkIt5s1e1w6Nw2B

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴅᴇᴡ-ᴍᴅ*`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/JnXhmNt/b396cf85d267ec08.jpg`},caption:dec},{quoted:mek});
}catch(e){
console.log(e)
reply(`${e}`)
}
})
