const { Client, Message, PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "kick",
  description: "kicka um utilizador",
  category: "Moderação",
  userPermissions: [PermissionFlagsBits.KICK_MEMBERS],
  botPermissions: [PermissionFlagsBits.KICK_MEMBERS],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message, args) => {
    let user = message.mentions.users.first();
    let member = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first();
    let reason = args.slice(1).join(" ");
  
    if (!user) return message.channel.send("Quem?");
    if (user.id === message.author.id)
      return message.channel.send("Não te consegues kickar...");
    if (user.id === client.user.id)
      return message.channel.send("Não me consegues kickar!");
  
    if (!reason) reason = "Sem rasão";
  
    member
      .kick([reason])
      .then(() => {
        message.channel.send(`**${user.tag}** Foi kickado com sucesso!`);
      })
      .catch(err => {
        message.reply("Mestre eu... Falhei");
      });
  },
};
