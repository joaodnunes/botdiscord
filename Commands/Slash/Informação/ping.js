const {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  name: "ping",
  description: "Mostra o ping do bot",
  category : "Utility",
  type: ApplicationCommandType.ChatInput,
  
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Pinging...')
      .setFooter({ text: 'Some foot'});
    
      const sent  = await interaction.reply({
        content: 'Pinging...',
        embeds: [embed],
        fetchReply: true
    });

    try {
      embed
        .addFields(
          {
            name: '⌛ Latency', 
            value: `**${sent.createdTimestamp - interaction.createdTimestamp}ms**`},
          {
            name: '💓 API', 
            value: `**${Math.floor(client.ws.ping)}ms**`}
        );

      return interaction.editReply({
        content: '🏓 Pong!',
        embeds: [embed]
      });
    } catch (error) {
      return interaction.editReply(`Something went wrong: ${error.message}`);
    };
  }
};