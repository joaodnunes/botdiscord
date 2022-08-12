const { Client, Message, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "get ping of bot",
  category: "info",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Pinging...')
      .setFooter({ text: 'Some foot'});
    
      const sent  = await message.reply({
      content: 'Pinging...',
      embeds: [embed],
      fetchReply: true
    });

    try {
      embed
        .addFields(
          {
            name: '⌛ Latency', 
            value: `**${sent.createdTimestamp - message.createdTimestamp}ms**`},
          {
            name: '💓 API', 
            value: `**${Math.floor(client.ws.ping)}ms**`}
        );

      return sent.edit({
        content: '🏓 Pong!',
        embeds: [embed]
      });
    } catch (error) {
      return sent.edit(`Something went wrong: ${error.message}`);
    };
  },
};
