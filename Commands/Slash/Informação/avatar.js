const {
  ApplicationCommandType,
  Client,
  CommandInteraction,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Dá te o teu avatar",
  category: "Utility",
  type: ApplicationCommandType.ChatInput,

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {

    const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setFooter({ text: 'Some foot'})
      .setTitle("O teu avatar")
      .setImage(`${interaction.user.displayAvatarURL({
        extension: "png",
        size: 512,
      })}}`);

    await interaction.reply({
      content: 'Avatar',
      embeds: [embed],
      fetchReply: true
    });
  },
};
