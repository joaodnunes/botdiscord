const client = require("../index");
const { PREFIX } = require("../settings/config.js");
const { PermissionsBitField } = require('discord.js');
const {profanities} = require('../settings/config.js');

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild) return;
  

  //Censura no chat
  if (message.bot || message.author === client.user){}
  else if (message.member.permissions.has(PermissionsBitField.Flags.Administrator)){}
  else {
    let msg = message.content.toLowerCase();
    for(x = 0; x < profanities.length ; x++){
      if (msg.includes(profanities[x])) {
        await message.reply("Má escolha de palavras!");
        return message.delete();
      }
    }
  }
  //Fim de censura 


  let args = message.content.slice(PREFIX.length).trim().split(/ +/);
  let cmd = args.shift()?.toLowerCase();
  const command = client.mcommands.get(cmd);
  if (!command) return;
  if (command) {
    if (
      command.userPermissions &&
      !message.member.permissions.has(command.userPermissions)
    ) {
      return message.reply({
        content: `you don't have enough permissions !!`,
      });
    } else if (
      command.botPermissions &&
      !message.guild.members.me.permissions.has(command.botPermissions)
    ) {
      return message.reply({
        content: `i don't have enough permissions !!`,
      });
    } else {
      command.run(client, message, args);
    }
  }
});
