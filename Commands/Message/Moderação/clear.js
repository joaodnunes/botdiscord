const { Client, Message, PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "clear",
  description: "Limpa o chat",
  category: "Moderação",
  userPermissions: [PermissionFlagsBits.MANAGE_MESSAGES],
  botPermissions: [PermissionFlagsBits.MANAGE_MESSAGES],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message, args) => {
    if (message.deletable) {
        message.delete();
      }
    
      // Check if args[0] is a number
      if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message
          .reply("É para apagar quantas mensagens?")
          .then(m => m.delete(5000));
      }
      // Maybe the bot can't delete messages
      if (!message.member.permissions.has("MANAGE_MESSAGES")) {
        return message
          .reply("Infelizmente não consigo apagar mensagens")
          .then(m => m.delete(5000));
      }
    
      let deleteAmount;
    
      if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
      } else {
        deleteAmount = parseInt(args[0]);
      }
    
      message.channel
        .bulkDelete(deleteAmount, true)
        .then(deleted =>
          message.channel.send(`Apaguei \`${deleted.size}\` mensagens!`)
        )
        .catch(err => message.reply(`Algo deu errado ${err}`));
  },
};
