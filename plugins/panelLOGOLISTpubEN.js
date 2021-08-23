const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.LANG == 'EN') {
if (Config.WORK_TYPE == 'public') {

    Asena.addCommand({pattern: 'textimg', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
*╔═▣════❖⦁⦁⦁👽⦁⦁❖═════╗*
*╠▷Neotro Logo Pack🎭◁╣*
*╚══════════════════╝*

This makes it easy to create different LoGo All you have to do is put your letters in front of the following command.
Example: .ninjalogo Neotrox

▷ Failure to execute some of the commands here is not a bot error but an API issue with the service.

*🚀command* : .silk
*💠 Description* : Create your font on a Natural Silk panel.

*🚀command* : ▷ .lava
*💠Description* : Creates your font as Lava.

*⚜command*: ▷ .rock
*💠Description* : Translates letters as a stone

*⚜command*: ▷ .sbanner
*💠 Description* : Creates gaming banners.

*⚜command*: ▷ .warface
*💠 Description* : Creates gaming banners.

*⚜command*:  .coverwatch
*💠 Description* : Creates gaming banners.

*⚜command*: ▷ .mtm
*💠 Description* : Creates fonts as Mattrix.

*⚜command*: ▷ .wmatrix
*💠 Description* : Creates fonts as a web mattrix.

*⚜command*: ▷ .sand
*💠 Description* : Creates a beach font.

*🚀command:* ▷  .bcwall
*🪐Description:* It translates characters as a wall art

*🌀command:* ▷  .ninjalogo
*🧞Description:* It creates a ninja style logo

*🌀command:* ▷ .buttonyt
*🧞Description:* This will add your text to the Youtube Golden button.

*🚀command:* ▷ .glitch
*🌀Description:* Photographs text in glitch format

*🚀command:* ▷ ▷ .freefire
*🧞 Description:* Creates freefire gaming logo

*🌀command:* ▷ .cfire
*🧞Description:* Creates gaming logo

*🚀command:* ▷ .light
*🧞Description:* Translates text into Neon text

*🌀command:* ▷  .cslogo
*🧞Description:* Creates gaming logo

*🌀command:* ▷  .nlogo
* 🧞Description:* Makes your font look like a logo

*🚀command:* ▷ .s3d
*🌀Description:* Sets the text as a 3D Box

*🌀command:* ▷  .blackpink
*🧞Description:* Makes your font look like a blackpink logo.

*🌀command:* ▷  .pornhub
*🧞 Description:* Set your font to Pornhub Logo

*🌀command:* ▷  .neolight
*🧞Description:* .It processes letters in a Neoncube

*command:* ● ▷ .blood
*🧞Description:* The letters are processed into bloody photos

*🌀command:* ● ▷ .3dtext
* 🧞Description:* Configures the font as 3D

*🌀command:* ns .nsky
*🚀Description:* Turns letters into photos drawn in the sky.

*🌀command:* ● ▷ .nleaves
*🧞Description:* The letters are written on bright grass.

*🌀command:* ▷ ▷ .nglow
*🚀Description:* Sets as Neon

*🌀command:* ▷ ▷ .nfire
*🧞Description:* It photographs the text brilliantly.

*command:* ▷ .anony
*🧞Description:* It translates your characters into a photo of anonymous hackers.

*🌀command:* .ptext
*💠 Description*: It converts text into video

*command*: .colortext
*💠Description*: Converts text to video as rainbow color

*🌀command*: .vtext
*💠 Description*: Converts text into video.

*━⚜NEUTRO PACK⚜━*
`}) 

 }));
 }
}
