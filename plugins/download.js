const {cmd , commands} = require('../command')
const fg = require('@dark-yasiya/yt-dl.js')
const yts = require('yt-search')
cmd({
    pattern: "play2",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
🎶 *QUEEN RASHMI MD WA-BOT SONG DOWNLOADER* 🎶

┌───────────────────
├ *ℹ️ Title:* ${yts.title}
├ *📚 channel:* ${yts.author.name}
├ *👁️‍🗨️ Views:* ${yts.views}
├ *🕘 Duration:* ${yts.timestamp}
├ *📆 Published:* ${yts.ago}
├ *📥 Size:* ${yts.size}
├ *🔗 Url:* ${yts.url}
└───────────────────

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪɴᴀ ᴏꜰᴄ ||*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ⁴³²*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})
