const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("icon")
    .setDescription("Get server icon"),
  async execute(interaction) {
    await interaction.reply(interaction.guild.iconURL({ dynamic: true }));
  },
};
