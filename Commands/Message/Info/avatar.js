const { Client, Message, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "get avatar of user",
  category: "info",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {

    const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setFooter({ text: 'Some foot'})
      .setTitle("O teu avatar")
      .setImage(`${message.author.displayAvatarURL({
        extension: "png",
        size: 512,
      })}}`);

    await message.reply({
      content: 'Avatar',
      embeds: [embed],
      fetchReply: true
    });
  },
};
