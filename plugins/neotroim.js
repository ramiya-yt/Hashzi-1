const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'textimg', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('*🙇🎭NEOTRO-X LoGo pack🧸*\n\n🔏️විධානය: *.glitch*\n🧞‍♂️️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Neotro/girl)_\n\n🔏️විධානය: *.emoji*\n🧞‍♂️️විස්තර: Emoji සිට පින්තූරයට.\n\n🔏️විධානය: *.ninja*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ Ninja Logo සෑදීම.\n\n🔏️විධානය: *.gaming*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n🔏️විධානය: *.shadow*\n🧞‍♂️️විස්තර: ඔබේ text සඳහා සෙවනැලි effect wallpaper සෑදිය හැකිය.\n\n🔏️විධානය: *.cup*\n🧞‍♂️️විස්තර: ඔබට ඔබේ text කෝප්පයක් මත ටයිප් කළ හැකිය.\n\n🔏️විධානය: *.wolf*\n🧞‍♂️️විස්තර: ලෝහමය වෘක බැනරයකින් ඔබේ text ටයිප් කළ හැකිය.\n\n🔏️විධානය: *.fflogo*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n🔏️විධානය: *.flame*\n🧞‍♂️️විස්තර: ඔබට ඔබේ text ගිනිදැල් බවට පත් කළ හැකිය.\n\n🔏️විධානය: *.avenger*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n\n🔏️විධානය: *.harrypoter*\n🧞‍♂️️විස්තර: ඔබට හැරීපොටර් වර්ගයේ logo සෑදිය හැකිය.\n\n🔏️විධානය: *.avte*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ Avatar logo සෑදිය හැකිය.\n\n🔏️විධානය: *.lionlogo*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo neotro/girl)_\n\n🔏️විධානය: *.metal*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n🔏️විධානය: *.pornhub*\n🧞‍♂️️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n🔏️විධානය: *.sandwriting*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n🔏️විධානය: *.blackpink*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n🔏️විධානය: *.blood*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n🔏️විධානය: *.thunder*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ අකුණු සහිත රූපයක් යවයි.\n\n🔏️විධානය: *.snow*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n🔏️විධානය: *.light*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n🔏️විධානය: *.cloud*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n🔏️විධානය: *.sparkling*\n🧞‍♂️️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n🔏️විධානය: *.watercolour*\n🧞‍♂️️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n🔏️විධානය: *.neonlight*\n🧞‍♂️️විස්තර: Text නියොන් ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n🔏️විධානය: *.3d*\n🧞‍♂️️විස්තර: ලබා දී ඇති text ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n🔏️විධානය: *.s3d*\n🧞‍♂️️විස්තර: සපයා ඇති text violet ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.');
        
    }));

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/glitch?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'emoji ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])
    
    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=fHZpP3j61LgH80BzanBm92jch1Q&emoji=' + uri, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*' })

    }));


    Asena.addCommand({pattern: 'fflogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/shadow?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
  
      }));

    Asena.addCommand({pattern: 'cup ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/cup?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
    
    }));

    Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/wolfmetal?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
  
  }));

  Asena.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/flamming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

  }));

    Asena.addCommand({pattern: 'avenger ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 's3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'light ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'metal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'avte ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatardota?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
  
    }));

    Asena.addCommand({pattern: 'legend ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatarlolnew?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
  
    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy2/arcade8bit?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/watercolor?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/cloud?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'snow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/snow3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'lionlogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'ninja ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/logogaming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/fpslogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/bloodfrosted?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: '3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/box3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'textimg', fromMe: false, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('*🙇🎭NEOTRO-X LoGo pack🧸*\n\n🔏️විධානය: *.glitch*\n🧞‍♂️️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Neotro/girl)_\n\n🔏️විධානය: *.emoji*\n🧞‍♂️️විස්තර: Emoji සිට පින්තූරයට.\nඋදා: .emoji 🤪\n\n🔏️විධානය: *.ninja*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ Ninja Logo සෑදීම.\n\n🔏️විධානය: *.gaming*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n🔏️විධානය: *.shadow*\n🧞‍♂️️විස්තර: ඔබේ text සඳහා සෙවනැලි effect wallpaper සෑදිය හැකිය.\n\n🔏️විධානය: *.cup*\n🧞‍♂️️විස්තර: ඔබට ඔබේ text කෝප්පයක් මත ටයිප් කළ හැකිය.\n\n🔏️විධානය: *.wolf*\n🧞‍♂️️විස්තර: ලෝහමය වෘක බැනරයකින් ඔබේ text ටයිප් කළ හැකිය.\n\n🔏️විධානය: *.freefire*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n🔏️විධානය: *.flame*\n🧞‍♂️️විස්තර: ඔබට ඔබේ text ගිනිදැල් බවට පත් කළ හැකිය.\n\n🔏️විධානය: *.avenger*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n\n🔏️විධානය: *.harrypoter*\n🧞‍♂️️විස්තර: ඔබට හැරීපොටර් වර්ගයේ logo සෑදිය හැකිය.\n\n🔏️විධානය: *.avte*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ Avatar logo සෑදිය හැකිය.\n\n🔏️විධානය: *.lionlogo*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo neotro/girl)_\n\n🔏️විධානය: *.metal*\n🧞‍♂️️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n🔏️විධානය: *.pornhub*\n🧞‍♂️️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n🔏️විධානය: *.sandwriting*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n🔏️විධානය: *.blackpink*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n🔏️විධානය: *.blood*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n🔏️විධානය: *.thunder*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ අකුණු සහිත රූපයක් යවයි.\n\n🔏️විධානය: *.snow*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n🔏️විධානය: *.light*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n🔏️විධානය: *.cloud*\n🧞‍♂️️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n🔏️විධානය: *.sparkling*\n🧞‍♂️️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n🔏️විධානය: *.watercolour*\n🧞‍♂️️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n🔏️විධානය: *.neonlight*\n🧞‍♂️️විස්තර: Text නියොන් ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n🔏️විධානය: *.3d*\n🧞‍♂️️විස්තර: ලබා දී ඇති text ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n🔏️විධානය: *.s3d*\n🧞‍♂️️විස්තර: සපයා ඇති text violet ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.');
    }));

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/glitch?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'emoji ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])

    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=fHZpP3j61LgH80BzanBm92jch1Q&emoji=' + uri, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*' })

    }));


    Asena.addCommand({pattern: 'freefire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/shadow?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
  
      }));

    Asena.addCommand({pattern: 'cup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/cup?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
    
    }));

    Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/wolfmetal?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
  
    }));

    Asena.addCommand({pattern: 'avenger ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 's3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'light ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'metal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/flamming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
  
    }));

    Asena.addCommand({pattern: 'avte ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatardota?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
  
    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy2/arcade8bit?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/watercolor?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'legend ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatarlolnew?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})
  
    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/cloud?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'snow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/snow3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'lionlogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'ninja ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/logogaming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/fpslogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/bloodfrosted?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));

    Asena.addCommand({pattern: '3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/box3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*'})

    }));
}
