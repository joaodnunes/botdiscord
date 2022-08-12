const { Client, Message, PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "ban",
  description: "ban um utilizador",
  category: "Moderação",
  userPermissions: [PermissionFlagsBits.BAN_MEMBERS],
  botPermissions: [PermissionFlagsBits.BAN_MEMBERS],
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
      return message.channel.send("Não te consegues ban...");
    if (user.id === client.user.id)
      return message.channel.send("Não me consegues ban!");
  
    if (!reason) reason = "Sem rasão";
  
    member
      .ban({reason})
      .then(() => {
        message.channel.send(`Banido com sucesso **${user.tag}**!`);
      })
      .catch(err => {
        message.reply("Não consegui banir. ");
        console.log(err)
      });
  },
};
