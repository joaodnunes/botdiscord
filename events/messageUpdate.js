const client = require("../index");
const { PermissionsBitField } = require('discord.js');
const {profanities} = require('../settings/config.js');

client.on("messageUpdate", async (oldMessage, newMessage) => {

  if (newMessage.bot || newMessage.author === client.user) return;
  if (newMessage.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return;

  let msg = newMessage.content.toLowerCase();
    for(x = 0; x < profanities.length ; x++){
      if (msg.includes(profanities[x])) {
        await newMessage.reply("Má escolha de palavras!");
        return newMessage.delete();
      }
    }

});