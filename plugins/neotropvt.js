const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/9044c87c926a8e2acdb58.jpg";
    r_text[1] = "https://telegra.ph/file/1938925f4d2dbc382b4eb.jpg";
    r_text[2] = "https://telegra.ph/file/0939ae5131ac165ead8c0.jpg";
    r_text[3] = "https://telegra.ph/file/e69e9fe6787452c9a4cbf.jpg";
    r_text[4] = "https://telegra.ph/file/701e68cd1ac391b2760ff.jpg";
    r_text[5] = "https://telegra.ph/file/3bce2e64809d7313ef70a.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━🎭ɴᴇᴏᴛʀᴏ -𝙭🪐 ʙᴏᴛ ━━━*  
*Bang!! Bang!! Im Alive Now*
*🔥Version : -v5.3 Global Stable*
*🔥Branch :  Vanzino*

*➞𝐓ᴇᴇɴᴜ𝐗↺*
*Join Our Support Group*
https://chat.whatsapp.com/GTgqgMTo7FoJ1GqdijshsX

*Thank For Using 🎭ɴᴇᴏᴛʀᴏ - 𝙭🪐*
`}) 

