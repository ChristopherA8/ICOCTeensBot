const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pfp")
    .setDescription("Fetch users profile picture"),
  async execute(interaction) {
    await interaction.reply(
      interaction.user.displayAvatarURL({ dynamic: true })
    );
  },
};
