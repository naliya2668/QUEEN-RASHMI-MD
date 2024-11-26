// YT MP3 DOWNLOAD COMMAND 

const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://www.npmjs.com/package/@dark-yasiya/yt-dl.js' // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, reply, q}) => {
try{

if(!q) return reply('*Please give me song name or url ⁉️*')
    
const search = await fetchJson(`${apilink}/search/yt?q=${q}`)
const data = search.result.data[0];
const url = data.url
    
const ytdl = await fetchJson(`${apilink}/download/ytmp3?url=${data.url}`)
    
let message = `‎‎
🎶 *QUEEN RASHMI MD WA-BOT SONG DOWNLOADER* 🎶

┌───────────────────
├ *ℹ️ Title:* ${data.title}
├ *📚 channel:* ${data.author.name}
├ *👁️‍🗨️ Views:* ${data.views}
├ *🕘 Duration:* ${data.timestamp}
├ *📆 Published:* ${data.ago}
├ *📥 Size:* ${data.size}
├ *🔗 Url:* ${data.url}
└───────────────────

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪɴᴀ ᴏꜰᴄ ||*
` 
await conn.sendMessage(from, { image: { url : data.thumbnail }, caption: message }, { quoted : mek })
  
// SEND AUDIO NORMAL TYPE and DOCUMENT TYPE
await conn.sendMessage(from, { audio: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg" }, { quoted: mek })
await conn.sendMessage(from, { document: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg", fileName: data.title + ".mp3", caption: `${data.title}`}, { quoted: mek })
  
} catch(e){
console.log(e)
reply(e)
}
})

//-----------video-dl---------------

cmd({
    pattern: "darama",
    alias: ["video2"],
    desc: "To download videos.",
    react: "🎥",
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
├ *ℹ️ Title:* ${data.title}
├ *📚 channel:* ${data.author.name}
├ *👁️‍🗨️ Views:* ${data.views}
├ *🕘 Duration:* ${data.timestamp}
├ *📆 Published:* ${data.ago}
├ *📥 Size:* ${data.size}
├ *🔗 Url:* ${data.url}
└───────────────────

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪɴᴀ ᴏꜰᴄ ||*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ⁴³²*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})
